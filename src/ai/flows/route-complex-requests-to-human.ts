'use server';

/**
 * @fileOverview This flow determines if a contact form request is too complex for automated configuration.
 *
 * It analyzes the request and routes it to a human representative if needed.
 *
 * @param {ContactFormInput} input - The input data from the contact form.
 * @returns {Promise<RouteDecisionOutput>} - A promise resolving to a RouteDecisionOutput object indicating whether to route the request to a human.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  company: z.string().describe('The company name.'),
  message: z.string().describe('The message containing the request details.'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const RouteDecisionOutputSchema = z.object({
  routeToHuman: z.boolean().describe('Whether the request should be routed to a human representative.'),
  reason: z.string().describe('The reason for the routing decision.'),
});

export type RouteDecisionOutput = z.infer<typeof RouteDecisionOutputSchema>;

export async function routeComplexRequestsToHuman(input: ContactFormInput): Promise<RouteDecisionOutput> {
  return routeComplexRequestsToHumanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeComplexRequestsPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: RouteDecisionOutputSchema},
  prompt: `You are an AI assistant that analyzes contact form requests to determine if they are too complex for automated configuration.

  A request is considered complex if it requires nuanced understanding, custom solutions beyond standard configurations, or involves ambiguity that an AI cannot resolve accurately.

  Analyze the following request:

  Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Message: {{{message}}}

  Based on the request, determine whether it should be routed to a human representative.

  Respond with a JSON object:
  {
    "routeToHuman": true/false, // true if the request is complex and requires human assistance, false otherwise
    "reason": "The reason for the routing decision." // A brief explanation of why the request is considered complex or not
  }`,
});

const routeComplexRequestsToHumanFlow = ai.defineFlow(
  {
    name: 'routeComplexRequestsToHumanFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: RouteDecisionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
