import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Award, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '1. Post Your Task',
    description: 'Describe the service you need in detail. The more specific you are, the better the bids you\'ll receive.',
  },
  {
    icon: Users,
    title: '2. Receive Bids',
    description: 'Qualified professionals from our network will bid on your task. Compare their profiles, ratings, and prices.',
  },
  {
    icon: Award,
    title: '3. Award the Job',
    description: 'Choose the best provider for your needs and budget. Award them the job and agree on the terms.',
  },
  {
    icon: ShieldCheck,
    title: '4. Get It Done',
    description: 'Your chosen provider completes the task. Pay securely through our platform once you\'re satisfied.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How LIEYWOK Works
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            A simple, four-step process to get your tasks done by professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-transparent shadow-none">
              <CardHeader className="items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
