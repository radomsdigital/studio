'use server';

import { z } from 'zod';
import {
  routeComplexRequestsToHuman,
  type ContactFormInput,
} from '@/ai/flows/route-complex-requests-to-human';

const taskPostSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  taskTitle: z.string().min(3, { message: 'Please specify the title of your task.' }),
  taskDetails: z.string().min(10, { message: 'Details must be at least 10 characters.' }),
});

const providerSignupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(3, { message: 'Please select a service.' }),
  experience: z.string().refine(val => !isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0, {
    message: 'Please enter a valid number of years.',
  }),
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
  const validatedFields = taskPostSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    taskTitle: formData.get('taskTitle'),
    taskDetails: formData.get('taskDetails'),
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
      company: '', // Not applicable for this form
      message: `Task: ${data.taskTitle}\n\nDetails: ${data.taskDetails}`,
    };

    const routeResult = await routeComplexRequestsToHuman(routeInput);

    if (routeResult.routeToHuman) {
      return {
        isSuccess: true,
        isHumanRoute: true,
        message: 'This task seems complex. It has been routed to a specialist who will contact you shortly to clarify the details before it goes live.',
      };
    }

    return {
      isSuccess: true,
      message: 'Your task has been posted! You will receive notifications as providers start bidding on your project.',
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later or contact support.',
    };
  }
}

export async function handleProviderSignup(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = providerSignupSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    experience: formData.get('experience'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.issues,
    };
  }

  // Here you would typically save the provider's data to your database.
  // For now, we'll just simulate a successful submission.
  console.log('Provider Signup Data:', validatedFields.data);

  return {
    isSuccess: true,
    message: "Thank you for signing up! We've received your application and will be in touch shortly after we review your information.",
  };
}
