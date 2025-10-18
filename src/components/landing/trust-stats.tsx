import { Users, CheckCircle, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Providers',
    description: 'Trusted professionals ready to help',
  },
  {
    icon: CheckCircle,
    value: '200,000+',
    label: 'Tasks Completed',
    description: 'Successfully delivered projects',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating',
    description: 'Based on 75,000+ reviews',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'Happy customers every day',
  },
];

export function TrustStats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

