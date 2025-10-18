'use client';

import { services } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  const serviceIcons: { [key: string]: string } = {
    'Home Services': 'service-home',
    'Skilled Trades': 'service-trades',
    'Creative & Design': 'service-design',
    'Professional Services': 'service-professional',
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-trust-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-trust-navy mb-4">
            Explore a World of Services
          </h2>
          <p className="text-lg md:text-xl text-trust-slate">
            From household chores to professional consultations, find the right expert for any task.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => {
            const image = PlaceHolderImages.find(img => img.id === serviceIcons[service.name]);
            return (
              <Card 
                key={service.name} 
                className="group relative flex flex-col overflow-hidden text-center items-center border-2 hover:border-trust-blue/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-trust-card"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/0 to-trust-emerald/0 group-hover:from-trust-blue/5 group-hover:to-trust-emerald/5 transition-all duration-500" />
                
                <CardHeader className="p-6 relative z-10">
                  {image && (
                     <div className="w-24 h-24 rounded-full bg-gradient-to-br from-trust-blue/10 to-trust-emerald/10 flex items-center justify-center mb-4 mx-auto p-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                        <Image
                            src={image.imageUrl}
                            alt={service.name}
                            width={64}
                            height={64}
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                        />
                     </div>
                  )}
                  <CardTitle className="text-xl font-bold group-hover:text-trust-blue transition-colors text-trust-navy">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col p-6 pt-0 relative z-10">
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-trust-slate">
                        <CheckCircle className="w-4 h-4 text-trust-emerald flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="self-center bg-trust-emerald/10 text-trust-emerald hover:bg-trust-emerald/20 font-semibold"
                  >
                    Starting from ₹99
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="#booking">
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
