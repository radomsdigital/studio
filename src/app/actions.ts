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
