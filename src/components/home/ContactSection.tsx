'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
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
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { saveContactSubmission } from '@/lib/db';
import { cn } from '@/lib/utils';

export default function ContactSection({ dictionary, source }: { dictionary: any, source?: string }) {
  const { toast } = useToast();
  const firestore = useFirestore();

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

    const submissionData = { ...values, source: source || 'Unknown' };

    saveContactSubmission(firestore, submissionData);
    toast({
      title: dictionary.contactForm.success,
    });
    form.reset();
  }

  return (
    <section className="bg-[#FAF9F6] py-24 sm:py-32 relative overflow-hidden">
      {/* Sophisticated Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#C2A58F] mb-4">
                {dictionary.contactForm.title}
            </h2>
            <p className="mx-auto max-w-2xl text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight">
                {dictionary.contactForm.subtitle}
            </p>
            <div className="mx-auto mt-8 h-px w-24 bg-primary/20" />
        </div>

        <Card className="mx-auto w-full max-w-2xl rounded-none border-none bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden animate-fade-in-up [animation-delay:200ms]">
          <CardContent className="p-8 sm:p-16">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                            {dictionary.contactForm.name}
                        </FormLabel>
                        <FormControl>
                            <Input 
                                placeholder="Your Name" 
                                {...field} 
                                className="rounded-none border-0 border-b border-neutral-200 focus:border-primary px-0 bg-transparent transition-all duration-300 focus-visible:ring-0 placeholder:text-neutral-300 placeholder:font-light" 
                            />
                        </FormControl>
                        <FormMessage className="text-[10px] font-medium" />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                            {dictionary.contactForm.email}
                        </FormLabel>
                        <FormControl>
                            <Input 
                                placeholder="email@example.com" 
                                {...field} 
                                className="rounded-none border-0 border-b border-neutral-200 focus:border-primary px-0 bg-transparent transition-all duration-300 focus-visible:ring-0 placeholder:text-neutral-300 placeholder:font-light" 
                            />
                        </FormControl>
                        <FormMessage className="text-[10px] font-medium" />
                        </FormItem>
                    )}
                    />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input 
                            placeholder="+1 (555) 000-0000" 
                            {...field} 
                            className="rounded-none border-0 border-b border-neutral-200 focus:border-primary px-0 bg-transparent transition-all duration-300 focus-visible:ring-0 placeholder:text-neutral-300 placeholder:font-light" 
                        />
                      </FormControl>
                      <FormMessage className="text-[10px] font-medium" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">
                        {dictionary.contactForm.message}
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                            placeholder="Tell Us About Your Vision ..." 
                            {...field} 
                            className="rounded-none border-0 border-b border-neutral-200 focus:border-primary px-0 bg-transparent min-h-[120px] resize-none transition-all duration-300 focus-visible:ring-0 placeholder:text-neutral-300 placeholder:font-light" 
                        />
                      </FormControl>
                      <FormMessage className="text-[10px] font-medium" />
                    </FormItem>
                  )}
                />

                <div className="pt-6">
                    <Button 
                        type="submit" 
                        className={cn(
                            "w-full rounded-none border border-primary bg-white py-8 text-[12px] font-bold uppercase tracking-[0.25em] text-primary",
                            "transition-all duration-500 hover:bg-primary/5 hover:scale-[1.01] active:scale-[0.98] shadow-lg hover:shadow-xl",
                            "disabled:opacity-50 disabled:cursor-not-allowed"
                        )} 
                        disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? 'Sending...' : dictionary.contactForm.sendMessage}
                    </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
