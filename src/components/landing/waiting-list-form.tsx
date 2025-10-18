'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { handleWaitingListSignup, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CheckCircle, Loader2, ServerCrash, Mail } from 'lucide-react';

const waitingListSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  city: z.string().min(2, { message: 'Please enter your city.' }),
  interest: z.string().min(3, { message: 'Please tell us about your interest.' }),
});

type FormData = z.infer<typeof waitingListSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Joining...
        </>
      ) : (
        <>
          <Mail className="mr-2 h-4 w-4" />
          Join Waiting List
        </>
      )}
    </Button>
  );
}

export function WaitingListForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '' };
  const [state, formAction] = useActionState(handleWaitingListSignup, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(waitingListSchema),
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
      <Alert className="max-w-4xl mx-auto bg-card">
        <CheckCircle className="h-4 w-4 text-brand-purple" />
        <AlertTitle className='font-bold text-lg'>Welcome to the Waiting List!</AlertTitle>
        <AlertDescription>
          <p className="mb-4">{state.message}</p>
          <p className="text-sm text-muted-foreground">
            We'll send you updates about our launch progress and exclusive early access opportunities.
          </p>
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
    <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-border/50 hover:border-brand-purple/20 transition-colors">
      <CardContent className="p-6 md:p-10">
        <form action={formAction} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
              <Input 
                id="name" 
                {...register('name')} 
                aria-invalid={!!errors.name}
                className="h-12 text-base"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
              <Input 
                id="email" 
                type="email" 
                {...register('email')} 
                aria-invalid={!!errors.email}
                className="h-12 text-base"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-base font-semibold">City *</Label>
              <Input 
                id="city" 
                {...register('city')} 
                aria-invalid={!!errors.city}
                className="h-12 text-base"
                placeholder="New York"
              />
              {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-base font-semibold">What interests you most? *</Label>
              <Input 
                id="interest" 
                {...register('interest')} 
                aria-invalid={!!errors.interest}
                className="h-12 text-base"
                placeholder="e.g., Finding reliable home services"
              />
              {errors.interest && <p className="text-sm text-destructive">{errors.interest.message}</p>}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-border/50 gap-4">
            <p className="text-sm text-muted-foreground">
              By joining, you agree to receive updates about Leywok's launch
            </p>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
