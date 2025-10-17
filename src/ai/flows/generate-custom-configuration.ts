'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating custom cloud configurations based on user input.
 *
 * It includes:
 * - generateCustomConfiguration: The main function to trigger the flow.
 * - GenerateCustomConfigurationInput: The input type for the configuration generation.
 * - GenerateCustomConfigurationOutput: The output type containing the generated configuration.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomConfigurationInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe(
      'Detailed description of the enterprise client’s specific business requirements and goals for cloud adoption.'
    ),
  workloadCharacteristics: z
    .string()
    .describe(
      'Information on the types of workloads, expected traffic, and performance requirements.'
    ),
  complianceRequirements: z
    .string()
    .describe(
      'Any industry-specific or regulatory compliance requirements that need to be met.'
    ),
  budgetConstraints: z
    .string()
    .describe('The budgetary limitations for the cloud configuration.'),
  existingInfrastructure: z
    .string()
    .describe(
      'Details about the client’s current IT infrastructure and any plans for integration.'
    ),
});
export type GenerateCustomConfigurationInput = z.infer<
  typeof GenerateCustomConfigurationInputSchema
>;

const GenerateCustomConfigurationOutputSchema = z.object({
  configurationDetails: z
    .string()
    .describe(
      'A comprehensive cloud configuration, including cost estimates and resource allocation scenarios.'
    ),
  requiresHumanAssistance: z
    .boolean()
    .describe(
      'A flag indicating whether the request requires human assistance due to complexity or special circumstances.'
    ),
});
export type GenerateCustomConfigurationOutput = z.infer<
  typeof GenerateCustomConfigurationOutputSchema
>;

export async function generateCustomConfiguration(
  input: GenerateCustomConfigurationInput
): Promise<GenerateCustomConfigurationOutput> {
  return generateCustomConfigurationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCustomConfigurationPrompt',
  input: {schema: GenerateCustomConfigurationInputSchema},
  output: {schema: GenerateCustomConfigurationOutputSchema},
  prompt: `You are an AI assistant specialized in designing custom cloud configurations for enterprise clients. Based on the information provided, create a detailed cloud configuration, including cost estimates and resource allocation scenarios.

  If the business needs, workload characteristics, compliance requirements, budget constraints, or existing infrastructure indicate a highly complex or unusual scenario that would be difficult to automate, set the requiresHumanAssistance flag to true. Otherwise, set it to false. Provide a detailed configuration regardless.

  Business Needs: {{{businessNeeds}}}
  Workload Characteristics: {{{workloadCharacteristics}}}
  Compliance Requirements: {{{complianceRequirements}}}
  Budget Constraints: {{{budgetConstraints}}}
  Existing Infrastructure: {{{existingInfrastructure}}}
  `,
});

const generateCustomConfigurationFlow = ai.defineFlow(
  {
    name: 'generateCustomConfigurationFlow',
    inputSchema: GenerateCustomConfigurationInputSchema,
    outputSchema: GenerateCustomConfigurationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
