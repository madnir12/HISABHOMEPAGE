import { SEO } from "@/lib/seo";

export default function About() {
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

  return (
    <>
      <SEO
        title="About Hisab.cloud - Meet Our ERP Experts Madni & Riaz"
        description="Learn about Hisab.cloud's mission to transform Pakistani businesses with ERPNext solutions. Meet our founders Madni (CTO) and Riaz (CEO) and discover our expertise."
        keywords="About Hisab.cloud, Madni, Riaz, ERP experts Pakistan, ERPNext specialists, Frappe developers"
      />
      
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-about-heading">
              About Hisab.cloud
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              Founded by industry experts with a vision to transform Pakistani businesses through cutting-edge ERP solutions and digital innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-mission-heading">Our Mission</h2>
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
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaborating on business solutions" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-team-collaboration"
              />
            </div>
          </div>

          {/* Founders Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-founders-heading">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-founders-subtitle">The visionary leaders behind Hisab.cloud's success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
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
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-founder-name-${founder.name.toLowerCase()}`}>
                  {founder.name}
                </h3>
                <p className={`text-lg mb-4 ${index === 0 ? 'text-primary' : 'text-secondary'}`} data-testid={`text-founder-role-${founder.name.toLowerCase()}`}>
                  {founder.role}
                </p>
                <p className="text-muted-foreground" data-testid={`text-founder-description-${founder.name.toLowerCase()}`}>
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
