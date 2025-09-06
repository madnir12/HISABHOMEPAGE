import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
}

export function ServiceCard({ icon, title, description, features, iconBgColor }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow border border-border">
      <CardContent className="p-8">
        <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center" data-testid={`text-service-feature-${index}`}>
              <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
