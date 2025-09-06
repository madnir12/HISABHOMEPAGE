import { useState } from "react";
import { SEO } from "@/lib/seo";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, FileText, BarChart3, Cloud, Users, Smartphone, MapPin, Mail, Phone, Clock, Send, Linkedin, Twitter, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
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

  const founders = [
    {
      name: "Madni",
      role: "Co-founder & CTO",
      description: "Technical visionary with extensive experience in ERPNext development and system architecture. Madni leads our technical strategy and ensures robust, scalable solutions for our clients.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      icon: "💻",
      iconColor: "bg-primary text-primary-foreground"
    },
    {
      name: "Riaz",
      role: "Co-founder & CEO",
      description: "Business strategist and operations expert who drives our growth and client relationships. Riaz ensures that our solutions perfectly align with business objectives and market needs.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      icon: "📈",
      iconColor: "bg-secondary text-secondary-foreground"
    }
  ];

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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Address",
      content: "Karachi, Pakistan",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: "Email",
      content: "info@hisab.cloud",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone",
      content: "+92 XXX XXXXXXX",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PKT",
      bgColor: "bg-primary/10"
    }
  ];

  const serviceOptions = [
    "ERPNext Implementation",
    "Digital Invoicing",
    "Business Analytics",
    "Cloud Infrastructure",
    "Training & Support",
    "Mobile Solutions"
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground", testId: "link-linkedin" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", color: "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground", testId: "link-twitter" },
    { icon: <Github className="w-5 h-5" />, href: "#", color: "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground", testId: "link-github" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
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
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              From ERP implementation to digital invoicing, we provide end-to-end solutions that streamline your operations, ensure regulatory compliance, and drive business growth.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Our Services */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="bg-background rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-why-choose-heading">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-choose-description">
                We combine deep technical expertise with local market knowledge to deliver solutions that work perfectly for Pakistani businesses.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { icon: "🏆", title: "Expert Team", description: "Certified ERPNext developers and business analysts with years of implementation experience." },
                { icon: "🇵🇰", title: "Local Expertise", description: "Deep understanding of Pakistani business practices, tax regulations, and FBR requirements." },
                { icon: "⚡", title: "24/7 Support", description: "Round-the-clock technical support and maintenance to keep your business running smoothly." }
              ].map((advantage, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{advantage.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-about-heading">
              About Hisab.cloud
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              Founded by industry experts with a vision to transform Pakistani businesses through cutting-edge ERP solutions and digital innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6" data-testid="text-mission-heading">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-mission-paragraph-1">
                We believe every business deserves access to world-class ERP solutions. Our mission is to democratize enterprise software by making ERPNext accessible, affordable, and perfectly tailored to Pakistani business needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-mission-paragraph-2">
                With deep expertise in ERPNext/Frappe framework and local regulatory requirements, we bridge the gap between international best practices and local business realities.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-projects">50+</div>
                  <div className="text-muted-foreground" data-testid="text-stat-projects-label">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2" data-testid="text-stat-experience">5+</div>
                  <div className="text-muted-foreground" data-testid="text-stat-experience-label">Years Experience</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating on business solutions" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-team-collaboration"
              />
            </motion.div>
          </div>

          {/* Founders Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="text-founders-heading">Meet Our Founders</h3>
            <p className="text-lg text-muted-foreground" data-testid="text-founders-subtitle">The visionary leaders behind Hisab.cloud's success</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {founders.map((founder, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={founder.imageUrl} 
                    alt={`${founder.name} - ${founder.role}`} 
                    className="w-48 h-48 rounded-full mx-auto shadow-xl object-cover"
                    data-testid={`img-founder-${founder.name.toLowerCase()}`}
                  />
                  <div className={`absolute -bottom-2 -right-2 ${founder.iconColor} p-3 rounded-full`}>
                    <span className="text-lg">{founder.icon}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-founder-name-${founder.name.toLowerCase()}`}>
                  {founder.name}
                </h4>
                <p className={`text-lg mb-4 ${index === 0 ? 'text-primary' : 'text-secondary'}`} data-testid={`text-founder-role-${founder.name.toLowerCase()}`}>
                  {founder.role}
                </p>
                <p className="text-muted-foreground" data-testid={`text-founder-description-${founder.name.toLowerCase()}`}>
                  {founder.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-portfolio-heading">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-description">
              Discover how we've helped businesses across Pakistan streamline operations, ensure compliance, and drive growth through our ERP solutions.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="text-testimonials-heading">
                What Our Clients Say
              </h3>
              <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
                Real feedback from businesses that have transformed their operations with our solutions.
              </p>
            </div>
            
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Industry Expertise */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="bg-background rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="text-industries-heading">
                Industries We Serve
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-industries-description">
                Our ERP solutions are tailored to meet the specific needs of various industries across Pakistan.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { name: "Manufacturing", icon: "🏭", description: "Production planning, inventory management, quality control" },
                { name: "Retail", icon: "🛒", description: "Multi-location POS, inventory tracking, customer management" },
                { name: "Services", icon: "💼", description: "Project management, time tracking, client billing" },
                { name: "Healthcare", icon: "🏥", description: "Patient management, billing, inventory, compliance" }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4" data-testid={`icon-industry-${industry.name.toLowerCase()}`}>
                    {industry.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2" data-testid={`text-industry-${industry.name.toLowerCase()}`}>
                    {industry.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-industry-description-${industry.name.toLowerCase()}`}>
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-heading">
              Let's Transform Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
              Ready to streamline your operations with cutting-edge ERP solutions? Get in touch with our experts for a personalized consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="text-get-in-touch">Get in Touch</h3>
              
              <motion.div
                variants={staggerContainer}
                className="space-y-6 mb-12"
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex items-start">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1" data-testid={`text-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}-title`}>
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`text-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}-content`}>
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div>
                <h4 className="font-semibold text-foreground mb-4" data-testid="text-follow-us">Follow Us</h4>
                <motion.div
                  variants={staggerContainer}
                  className="flex space-x-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      variants={fadeInUp}
                      href={social.href} 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${social.color}`}
                      data-testid={social.testId}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <Card className="border border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-send-message">
                    Send us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-first-name">
                          First Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-last-name">
                          Last Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-email">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-company">
                        Company
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        data-testid="input-company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-service">
                        Service Interest
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service) => (
                            <SelectItem key={service} value={service} data-testid={`option-${service.toLowerCase().replace(/\s+/g, '-')}`}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2" data-testid="label-message">
                        Message
                      </label>
                      <Textarea
                        rows={4}
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
