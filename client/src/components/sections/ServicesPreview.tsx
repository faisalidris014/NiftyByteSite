import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function ServicesPreview() {
  const services = [
    {
      icon: "fas fa-network-wired",
      title: "STRATEGY",
      description: "Strategic IT planning and execution to align technology with your business goals",
      features: [
        "IT Infrastructure Assessment",
        "Technology Roadmapping", 
        "Digital Strategy Planning"
      ]
    },
    {
      icon: "fas fa-rocket",
      title: "DIGITAL TRANSFORMATION",
      description: "Transform your business with cutting-edge technology solutions",
      features: [
        "Cloud Migration",
        "Process Automation",
        "Digital Workflow Optimization"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "CYBERSECURITY", 
      description: "Protect your data and systems with enterprise-grade security",
      features: [
        "Security Audits",
        "Threat Detection",
        "Compliance Management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-nb-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="services-title">
            Our Core <GradientText>Services</GradientText>
          </h2>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="services-subtitle">
            Comprehensive IT solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlowCard key={service.title} className="p-8 text-center hover:scale-105 transition-all duration-300" data-testid={`service-card-${index}`}>
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow-pulse" style={{animationDelay: `${index * 0.5}s`}}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-sora font-bold text-2xl mb-4 text-nb-text" data-testid={`service-title-${index}`}>{service.title}</h3>
              <p className="text-nb-muted mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="text-left space-y-2 text-nb-muted text-sm mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${index}-${featureIndex}`}>
                    <i className="fas fa-check text-nb-accent mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
              <button className="text-nb-accent hover:text-nb-primary font-semibold flex items-center mx-auto" data-testid={`service-learn-more-${index}`}>
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <GlowButton data-testid="button-view-all-services">
            View All Services
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
