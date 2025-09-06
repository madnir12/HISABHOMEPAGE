import { SEO } from "@/lib/seo";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function Portfolio() {
  const projects = [
    {
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Manufacturing company ERP implementation",
      category: "Manufacturing",
      categoryColor: "text-secondary",
      title: "ABC Manufacturing Ltd.",
      description: "Complete ERPNext implementation covering inventory, production, accounting, and HR modules with custom reporting dashboards.",
      metrics: [
        { label: "Efficiency Improvement", value: "+40%", color: "text-secondary" },
        { label: "Cost Reduction", value: "-25%", color: "text-secondary" }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Retail chain POS and inventory system",
      category: "Retail",
      categoryColor: "text-accent",
      title: "XYZ Retail Chain",
      description: "Multi-location retail management with integrated POS, inventory tracking, and FBR-compliant digital invoicing system.",
      metrics: [
        { label: "Inventory Accuracy", value: "+95%", color: "text-accent" },
        { label: "FBR Compliance", value: "100%", color: "text-accent" }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Service company project management system",
      category: "Services",
      categoryColor: "text-primary",
      title: "DEF Consulting Services",
      description: "Project management and client billing system with time tracking, resource allocation, and automated invoicing.",
      metrics: [
        { label: "Project Delivery", value: "+30%", color: "text-primary" },
        { label: "Client Satisfaction", value: "98%", color: "text-primary" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Hisab.cloud transformed our entire business operation. The ERPNext implementation was seamless, and their FBR compliance solution saved us countless hours of manual work.",
      author: "Ahmed Hassan",
      position: "CEO, ABC Manufacturing",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      quote: "The team's expertise in both technology and local business requirements is exceptional. They delivered exactly what we needed, on time and within budget.",
      author: "Fatima Ali",
      position: "Operations Director, XYZ Retail",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <>
      <SEO
        title="Success Stories & Portfolio - Hisab.cloud ERP Implementations"
        description="Discover how Hisab.cloud has helped Pakistani businesses streamline operations with ERPNext implementations. View case studies and client testimonials."
        keywords="ERP case studies, ERPNext success stories, Pakistan ERP implementations, client testimonials, business transformation"
      />
      
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-portfolio-heading">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
              Discover how we've helped businesses across Pakistan streamline operations, ensure compliance, and drive growth through our ERP solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-testimonials-heading">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
                Real feedback from businesses that have transformed their operations with our solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="bg-background rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-industries-heading">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-industries-description">
                Our ERP solutions are tailored to meet the specific needs of various industries across Pakistan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Manufacturing", icon: "🏭", description: "Production planning, inventory management, quality control" },
                { name: "Retail", icon: "🛒", description: "Multi-location POS, inventory tracking, customer management" },
                { name: "Services", icon: "💼", description: "Project management, time tracking, client billing" },
                { name: "Healthcare", icon: "🏥", description: "Patient management, billing, inventory, compliance" }
              ].map((industry, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4" data-testid={`icon-industry-${industry.name.toLowerCase()}`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`text-industry-${industry.name.toLowerCase()}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-industry-description-${industry.name.toLowerCase()}`}>
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
