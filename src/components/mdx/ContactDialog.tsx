'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { saveContactSubmission } from '@/lib/db';
import type { Dictionary } from '@/lib/dictionary';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ContactDialogProps {
  dictionary: Dictionary;
  trigger: React.ReactNode;
}

export function ContactDialog({ dictionary, trigger }: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const firestore = useFirestore();
  const pathname = usePathname();

  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(1, { message: "Phone number is required." }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: "Submission failed",
        description: "Firestore is not available. Please try again later.",
      });
      return;
    }

    const submissionData = { ...values, source: `Blog: ${pathname}` };

    saveContactSubmission(firestore, submissionData);
    toast({
      title: dictionary.contactForm.success,
    });
    form.reset();
    setIsOpen(false);
  }

  const inputClasses = "rounded-none border-0 border-b border-neutral-200 focus:border-primary px-0 bg-transparent transition-all duration-300 focus-visible:ring-0 placeholder:text-neutral-300 placeholder:font-light";
  const labelClasses = "text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-none border-none p-0 overflow-hidden shadow-2xl">
        <div className="p-8 sm:p-12 bg-white">
            <DialogHeader className="mb-8">
            <DialogTitle className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C2A58F] text-center">
                {dictionary.contactForm.title}
            </DialogTitle>
            <DialogHeader className="text-2xl font-light text-neutral-900 tracking-tight text-center mt-2">
                {dictionary.contactForm.subtitle}
            </DialogHeader>
            </DialogHeader>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                        <FormLabel className={labelClasses}>{dictionary.contactForm.name}</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} className={inputClasses} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                        <FormLabel className={labelClasses}>{dictionary.contactForm.email}</FormLabel>
                        <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} className={inputClasses} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                    <FormLabel className={labelClasses}>Phone Number</FormLabel>
                    <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} className={inputClasses} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                    <FormLabel className={labelClasses}>{dictionary.contactForm.message}</FormLabel>
                    <FormControl>
                        <Textarea 
                            placeholder="Tell Us About Your Vision ..." 
                            {...field} 
                            className={cn(inputClasses, "min-h-[100px] resize-none")}
                        />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                    </FormItem>
                )}
                />
                <DialogFooter className="pt-4">
                <Button 
                    type="submit" 
                    className="w-full rounded-none border border-primary bg-white py-7 text-[12px] font-bold uppercase tracking-[0.25em] text-primary transition-all duration-500 hover:bg-primary/5 shadow-lg"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting ? 'Sending...' : dictionary.contactForm.sendMessage}
                </Button>
                </DialogFooter>
            </form>
            </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
