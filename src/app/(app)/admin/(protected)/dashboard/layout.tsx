'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Bell,
  Home,
  MessageSquareQuote,
  FileText,
  Menu,
  Mail,
  LogOut,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { FirebaseProvider, initializeFirebase } from '@/firebase';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';
import { useAuth } from '@/firebase/auth/use-auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const navItems = [
    { href: '/admin/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/admin/dashboard/contacts', icon: Mail, label: 'Contacts' },
    { href: '/admin/dashboard/chats', icon: MessageCircle, label: 'Chats' },
    { href: '/admin/dashboard/feedback', icon: MessageSquareQuote, label: 'Feedback' },
    { href: '/admin/dashboard/blog', icon: FileText, label: 'Blog' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { app, auth, firestore } = initializeFirebase();
    const { signOut } = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const handleSignOut = async () => {
      try {
        await signOut();
        toast({
          title: 'Signed Out',
          description: 'You have been successfully signed out.',
        });
        router.push('/admin');
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Sign Out Failed',
          description: 'An error occurred while signing out.',
        });
      }
    };

  return (
    <FirebaseProvider
    auth={auth}
    firestore={firestore}
    app={app}
    >
      <FirebaseClientProvider>
        <FirebaseErrorListener />
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-card md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/admin/dashboard" className="flex items-center gap-2">
                    <Logo />
                    <span className="text-xl font-bold text-primary">Kira Aesthetic</span>
                </Link>
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {navItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                pathname === item.href && "bg-muted text-primary"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                      <Link
                        href="/admin/dashboard"
                        className="flex items-center gap-2 text-lg font-semibold mb-4"
                      >
                        <Logo />
                        <span className="text-xl font-bold text-primary">Kira Aesthetic</span>
                      </Link>
                      {navItems.map(item => (
                          <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                  "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                                  pathname === item.href && "bg-muted text-foreground"
                              )}
                          >
                              <item.icon className="h-5 w-5" />
                              {item.label}
                          </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>

                <div className="w-full flex-1">
                    {/* A search bar could be added here */}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium">New Contact Submission</p>
                                <p className="text-xs text-muted-foreground">
                                    John Doe submitted the contact form.
                                </p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                             <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium">New Blog Post Published</p>
                                <p className="text-xs text-muted-foreground">
                                   "The Ultimate Guide to Rhinoplasty" is now live.
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                 <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Sign Out</span>
                </Button>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </FirebaseClientProvider>
    </FirebaseProvider>
  );
}
