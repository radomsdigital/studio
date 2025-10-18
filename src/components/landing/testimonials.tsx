'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Testimonial } from '@/lib/definitions';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    logoId: 'logo-quantum',
    companyName: 'QuantumLeap Inc.',
    quote: 'Leywok made it incredibly easy to find a reliable plumber on short notice. The booking process was simple and the service was top-notch!',
    authorName: 'Jane Doe',
    authorTitle: 'Homeowner',
  },
  {
    logoId: 'logo-stellar',
    companyName: 'Stellar Solutions',
    quote: 'As a service provider, Leywok has connected me with so many new clients. The platform is user-friendly and has been great for my business.',
    authorName: 'John Smith',
    authorTitle: 'Electrician, Stellar Electric',
  },
  {
    logoId: 'logo-nexus',
    companyName: 'Nexus Corp',
    quote: 'I needed a last-minute caterer for an event, and Leywok came to the rescue. The quality of service exceeded my expectations.',
    authorName: 'Emily White',
    authorTitle: 'Event Planner, Nexus Events',
  },
  {
    logoId: 'logo-zenith',
    companyName: 'Zenith Dynamics',
    quote: 'The variety of services available is amazing. From cleaning to landscaping, I can find everything I need in one place. Highly recommend!',
    authorName: 'Michael Brown',
    authorTitle: 'Property Manager',
  },
  {
    logoId: 'logo-aurora',
    companyName: 'Aurora Digital',
    quote: 'Posting a task was straightforward, and I received competitive bids within hours. The quality of work from the chosen provider was excellent.',
    authorName: 'Sarah Johnson',
    authorTitle: 'Small Business Owner',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear from satisfied customers and service providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => {
            const logo = PlaceHolderImages.find(img => img.id === testimonial.logoId);
            return (
              <Card 
                key={testimonial.companyName} 
                className="group relative flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-primary/30 overflow-hidden"
              >
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <Quote className="w-16 h-16" />
                </div>
                
                <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  {/* Logo and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    {logo && (
                      <Image
                        src={logo.imageUrl}
                        alt={`${testimonial.companyName} logo`}
                        width={100}
                        height={32}
                        className="object-contain filter grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all"
                        data-ai-hint={logo.imageHint}
                      />
                    )}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base md:text-lg text-foreground/90 mb-6 flex-grow leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">
                        {testimonial.authorName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.authorName}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.authorTitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
