import { Card, CardContent } from "@/components/ui/card";

interface PortfolioCardProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; color: string }>;
}

export function PortfolioCard({ 
  imageUrl, 
  imageAlt, 
  category, 
  categoryColor, 
  title, 
  description, 
  metrics 
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow border border-border">
      <img 
        src={imageUrl} 
        alt={imageAlt} 
        className="w-full h-48 object-cover"
        data-testid={`img-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
          <span className={`text-sm font-medium ${categoryColor}`} data-testid={`text-category-${category.toLowerCase()}`}>
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-3" data-testid={`text-portfolio-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4" data-testid={`text-portfolio-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <div className="space-y-2 text-sm">
          {metrics.map((metric, index) => (
            <div key={index} className="flex justify-between" data-testid={`metric-${index}`}>
              <span className="text-muted-foreground">{metric.label}:</span>
              <span className={`font-semibold ${metric.color}`}>{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
