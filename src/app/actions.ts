'use server';

import { z } from 'zod';
import {
  routeComplexRequestsToHuman,
  type ContactFormInput,
} from '@/ai/flows/route-complex-requests-to-human';

const serviceRequestSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(3, { message: 'Please specify the service you need.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  isSuccess?: boolean;
  isHumanRoute?: boolean;
  errors?: z.ZodIssue[];
};

export async function handleServiceRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = serviceRequestSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
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
      company: '', // Not applicable for service request
      message: `Service requested: ${data.service}\n\nMessage: ${data.message}`,
    };

    const routeResult = await routeComplexRequestsToHuman(routeInput);

    if (routeResult.routeToHuman) {
      return {
        isSuccess: true,
        isHumanRoute: true,
        message: 'Thank you for your request. It has been routed to a specialist who will contact you shortly to confirm the details.',
      };
    }

    return {
      isSuccess: true,
      message: 'Thank you for your service request! We will get back to you shortly to confirm your booking.',
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later or contact support.',
    };
  }
}
