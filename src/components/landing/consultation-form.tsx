'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { handleConsultationRequest, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CheckCircle, Info, Loader2, ServerCrash } from 'lucide-react';

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

type FormData = z.infer<typeof consultationSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Get My Configuration'
      )}
    </Button>
  );
}

export function ConsultationForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '' };
  const [state, formAction] = useFormState(handleConsultationRequest, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(consultationSchema),
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
        <AlertTitle className='font-bold text-lg'>{state.isHumanRoute ? "Request Sent to Our Team" : "Configuration Generated"}</AlertTitle>
        <AlertDescription>
          <p className="mb-4">{state.message}</p>
          {state.configuration && (
            <Card className="mt-4 bg-secondary">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Generated Configuration Details:</h3>
                <pre className="whitespace-pre-wrap font-mono text-sm bg-background p-4 rounded-md">
                  {state.configuration}
                </pre>
              </CardContent>
            </Card>
          )}
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
              <Label htmlFor="company">Company</Label>
              <Input id="company" {...register('company')} aria-invalid={!!errors.company} />
              {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                {...register('message')}
                aria-invalid={!!errors.message}
                placeholder="Briefly describe your project or question."
              />
               {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t">
             <div className="text-center">
                <h3 className="text-lg font-semibold">Tell Us About Your Needs</h3>
                <p className="text-muted-foreground text-sm">Provide details below for an AI-generated configuration proposal.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessNeeds">Business Needs</Label>
              <Textarea
                id="businessNeeds"
                {...register('businessNeeds')}
                aria-invalid={!!errors.businessNeeds}
                placeholder="Describe your goals, e.g., 'launch a high-traffic e-commerce site', 'migrate legacy apps'."
              />
              {errors.businessNeeds && <p className="text-sm text-destructive">{errors.businessNeeds.message}</p>}
            </div>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="workloadCharacteristics">Workload Characteristics (Optional)</Label>
                    <Input id="workloadCharacteristics" {...register('workloadCharacteristics')} placeholder="e.g., CPU-intensive, spiky traffic" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="complianceRequirements">Compliance Requirements (Optional)</Label>
                    <Input id="complianceRequirements" {...register('complianceRequirements')} placeholder="e.g., GDPR, HIPAA, PCI-DSS" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budgetConstraints">Budget Constraints (Optional)</Label>
                    <Input id="budgetConstraints" {...register('budgetConstraints')} placeholder="e.g., Approx. $5,000/month" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="existingInfrastructure">Existing Infrastructure (Optional)</Label>
                    <Input id="existingInfrastructure" {...register('existingInfrastructure')} placeholder="e.g., On-premise servers, AWS" />
                </div>
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
