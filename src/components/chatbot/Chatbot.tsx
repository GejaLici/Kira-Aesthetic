'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFirestore, useUser, useAuth } from '@/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { useRouter, useParams } from 'next/navigation';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

const SUGGESTED_OPTIONS = [
  "Our services",
  "Information about our services",
  "Would you like to book an appointment?"
];

const SERVICES_LIST = `We offer a wide range of premium treatments:
• Face: Rhinoplasty, Eyelid Surgery, Facelift, Hair/Beard Transplant.
• Breast: Augmentation, Lift, Reconstruction, Reduction.
• Body: Liposculpture, Tummy Tuck, BBL, Arm/Thigh Lift.
• Aesthetics: Fillers, PRP, Microneedling, Lipolysis, Sclerotherapy.
• Dentistry: Veneers, Whitening, Crowns, Implants, Braces.`;

const SERVICES_DETAILS = `At Kira Aesthetic, we provide specialized care across multiple disciplines:
• Face & Hair: Advanced FUE/DHI transplants and surgical reshaping for natural harmony.
• Breast & Body: Transformative procedures focused on proportions and long-term results.
• Medical Aesthetics: Non-surgical rejuvenation including high-end fillers and regenerative PRP therapy.
• Elite Dentistry: From E-Max veneers to complex oral surgery, restoring both function and beauty.`;

const DEFAULT_RESPONSE = "Thank you for reaching out! A dedicated advisor from Kira Aesthetic will be with you shortly to provide detailed information about our treatments and luxury care packages. In the meantime, feel free to explore our gallery or book a formal consultation via our website.";

const INITIAL_GREETING = "Hello, I'm Kira! Your virtual assistant, how can I help you today?";

export function Chatbot({ dictionary }: { dictionary: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: INITIAL_GREETING },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSessionId, setChatSessionId] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(true);
  
  const firestore = useFirestore();
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'en';

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen, isLoading]);

  const performDbOperations = async (userText: string, botText: string) => {
    if (!firestore || !auth) return;

    try {
      let currentSessionId = chatSessionId;
      let currentUser = user;

      if (!currentUser) {
        const cred = await signInAnonymously(auth);
        currentUser = cred.user;
      }

      if (!currentSessionId) {
        const sessionData = { 
          startedAt: serverTimestamp(),
          lastMessage: botText,
          lastMessageAt: serverTimestamp(),
          userId: currentUser.uid,
          userDisplayName: currentUser.isAnonymous ? 'Anonymous' : (currentUser.displayName || currentUser.email || 'Kira User')
        };
        const sessionRef = await addDoc(collection(firestore, 'chats'), sessionData);
        currentSessionId = sessionRef.id;
        setChatSessionId(currentSessionId);
        
        await addDoc(collection(firestore, `chats/${currentSessionId}/messages`), {
          sender: 'bot',
          text: INITIAL_GREETING,
          timestamp: serverTimestamp()
        });
      }

      await addDoc(collection(firestore, `chats/${currentSessionId}/messages`), {
        sender: 'user',
        text: userText,
        timestamp: serverTimestamp()
      });

      await addDoc(collection(firestore, `chats/${currentSessionId}/messages`), {
        sender: 'bot',
        text: botText,
        timestamp: serverTimestamp()
      });

      await updateDoc(doc(firestore, 'chats', currentSessionId), { 
        lastMessage: botText,
        lastMessageAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Silent error saving to DB:", err);
    }
  };

  const processMessage = async (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText || isLoading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmedText }]);
    setInput('');
    setIsLoading(true);
    setShowOptions(false);

    if (trimmedText === "Would you like to book an appointment?") {
        setTimeout(() => {
            const botText = "Of course! Redirecting you to our contact page so you can share your details with us...";
            setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
            setIsLoading(false);
            performDbOperations(trimmedText, botText);
            
            setTimeout(() => {
                router.push(`/${locale}/contact`);
                setIsOpen(false);
            }, 2000);
        }, 1000);
        return;
    }

    // Determine the bot response
    let botText = DEFAULT_RESPONSE;
    
    if (trimmedText === "Our services") {
        botText = SERVICES_LIST;
    } else if (trimmedText === "Information about our services") {
        botText = SERVICES_DETAILS;
    }

    setTimeout(() => {
      const botMessage: Message = { sender: 'bot', text: botText };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
      setShowOptions(true);

      // Handle DB operations in the background
      performDbOperations(trimmedText, botText);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(input);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:bg-primary/90 relative group",
            !isOpen && "animate-dance"
          )}
          onClick={toggleChat}
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <>
              <Bot className="h-7 w-7" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            </>
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-sm:max-w-[calc(100%-3rem)] max-w-sm">
          <Card className="flex h-[60vh] flex-col shadow-2xl overflow-hidden border-none rounded-none bg-white">
            <CardHeader className="flex-row items-center justify-between bg-primary text-primary-foreground p-4 space-y-0">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                </div>
                <CardTitle className="font-headline text-base tracking-wide uppercase">Kira AI Assistant</CardTitle>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-white/10" onClick={toggleChat}>
                  <X className="h-5 w-5" />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-grow overflow-hidden p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-end gap-2 ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Bot className="h-3.5 w-3.5 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] rounded-none px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {showOptions && !isLoading && (
                    <div className="flex flex-col gap-2 mt-4 ml-8">
                      {SUGGESTED_OPTIONS.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => processMessage(option)}
                          className="text-left px-4 py-2 text-xs font-medium border border-primary/20 bg-neutral-50 hover:bg-primary/5 text-primary transition-colors rounded-none"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                   {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="max-w-[80%] rounded-none bg-muted px-4 py-3 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.3s]"></span>
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.15s]"></span>
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/40"></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>

            <CardFooter className="p-4 bg-white border-t border-neutral-100">
              <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={dictionary?.chat?.inputPlaceholder || "Ask a question..."}
                  autoComplete="off"
                  disabled={isLoading}
                  className="rounded-none border-0 border-b border-neutral-200 focus-visible:ring-0 focus-visible:border-primary transition-all bg-transparent"
                />
                <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isLoading || !input.trim()} 
                    className="bg-primary hover:bg-primary/90 text-white rounded-none transition-transform active:scale-95"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
