import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProviderSignupForm } from '@/components/provider/provider-signup-form';
import { AnimatedSection } from '@/components/shared/animated-section';
import { CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Become a Service Provider - Join Leywok Today",
  description: "Join Leywok as a service provider and grow your business. Access thousands of customers, set your own rates, and build your reputation. Sign up today!",
  keywords: ["become a provider", "service provider signup", "freelance opportunities", "grow business", "flexible earnings", "professional services"],
  openGraph: {
    title: "Become a Leywok Service Provider",
    description: "Grow your business with Leywok. Access thousands of customers and earn on your own terms.",
    images: ['/home_banner_c.png'],
  },
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Access thousands of customers looking for your services',
  },
  {
    icon: DollarSign,
    title: 'Flexible Earnings',
    description: 'Set your own rates and work on your own schedule',
  },
  {
    icon: Users,
    title: 'Build Your Reputation',
    description: 'Get reviews and ratings to showcase your expertise',
  },
  {
    icon: CheckCircle,
    title: 'Secure Payments',
    description: 'Get paid quickly and securely through our platform',
  },
];

export default function ProviderSignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                Become a Provider on <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leywok</span>
              </h1>
              <p className="text-lg md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Join our network of trusted professionals and grow your business with access to thousands of potential customers.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 mx-auto">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Start Your Journey
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
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
