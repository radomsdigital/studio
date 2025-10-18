'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Briefcase, CheckCircle, Sparkles } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-service-provider');

  return (
    <section className="relative bg-trust-gradient-vertical overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-trust-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-trust-indigo/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[85vh] py-20 md:py-0">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Service Matching</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold !leading-[1.1] tracking-tight mb-6 text-white">
              Post a Task, Get It Done.
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              Describe your job and let our network of <span className="font-semibold text-white">skilled professionals</span> bid to win your task. Effortless, fast, and reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
              <Button size="lg" asChild className="group bg-white text-trust-navy hover:bg-white/90 shadow-lg hover:shadow-xl transition-all font-semibold">
                <Link href="#booking">
                  Post a Task 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-trust-navy shadow-lg hover:shadow-xl transition-all font-semibold">
                <Link href="/provider-signup">
                  Become a Provider 
                  <Briefcase className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-white">Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-white">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-white">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] group">
              {/* Gradient overlay behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              
              {heroImage && (
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10 group-hover:border-primary/20 transition-colors">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                    data-ai-hint={heroImage.imageHint}
                  />
                </div>
              )}
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">15k+</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Tasks Completed</p>
                    <p className="text-sm font-semibold text-foreground">This Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
