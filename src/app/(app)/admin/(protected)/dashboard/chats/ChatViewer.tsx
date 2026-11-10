'use client';
import { useMemo } from 'react';
import { collection, query, orderBy, type Timestamp } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from 'date-fns';

type ChatMessage = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Timestamp;
};

interface ChatViewerProps {
  chatId: string | null;
  onClose: () => void;
}

export function ChatViewer({ chatId, onClose }: ChatViewerProps) {
  const firestore = useFirestore();

  const messagesQuery = useMemo(() => {
    if (!firestore || !chatId) return null;
    return query(collection(firestore, `chats/${chatId}/messages`), orderBy('timestamp', 'asc'));
  }, [firestore, chatId]);

  const { data: messages, loading } = useCollection<ChatMessage>(messagesQuery);
  
  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return '';
    return format(timestamp.toDate(), 'p');
  };

  return (
    <Sheet open={!!chatId} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Chat Session</SheetTitle>
          <SheetDescription>
            Review the full conversation history.
          </SheetDescription>
        </SheetHeader>
        <div className="h-[calc(100vh-8rem)] mt-4">
            <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
                {loading && <p>Loading messages...</p>}
                {messages?.map((message) => (
                <div
                    key={message.id}
                    className={`flex items-end gap-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    {message.sender === 'bot' && (
                    <Avatar className="h-6 w-6">
                        <AvatarFallback>KA</AvatarFallback>
                    </Avatar>
                    )}
                    <div className="flex flex-col">
                        <div
                            className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                        >
                            {message.text}
                        </div>
                        <p className={`text-xs text-muted-foreground mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                            {formatDate(message.timestamp)}
                        </p>
                    </div>
                </div>
                ))}
                 {!loading && messages?.length === 0 && (
                    <p className="text-center text-muted-foreground">No messages in this chat yet.</p>
                 )}
            </div>
            </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
