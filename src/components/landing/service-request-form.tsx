'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { handleServiceRequest, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CheckCircle, Info, Loader2, ServerCrash } from 'lucide-react';

const serviceRequestSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(3, { message: 'Please specify the service you need.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof serviceRequestSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending Request...
        </>
      ) : (
        'Request Service'
      )}
    </Button>
  );
}

export function ServiceRequestForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '' };
  const [state, formAction] = useFormState(handleServiceRequest, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(serviceRequestSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach((error) => {
        toast({
          variant: 'destructive',
          title: `Invalid input for ${error.path[0]}`,
          description: error.message,
        });
      });
    }
  }, [state, toast]);

  if (state.isSuccess) {
    return (
      <Alert variant={state.isHumanRoute ? "default" : "default"} className="max-w-4xl mx-auto bg-card">
         {state.isHumanRoute ? <Info className="h-4 w-4" /> : <CheckCircle className="h-4 w-4 text-accent" /> }
        <AlertTitle className='font-bold text-lg'>{state.isHumanRoute ? "Request Sent to Our Team" : "Request Received!"}</AlertTitle>
        <AlertDescription>
          <p className="mb-4">{state.message}</p>
        </AlertDescription>
      </Alert>
    );
  }

  if (state.message && !state.errors && !state.isSuccess) {
     return (
        <Alert variant="destructive" className="max-w-4xl mx-auto">
          <ServerCrash className="h-4 w-4" />
          <AlertTitle>An Error Occurred</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
     )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6 md:p-8">
        <form action={formAction} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" {...register('name')} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" {...register('email')} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="service">Service Needed</Label>
              <Input id="service" {...register('service')} aria-invalid={!!errors.service} placeholder="e.g., House Cleaning, Plumbing, Web Design" />
              {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Details</Label>
              <Textarea
                id="message"
                {...register('message')}
                aria-invalid={!!errors.message}
                placeholder="Please provide details about your needs, preferred dates, and location."
              />
               {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>
          </div>
          
          <div className="flex justify-end pt-6 border-t">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
