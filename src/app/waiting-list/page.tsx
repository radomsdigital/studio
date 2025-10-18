import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WaitingListForm } from '@/components/landing/waiting-list-form';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Users, Clock, Bell, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join Our Waiting List - Be First to Access Leywok",
  description: "Join the Leywok waiting list for early access, exclusive perks, and priority support. Be among the first to experience our professional service marketplace.",
  keywords: ["waiting list", "early access", "exclusive perks", "leywok signup", "beta access"],
  openGraph: {
    title: "Join Leywok Waiting List - Get Early Access",
    description: "Be the first to know when Leywok launches. Get early access, exclusive perks, and priority support.",
    images: ['/home_banner_b.png'],
  },
};

const benefits = [
  {
    icon: Users,
    title: 'Early Access',
    description: 'Be among the first to experience our platform when we launch',
  },
  {
    icon: Clock,
    title: 'Priority Support',
    description: 'Get dedicated support and faster response times',
  },
  {
    icon: Bell,
    title: 'Exclusive Updates',
    description: 'Receive insider updates and early feature announcements',
  },
  {
    icon: CheckCircle,
    title: 'Special Perks',
    description: 'Enjoy exclusive discounts and special offers for early members',
  },
];

export default function WaitingListPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-trust-gradient-vertical overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-trust-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-trust-emerald/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Waiting List</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed">
                Be the first to know when Leywok launches. Get early access, exclusive perks, and priority support.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 mx-auto">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/80">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-trust-navy/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                  Get Notified When We Launch
                </h2>
                <p className="text-lg text-trust-slate">
                  Join thousands of others who are already on our waiting list.
                </p>
              </div>
              <WaitingListForm />
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="py-16 bg-gradient-to-b from-background to-trust-navy/5">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-8">
                  Join the Community
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-trust-blue mb-2">2,500+</div>
                    <div className="text-trust-slate">People on waiting list</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-trust-emerald mb-2">50+</div>
                    <div className="text-trust-slate">Cities covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-trust-indigo mb-2">Q2 2024</div>
                    <div className="text-trust-slate">Expected launch</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
