import { Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const serviceLinks = [
    { name: "ERPNext Implementation", href: "/services#erpnext" },
    { name: "Digital Invoicing", href: "/services#invoicing" },
    { name: "Business Analytics", href: "/services#analytics" },
    { name: "Cloud Infrastructure", href: "/services#cloud" },
    { name: "Training & Support", href: "/services#training" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-muted text-muted-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary" data-testid="footer-logo">
                Hisab.cloud
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-footer-description">
              Empowering Pakistani businesses with world-class ERP solutions and digital invoicing systems. 
              Transform your operations with ERPNext expertise and FBR compliance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-services-title">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.split('#')[1] || 'services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-primary transition-colors text-left"
                    data-testid={`link-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-company-title">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const sectionMap: { [key: string]: string } = {
                        '/about': 'about',
                        '/portfolio': 'portfolio',
                        '/contact': 'contact'
                      };
                      const sectionId = sectionMap[link.href] || 'home';
                      const element = document.getElementById(sectionId);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-primary transition-colors text-left"
                    data-testid={`link-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 Hisab.cloud. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Built with</span>
              <span className="text-primary font-semibold" data-testid="text-erpnext">ERPNext</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-secondary font-semibold" data-testid="text-frappe">Frappe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
