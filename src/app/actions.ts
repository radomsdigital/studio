'use server';

import { z } from 'zod';
import {
  routeComplexRequestsToHuman,
  type ContactFormInput,
} from '@/ai/flows/route-complex-requests-to-human';
import {
  generateCustomConfiguration,
  type GenerateCustomConfigurationInput,
} from '@/ai/flows/generate-custom-configuration';

const consultationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  businessNeeds: z.string().min(10, { message: 'Please describe your business needs.' }),
  workloadCharacteristics: z.string().optional(),
  complianceRequirements: z.string().optional(),
  budgetConstraints: z.string().optional(),
  existingInfrastructure: z.string().optional(),
});

export type FormState = {
  message: string;
  configuration?: string;
  isHumanRoute?: boolean;
  isSuccess?: boolean;
  errors?: z.ZodIssue[];
};

export async function handleConsultationRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = consultationSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
    businessNeeds: formData.get('businessNeeds'),
    workloadCharacteristics: formData.get('workloadCharacteristics'),
    complianceRequirements: formData.get('complianceRequirements'),
    budgetConstraints: formData.get('budgetConstraints'),
    existingInfrastructure: formData.get('existingInfrastructure'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.issues,
    };
  }
  
  const { data } = validatedFields;

  try {
    const routeInput: ContactFormInput = {
      name: data.name,
      email: data.email,
      company: data.company,
      message: `${data.message}\n\nBusiness Needs: ${data.businessNeeds}`,
    };

    const routeResult = await routeComplexRequestsToHuman(routeInput);

    if (routeResult.routeToHuman) {
      return {
        isSuccess: true,
        isHumanRoute: true,
        message: 'Thank you for your request. Your inquiry is complex and has been routed to a specialist who will contact you shortly.',
      };
    }

    const configInput: GenerateCustomConfigurationInput = {
      businessNeeds: data.businessNeeds,
      workloadCharacteristics: data.workloadCharacteristics || 'Not specified',
      complianceRequirements: data.complianceRequirements || 'Not specified',
      budgetConstraints: data.budgetConstraints || 'Not specified',
      existingInfrastructure: data.existingInfrastructure || 'Not specified',
    };

    const configResult = await generateCustomConfiguration(configInput);
    
    let successMessage = "Success! Here is your suggested cloud configuration.";
    if (configResult.requiresHumanAssistance) {
      successMessage += " A specialist will be in touch to discuss the details, as your request has some complex requirements."
    }

    return {
      isSuccess: true,
      message: successMessage,
      configuration: configResult.configurationDetails,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later or contact support.',
    };
  }
}
