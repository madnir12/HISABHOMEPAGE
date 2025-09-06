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
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 animate-slide-in-left">
            <h1 
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              data-testid="text-hero-title"
            >
              {title}
            </h1>
            <p 
              className="text-xl text-white/90 mb-8 max-w-2xl"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                data-testid="button-hero-primary"
              >
                <Rocket className="w-5 h-5 mr-2 text-purple-600" />
                {primaryButtonText}
              </Button>
              <Button 
                variant="outline" 
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/20 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                data-testid="button-hero-secondary"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 animate-slide-in-right">
            <div className="relative">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
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
