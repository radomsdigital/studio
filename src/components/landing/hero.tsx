'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Briefcase, CheckCircle } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-service-provider');

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh] py-20 md:py-0">
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold !leading-tight tracking-tight mb-6">
              Post a Task, Get It Done.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10">
              Describe your job and let our network of skilled professionals bid to win your task. Effortless, fast, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="#booking">Post a Task <ArrowRight /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/provider-signup">Become a Provider <Briefcase /></Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Satisfaction Guaranteed</span>
                </div>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-square">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
