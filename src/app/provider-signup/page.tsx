import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProviderSignupForm } from '@/components/provider/provider-signup-form';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function ProviderSignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Become a Provider on Leywok
                </h1>
                <p className="text-lg text-muted-foreground">
                  Join our network of trusted professionals and grow your business.
                </p>
              </div>
              <ProviderSignupForm />
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
