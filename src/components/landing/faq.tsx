'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does Leywok work?',
    answer: "It's simple! Post your task with details about what you need done, receive bids from qualified professionals, choose the best provider for your needs, and pay securely once the work is completed to your satisfaction.",
  },
  {
    question: 'Is it free to post a task?',
    answer: 'Yes! Posting a task on Leywok is completely free. You only pay when you award a job to a provider and the work is completed. We charge a small service fee that is clearly displayed before you make any payment.',
  },
  {
    question: 'How are providers verified?',
    answer: 'All providers on Leywok go through a verification process that includes identity verification, background checks, and skill assessments. We also maintain a robust rating and review system so you can see feedback from other customers.',
  },
  {
    question: 'What if I\'m not satisfied with the work?',
    answer: 'Your satisfaction is our priority. If you\'re not happy with the completed work, contact our support team within 48 hours. We have a dispute resolution process and a satisfaction guarantee to ensure you get the quality service you deserve.',
  },
  {
    question: 'How long does it take to receive bids?',
    answer: 'Most tasks receive their first bid within a few hours of posting. The exact timing depends on the type of service, your location, and the complexity of the task. Urgent tasks can often receive bids within minutes.',
  },
  {
    question: 'Can I communicate with providers before awarding a job?',
    answer: 'Absolutely! Once providers submit bids, you can message them directly to discuss details, ask questions, and clarify requirements before making your decision.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and digital payment methods. All payments are processed securely through our platform, and funds are only released to the provider once you confirm the work is completed satisfactorily.',
  },
  {
    question: 'How do I become a service provider?',
    answer: 'Click on "Become a Provider" and fill out our application form. We\'ll review your information, verify your credentials, and once approved, you can start bidding on tasks that match your skills.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Leywok
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

