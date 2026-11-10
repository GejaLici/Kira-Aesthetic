'use server';

/**
 * @fileOverview This file defines the AI chatbot flow for Kira Aesthetic, providing immediate answers to FAQs and initial consultations.
 *
 * - aiChatbotAssistance - A function that handles the chatbot assistance process.
 * - AIChatbotAssistanceInput - The input type for the aiChatbotAssistance function.
 * - AIChatbotAssistanceOutput - The return type for the aiChatbotAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotAssistanceInputSchema = z.object({
  userQuery: z.string().describe("The user's query or question."),
});
export type AIChatbotAssistanceInput = z.infer<typeof AIChatbotAssistanceInputSchema>;

const AIChatbotAssistanceOutputSchema = z.object({
  chatbotResponse: z.string().describe("The chatbot's response to the user query."),
});
export type AIChatbotAssistanceOutput = z.infer<typeof AIChatbotAssistanceOutputSchema>;

export async function aiChatbotAssistance(input: AIChatbotAssistanceInput): Promise<AIChatbotAssistanceOutput> {
  return aiChatbotAssistanceFlow(input);
}

const assistantPrompt = ai.definePrompt({
  name: 'aiChatbotAssistancePrompt',
  input: {schema: AIChatbotAssistanceInputSchema},
  output: {schema: AIChatbotAssistanceOutputSchema},
  prompt: `You are Kira Aesthetic's AI chatbot. Your goal is to provide helpful and informative responses to user queries regarding Kira Aesthetic's services, treatments, and general information.
  
  Kira Aesthetic is a premier clinic specializing in a wide range of aesthetic, dental, and medical treatments.
  
  Services offered:
  - Face: Beard Transplant, Brow Lift, Cheekbone Reshaping, Chin Reshaping, Ear Reshaping, Eyebrow Transplant, Eyelid Surgery, Face Lift, Hair Transplant, Rhinoplasty.
  - Breast: Breast Augmentation, Breast Lift, Breast Reconstruction, Breast Reduction, Gynecomastia.
  - Body: Arm Lift, Brazilian Butt Lift, Labiaplasty, Liposculpture, Thigh Lift, Tummy Tuck, Liposuction.
  - Aesthetics: Sclerotherapy, Lipolysis, StrikeCell, Microdermabrasion, Microneedling, Dermapen 4, Multivitamin Treatment, PRP (Face/Hair), White Peeling, Plasma Arc Removals (Xanthelasma, Callus, Wart, Mole), Fillers (Cheek, Jawline, Nasolabial, Forehead, Lip).
  - Dentistry: Veneers (Composite, E-Max), Whitening, Crowns, Bridges, Dentures, Braces, Invisalign, Infected Teeth Treatment, Cleaning, Fillings, Implants, Extractions, Pedodontics.

  User Query: {{{userQuery}}}

  Please provide a concise and helpful response. If the query is unrelated to Kira Aesthetic, politely decline.`,  
});

const aiChatbotAssistanceFlow = ai.defineFlow(
  {
    name: 'aiChatbotAssistanceFlow',
    inputSchema: AIChatbotAssistanceInputSchema,
    outputSchema: AIChatbotAssistanceOutputSchema,
  },
  async input => {
    const {output} = await assistantPrompt(input);
    if (!output) {
      return { chatbotResponse: "I'm sorry, I couldn't process that request right now." };
    }
    return output;
  }
);
