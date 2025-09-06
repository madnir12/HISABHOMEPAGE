import { SEO } from "@/lib/seo";
import { ServiceCard } from "@/components/ui/service-card";
import { Settings, FileText, BarChart3, Cloud, Users, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "erpnext",
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "ERPNext Implementation",
      description: "Complete ERPNext setup and customization tailored to your business processes with seamless integration across all departments. Our expert team ensures smooth deployment and optimal performance.",
      features: [
        "Custom Module Development",
        "Data Migration & Training",
        "24/7 Support & Maintenance",
        "Multi-company Setup",
        "Role-based Permissions",
        "Advanced Reporting"
      ],
      iconBgColor: "bg-primary/10"
    },
    {
      id: "invoicing",
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Digital Invoicing",
      description: "FBR-compliant digital invoicing system with real-time submission and automatic tax calculations for Pakistani businesses. Stay compliant while streamlining your billing process.",
      features: [
        "Real-time FBR Submission",
        "Automated Tax Calculations",
        "Compliance Monitoring",
        "Digital Receipt Generation",
        "Tax Return Integration",
        "Audit Trail Management"
      ],
      iconBgColor: "bg-secondary/10"
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Business Analytics",
      description: "Advanced reporting and analytics dashboards to gain insights into your business performance and make data-driven decisions with real-time KPI tracking.",
      features: [
        "Custom Dashboards",
        "Real-time Reporting",
        "Performance Metrics",
        "Predictive Analytics",
        "Financial Forecasting",
        "Executive Summaries"
      ],
      iconBgColor: "bg-accent/10"
    },
    {
      id: "cloud",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud hosting solutions with automatic backups and high availability for your critical business systems. Enterprise-grade security and performance.",
      features: [
        "99.9% Uptime Guarantee",
        "Automated Backups",
        "Security Monitoring",
        "Load Balancing",
        "Disaster Recovery",
        "Performance Optimization"
      ],
      iconBgColor: "bg-primary/10"
    },
    {
      id: "training",
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure your team maximizes the potential of your ERP system. From basic usage to advanced administration.",
      features: [
        "User Training Sessions",
        "Documentation & Guides",
        "Priority Support",
        "Video Tutorials",
        "Best Practices Workshop",
        "Certification Programs"
      ],
      iconBgColor: "bg-secondary/10"
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Mobile Solutions",
      description: "Mobile-responsive interfaces and dedicated apps to manage your business operations from anywhere, anytime. Native mobile apps for iOS and Android.",
      features: [
        "Responsive Design",
        "Mobile Apps",
        "Offline Capabilities",
        "Push Notifications",
        "Biometric Authentication",
        "GPS Integration"
      ],
      iconBgColor: "bg-accent/10"
    }
  ];

  return (
    <>
      <SEO
        title="ERP & Digital Invoicing Services - Hisab.cloud"
        description="Comprehensive ERPNext implementation, FBR-compliant digital invoicing, business analytics, cloud hosting, and training services for Pakistani businesses."
        keywords="ERPNext services, Digital invoicing Pakistan, FBR compliance, ERP implementation, Business analytics, Cloud hosting"
      />
      
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              From ERP implementation to digital invoicing, we provide end-to-end solutions that streamline your operations, ensure regulatory compliance, and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          {/* Why Choose Our Services */}
          <div className="bg-muted/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-why-choose-heading">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We combine deep technical expertise with local market knowledge to deliver solutions that work perfectly for Pakistani businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-advantage-expertise">Expert Team</h3>
                <p className="text-muted-foreground" data-testid="text-advantage-expertise-description">
                  Certified ERPNext developers and business analysts with years of implementation experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇵🇰</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-advantage-local">Local Expertise</h3>
                <p className="text-muted-foreground" data-testid="text-advantage-local-description">
                  Deep understanding of Pakistani business practices, tax regulations, and FBR requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-advantage-support">24/7 Support</h3>
                <p className="text-muted-foreground" data-testid="text-advantage-support-description">
                  Round-the-clock technical support and maintenance to keep your business running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
