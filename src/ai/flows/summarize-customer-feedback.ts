'use server';

/**
 * @fileOverview Summarizes customer feedback using GenAI to identify key areas for improvement and understand overall customer satisfaction.
 *
 * - summarizeCustomerFeedback - A function that handles the summarization of customer feedback.
 * - SummarizeCustomerFeedbackInput - The input type for the summarizeCustomerFeedback function.
 * - SummarizeCustomerFeedbackOutput - The return type for the summarizeCustomerFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerFeedbackInputSchema = z.object({
  feedback: z
    .string()
    .describe('The customer feedback to summarize.'),
});
export type SummarizeCustomerFeedbackInput = z.infer<typeof SummarizeCustomerFeedbackInputSchema>;

const SummarizeCustomerFeedbackOutputSchema = z.object({
  summary: z.string().describe('The summary of the customer feedback.'),
});
export type SummarizeCustomerFeedbackOutput = z.infer<typeof SummarizeCustomerFeedbackOutputSchema>;

export async function summarizeCustomerFeedback(
  input: SummarizeCustomerFeedbackInput
): Promise<SummarizeCustomerFeedbackOutput> {
  return summarizeCustomerFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerFeedbackPrompt',
  input: {schema: SummarizeCustomerFeedbackInputSchema},
  output: {schema: SummarizeCustomerFeedbackOutputSchema},
  prompt: `You are an AI expert in summarizing customer feedback for a clinic. Please summarize the following customer feedback, identifying key areas for improvement and overall customer satisfaction. Be concise and provide actionable insights.\n\nFeedback: {{{feedback}}}`,
});

const summarizeCustomerFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerFeedbackFlow',
    inputSchema: SummarizeCustomerFeedbackInputSchema,
    outputSchema: SummarizeCustomerFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
