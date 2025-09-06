import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: React.ReactNode;
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
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  return (
    <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInLeft}
            className="lg:col-span-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-testid="text-hero-title"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              data-testid="text-hero-subtitle"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div variants={fadeInUp}>
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90"
                  data-testid="button-hero-primary"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {primaryButtonText}
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 text-lg font-semibold hover:bg-muted/10"
                  data-testid="button-hero-secondary"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryButtonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInRight}
            className="mt-12 lg:mt-0 lg:col-span-6"
          >
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                src={imageUrl} 
                alt={imageAlt} 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-hero-main"
              />
              {badges.map((badge, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 + index * 0.2 }}
                  className={`absolute ${
                    index === 0 ? '-bottom-4 -left-4' : '-top-4 -right-4'
                  } ${badge.color} p-4 rounded-xl shadow-lg`}
                  data-testid={`badge-${badge.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="font-semibold">{badge.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
