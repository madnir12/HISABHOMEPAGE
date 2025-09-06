import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageUrl: string;
  imageAlt: string;
  badges?: Array<{ icon: string; text: string; color: string }>;
}

export function HeroSection({ 
  title, 
  subtitle, 
  primaryButtonText, 
  secondaryButtonText, 
  imageUrl, 
  imageAlt, 
  badges = [] 
}: HeroSectionProps) {
  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-testid="text-hero-title"
            >
              {title}
            </h1>
            <p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90"
                data-testid="button-hero-primary"
              >
                <Rocket className="w-5 h-5 mr-2" />
                {primaryButtonText}
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold hover:bg-muted/10"
                data-testid="button-hero-secondary"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-hero-main"
              />
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className={`absolute ${
                    index === 0 ? '-bottom-4 -left-4' : '-top-4 -right-4'
                  } ${badge.color} p-4 rounded-xl shadow-lg`}
                  data-testid={`badge-${badge.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="font-semibold">{badge.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
