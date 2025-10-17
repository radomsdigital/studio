import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Testimonials } from '@/components/landing/testimonials';
import { ServiceRequestForm } from '@/components/landing/service-request-form';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <section id="booking" className="py-20 md:py-32 bg-secondary/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Post Your Task
                </h2>
                <p className="text-lg text-muted-foreground">
                  Describe the task you need done, and get bids from qualified providers.
                </p>
              </div>
              <ServiceRequestForm />
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
