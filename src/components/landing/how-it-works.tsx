'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: '1. Post Your Task',
    description: 'Describe the service you need in detail. The more specific you are, the better the bids you\'ll receive.',
    color: 'from-trust-blue to-trust-indigo',
  },
  {
    icon: Users,
    title: '2. Receive Bids',
    description: 'Qualified professionals from our network will bid on your task. Compare their profiles, ratings, and prices.',
    color: 'from-trust-indigo to-trust-slate',
  },
  {
    icon: Award,
    title: '3. Award the Job',
    description: 'Choose the best provider for your needs and budget. Award them the job and agree on the terms.',
    color: 'from-trust-slate to-trust-emerald',
  },
  {
    icon: ShieldCheck,
    title: '4. Get It Done',
    description: 'Your chosen provider completes the task. Pay securely through our platform once you\'re satisfied.',
    color: 'from-trust-emerald to-trust-navy',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-trust-navy/5 to-trust-blue/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-trust-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-trust-emerald/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trust-navy mb-4">
            How Leywok Works
          </h2>
          <p className="text-lg md:text-xl text-trust-slate">
            A simple, four-step process to get your tasks done by professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-trust-blue/30 to-transparent z-0">
                  <ArrowRight className="absolute right-0 -top-2 w-5 h-5 text-trust-blue/30" />
                </div>
              )}

              <Card className="group relative border-2 hover:border-trust-blue/50 bg-trust-card backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="items-center text-center relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-trust-blue transition-colors text-trust-navy">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-trust-slate leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
