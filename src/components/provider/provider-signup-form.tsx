'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { handleProviderSignup, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CheckCircle, Loader2, ServerCrash } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { services } from '@/lib/definitions';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';


const providerSignupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  service: z.string().min(3, { message: 'Please select a service.' }),
  experience: z.string().refine(val => !isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0, {
    message: 'Please enter a valid number of years.',
  }),
});

type FormData = z.infer<typeof providerSignupSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        'Submit Application'
      )}
    </Button>
  );
}

export function ProviderSignupForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '' };
  const [state, formAction] = useActionState(handleProviderSignup, initialState);

  const form = useForm<FormData>({
    resolver: zodResolver(providerSignupSchema),
    mode: 'onBlur',
  });

  const { formState: { errors } } = form;

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
        <CheckCircle className="h-4 w-4 text-accent" />
        <AlertTitle className='font-bold text-lg'>Application Submitted!</AlertTitle>
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
    <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-border/50 hover:border-primary/20 transition-colors">
      <CardContent className="p-6 md:p-10">
        <Form {...form}>
          <form action={formAction} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                <Input 
                  id="name" 
                  {...form.register('name')} 
                  aria-invalid={!!errors.name}
                  className="h-12 text-base"
                  placeholder="John Smith"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...form.register('email')} 
                  aria-invalid={!!errors.email}
                  className="h-12 text-base"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                  <Label className="text-base font-semibold">Primary Service *</Label>
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Select a service category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map(service => (
                              <SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-base font-semibold">Years of Experience *</Label>
                <Input 
                  id="experience" 
                  type="number" 
                  {...form.register('experience')} 
                  aria-invalid={!!errors.experience}
                  className="h-12 text-base"
                  placeholder="5"
                  min="0"
                />
                {errors.experience && <p className="text-sm text-destructive">{errors.experience.message}</p>}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-border/50 gap-4">
              <p className="text-sm text-muted-foreground">
                By submitting, you agree to our Terms of Service
              </p>
              <SubmitButton />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
