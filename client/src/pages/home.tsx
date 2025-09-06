import { SEO } from "@/lib/seo";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Settings, FileText, BarChart3, Cloud, Users, Smartphone } from "lucide-react";

export default function Home() {
  useScrollAnimation();
  
  const services = [
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "ERPNext Implementation",
      description: "Complete ERPNext setup and customization tailored to your business processes with seamless integration across all departments.",
      features: [
        "Custom Module Development",
        "Data Migration & Training",
        "24/7 Support & Maintenance"
      ],
      iconBgColor: "bg-primary/10"
    },
    {
      icon: <FileText className="w-6 h-6 text-secondary" />,
      title: "Digital Invoicing",
      description: "FBR-compliant digital invoicing system with real-time submission and automatic tax calculations for Pakistani businesses.",
      features: [
        "Real-time FBR Submission",
        "Automated Tax Calculations",
        "Compliance Monitoring"
      ],
      iconBgColor: "bg-secondary/10"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      title: "Business Analytics",
      description: "Advanced reporting and analytics dashboards to gain insights into your business performance and make data-driven decisions.",
      features: [
        "Custom Dashboards",
        "Real-time Reporting",
        "Performance Metrics"
      ],
      iconBgColor: "bg-accent/10"
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud hosting solutions with automatic backups and high availability for your critical business systems.",
      features: [
        "99.9% Uptime Guarantee",
        "Automated Backups",
        "Security Monitoring"
      ],
      iconBgColor: "bg-primary/10"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure your team maximizes the potential of your ERP system.",
      features: [
        "User Training Sessions",
        "Documentation & Guides",
        "Priority Support"
      ],
      iconBgColor: "bg-secondary/10"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile Solutions",
      description: "Mobile-responsive interfaces and dedicated apps to manage your business operations from anywhere, anytime.",
      features: [
        "Responsive Design",
        "Mobile Apps",
        "Offline Capabilities"
      ],
      iconBgColor: "bg-accent/10"
    }
  ];

  const heroTitle = (
    <>
      Transform Your Business with{" "}
      <span className="text-primary">Smart ERP</span> Solutions
    </>
  );

  return (
    <>
      <SEO
        title="Hisab.cloud - Professional ERP & Digital Invoicing Solutions"
        description="Transform your Pakistani business with world-class ERPNext/Frappe solutions and FBR-compliant digital invoicing systems. Expert ERP implementation and support."
        keywords="ERPNext, Frappe, ERP Pakistan, Digital Invoicing, FBR Compliance, Business Solutions, Hisab.cloud"
      />
      
      {/* Floating Background Elements */}
      <div className="floating-shapes"></div>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10">
        <HeroSection
          title={heroTitle}
          subtitle="Hisab.cloud delivers comprehensive ERPNext/Frappe solutions and digital invoicing systems with real-time FBR compliance for Pakistani businesses."
          primaryButtonText="Start Your Digital Journey"
          secondaryButtonText="Watch Demo"
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          imageAlt="Business analytics dashboard"
          badges={[
            { icon: "✓", text: "FBR Compliant", color: "bg-secondary text-secondary-foreground" },
            { icon: "⚡", text: "Real-time", color: "bg-accent text-accent-foreground" }
          ]}
        />
      </div>

      <section className="py-20 bg-muted/5 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up" data-testid="text-services-heading">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" data-testid="text-services-description" style={{animationDelay: '0.2s'}}>
              From ERP implementation to digital invoicing, we provide end-to-end solutions that streamline your operations and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
