import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatarUrl: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, position, avatarUrl, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="border border-border">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="flex text-accent">
            {Array.from({ length: rating }, (_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-lg text-card-foreground mb-6 italic" data-testid={`text-testimonial-quote-${author.toLowerCase().replace(/\s+/g, '-')}`}>
          "{quote}"
        </p>
        <div className="flex items-center">
          <img 
            src={avatarUrl} 
            alt={`${author} testimonial`} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
            data-testid={`img-testimonial-avatar-${author.toLowerCase().replace(/\s+/g, '-')}`}
          />
          <div>
            <div className="font-semibold text-card-foreground" data-testid={`text-testimonial-author-${author.toLowerCase().replace(/\s+/g, '-')}`}>
              {author}
            </div>
            <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-position-${author.toLowerCase().replace(/\s+/g, '-')}`}>
              {position}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
