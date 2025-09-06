import { useState } from "react";
import { SEO } from "@/lib/seo";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Send, Linkedin, Twitter, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  useScrollAnimation();
  
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

  const services = [
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

  return (
    <>
      <SEO
        title="Contact Hisab.cloud - Get Your ERP Solution Today"
        description="Contact Hisab.cloud for professional ERPNext implementation and digital invoicing solutions. Get a free consultation from our ERP experts in Pakistan."
        keywords="Contact Hisab.cloud, ERP consultation Pakistan, ERPNext quotes, Digital invoicing inquiry, Business solutions contact"
      />
      
      <section id="contact" className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-heading">
              Let's Transform Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
              Ready to streamline your operations with cutting-edge ERP solutions? Get in touch with our experts for a personalized consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="scroll-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-get-in-touch">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-testid={`text-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}-title`}>
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`text-contact-${info.title.toLowerCase().replace(/\s+/g, '-')}-content`}>
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4" data-testid="text-follow-us">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${social.color}`}
                      data-testid={social.testId}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="scroll-fade-in">
              <Card className="border border-border hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-send-message">
                    Send us a Message
                  </h2>
                  
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
                          {services.map((service) => (
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
