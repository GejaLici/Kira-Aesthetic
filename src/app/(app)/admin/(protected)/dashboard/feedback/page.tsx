'use client';

import { useState } from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { summarizeCustomerFeedback } from '@/ai/flows/summarize-customer-feedback';

const formSchema = z.object({
  feedback: z.string().min(20, { message: 'Feedback must be at least 20 characters.' }),
});

export default function FeedbackSummarizerPage() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeCustomerFeedback({ feedback: values.feedback });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error summarizing feedback:', error);
      setSummary('Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
        <div className="mb-6">
            <h1 className="text-2xl font-bold">Customer Feedback Summarizer</h1>
            <p className="text-muted-foreground">Paste customer feedback below to generate a concise summary with actionable insights.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Feedback Input</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="feedback"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="sr-only">Customer Feedback</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter customer feedback here..." {...field} rows={15} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isLoading}>
                        {isLoading ? 'Summarizing...' : 'Summarize'}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>AI-Generated Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading && (
                        <div className="space-y-2">
                            <div className="h-4 w-full animate-pulse rounded-md bg-muted"></div>
                            <div className="h-4 w-full animate-pulse rounded-md bg-muted"></div>
                            <div className="h-4 w-4/5 animate-pulse rounded-md bg-muted"></div>
                        </div>
                    )}
                    {summary && <div className="prose dark:prose-invert text-sm">{summary}</div>}
                    {!isLoading && !summary && <p className="text-sm text-muted-foreground">The summary will appear here once generated.</p>}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
