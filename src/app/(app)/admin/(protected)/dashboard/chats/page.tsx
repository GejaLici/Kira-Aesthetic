'use client';
import { useMemo, useState } from 'react';
import { collection, query, orderBy, type Timestamp } from 'firebase/firestore';
import { useFirestore, useCollection } from '@/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { ChatViewer } from './ChatViewer';
import { Badge } from '@/components/ui/badge';

type ChatSession = {
  id: string;
  startedAt: Timestamp;
  lastMessage: string;
  lastMessageAt: Timestamp;
  userId?: string;
  userDisplayName?: string;
};

export default function ChatsPage() {
  const firestore = useFirestore();
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const chatsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'chats'), orderBy('lastMessageAt', 'desc'));
  }, [firestore]);

  const { data: chats, loading } = useCollection<ChatSession>(chatsQuery);

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return format(date, 'PPP p');
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Chatbot Conversations</CardTitle>
          <CardDescription>
            Review conversations your users have had with the AI assistant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Last Message</TableHead>
                <TableHead className="w-[180px] hidden lg:table-cell">User</TableHead>
                <TableHead className="w-[250px] hidden md:table-cell">Started At</TableHead>
                <TableHead className="w-[250px] hidden sm:table-cell">Last Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                    <TableCell><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden lg:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden md:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                    <TableCell className="hidden sm:table-cell"><Skeleton className="h-5 w-full" /></TableCell>
                </TableRow>
              ))}
              {!loading && chats?.map((chat) => (
                <TableRow key={chat.id} onClick={() => setSelectedChatId(chat.id)} className="cursor-pointer">
                  <TableCell className="font-medium truncate max-w-[300px]">{chat.lastMessage}</TableCell>
                   <TableCell className="hidden lg:table-cell">
                    {chat.userDisplayName && chat.userDisplayName !== 'Anonymous' ? (
                      <Badge variant="secondary">{chat.userDisplayName}</Badge>
                    ) : (
                      <Badge variant="outline">Anonymous</Badge>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{formatDate(chat.startedAt)}</TableCell>
                  <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">{formatDate(chat.lastMessageAt)}</TableCell>
                </TableRow>
              ))}
              {!loading && chats?.length === 0 && (
                <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                        No chat sessions found.
                    </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <ChatViewer 
        chatId={selectedChatId}
        onClose={() => setSelectedChatId(null)}
      />
    </>
  );
}
