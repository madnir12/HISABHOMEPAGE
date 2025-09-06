import { SEO } from "@/lib/seo";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, FileText, BarChart3, Cloud, Users, Smartphone, CheckCircle, Award, TrendingUp, Shield, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

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
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Smart ERP</span> Solutions
    </>
  );

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "FBR Compliant",
      description: "100% compliant with Pakistani tax regulations and FBR requirements"
    },
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: "Certified Experts",
      description: "Team of certified ERPNext developers and business analysts"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Proven Results",
      description: "50+ successful implementations with measurable business growth"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    }
  ];

  const companyStats = [
    { number: "50+", label: "Projects Completed", color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600" },
    { number: "5+", label: "Years Experience", color: "text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500" },
    { number: "100%", label: "FBR Compliance", color: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500" },
    { number: "24/7", label: "Support Available", color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500" }
  ];

  const portfolioProjects = [
    {
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Manufacturing company ERP implementation",
      category: "Manufacturing",
      categoryColor: "text-blue-600",
      title: "ABC Manufacturing Ltd.",
      description: "Complete ERPNext implementation covering inventory, production, and accounting.",
      metrics: [
        { label: "Efficiency Improvement", value: "+40%", color: "text-green-600" },
        { label: "Cost Reduction", value: "-25%", color: "text-blue-600" }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Retail chain POS system",
      category: "Retail",
      categoryColor: "text-green-600",
      title: "XYZ Retail Chain",
      description: "Multi-location retail management with integrated POS and FBR compliance.",
      metrics: [
        { label: "Inventory Accuracy", value: "+95%", color: "text-green-600" },
        { label: "FBR Compliance", value: "100%", color: "text-blue-600" }
      ]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      imageAlt: "Service company project management",
      category: "Services",
      categoryColor: "text-purple-600",
      title: "DEF Consulting Services",
      description: "Project management and client billing system with automated invoicing.",
      metrics: [
        { label: "Project Delivery", value: "+30%", color: "text-green-600" },
        { label: "Client Satisfaction", value: "98%", color: "text-purple-600" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Hisab.cloud transformed our entire business operation. The ERPNext implementation was seamless, and their FBR compliance solution saved us countless hours.",
      author: "Ahmed Hassan",
      position: "CEO, ABC Manufacturing",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      quote: "The team's expertise in both technology and local business requirements is exceptional. They delivered exactly what we needed, on time and within budget.",
      author: "Fatima Ali",
      position: "Operations Director, XYZ Retail",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title="Hisab.cloud - Professional ERP & Digital Invoicing Solutions"
        description="Transform your Pakistani business with world-class ERPNext/Frappe solutions and FBR-compliant digital invoicing systems. Expert ERP implementation and support."
        keywords="ERPNext, Frappe, ERP Pakistan, Digital Invoicing, FBR Compliance, Business Solutions, Hisab.cloud"
      />
      
      {/* Section 1: Hero Section */}
      <HeroSection
        title={heroTitle}
        subtitle="Hisab.cloud delivers comprehensive ERPNext/Frappe solutions and digital invoicing systems with real-time FBR compliance for Pakistani businesses."
        primaryButtonText="Start Your Digital Journey"
        secondaryButtonText="Watch Demo"
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
        imageAlt="Business analytics dashboard"
        badges={[
          { icon: "✓", text: "FBR Compliant", color: "bg-gradient-to-r from-green-400 to-emerald-500 text-white" },
          { icon: "⚡", text: "Real-time", color: "bg-gradient-to-r from-orange-400 to-red-500 text-white" }
        ]}
      />

      {/* Section 2: Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hisab.cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in ERPNext implementation and digital transformation for Pakistani businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center scroll-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: About Company */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Pakistani Businesses Since 2019
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by industry experts Madni and Riaz, Hisab.cloud has been at the forefront of digital transformation in Pakistan. We specialize in making enterprise-grade ERP solutions accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our deep understanding of local business practices, combined with international best practices, enables us to deliver solutions that truly work for Pakistani enterprises.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="scroll-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Section 5: Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across Pakistan streamline operations and achieve measurable growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="scroll-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from businesses that have transformed their operations with our solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="scroll-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get started with a free consultation and discover how Hisab.cloud can streamline your operations and boost your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold hover:bg-gray-100 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                <Phone className="w-5 h-5 mr-2 text-purple-600" />
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/20 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/portfolio'}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
              <div className="flex items-center text-white">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-white/80">+92 XXX XXXXXXX</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-white/80">info@hisab.cloud</div>
                </div>
              </div>
              <div className="flex items-center text-white">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-white/80">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
