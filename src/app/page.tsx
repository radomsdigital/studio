import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Products } from '@/components/landing/products';
import { Testimonials } from '@/components/landing/testimonials';
import { ConsultationForm } from '@/components/landing/consultation-form';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <AnimatedSection>
          <Products />
        </AnimatedSection>
        
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <section id="consultation" className="py-20 md:py-32 bg-secondary/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Request a Consultation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below to get a custom cloud configuration tailored to your needs, powered by our GenAI assistant.
                </p>
              </div>
              <ConsultationForm />
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
