import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function Services() {
  const services = [
    {
      icon: "fas fa-network-wired",
      title: "IT Strategy & Planning",
      description: "Strategic IT planning and execution to align technology with your business goals",
      features: [
        "IT Infrastructure Assessment",
        "Technology Roadmapping",
        "Digital Strategy Planning",
        "Budget Planning & Optimization",
        "Vendor Management",
        "Risk Assessment"
      ],
      outcomes: [
        "Reduced IT costs by 25-40%",
        "Improved system reliability",
        "Better alignment with business goals"
      ]
    },
    {
      icon: "fas fa-rocket",
      title: "Digital Transformation",
      description: "Transform your business with cutting-edge technology solutions",
      features: [
        "Cloud Migration Strategy",
        "Process Automation",
        "Digital Workflow Optimization",
        "Legacy System Modernization",
        "Integration Solutions",
        "Change Management"
      ],
      outcomes: [
        "40% increase in operational efficiency",
        "Faster time-to-market",
        "Enhanced customer experience"
      ]
    },
    {
      icon: "fas fa-shield-alt", 
      title: "Cybersecurity Services",
      description: "Protect your data and systems with enterprise-grade security",
      features: [
        "Security Audits & Assessments",
        "Threat Detection & Response",
        "Compliance Management",
        "Employee Security Training",
        "Incident Response Planning",
        "Penetration Testing"
      ],
      outcomes: [
        "99.9% threat detection rate",
        "Zero security incidents",
        "Full compliance achievement"
      ]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Services", 
      description: "Leverage the power of cloud computing for scalability and efficiency",
      features: [
        "Cloud Strategy & Planning",
        "Migration Services",
        "Multi-Cloud Management",
        "Cloud Security",
        "Cost Optimization",
        "DevOps & Automation"
      ],
      outcomes: [
        "30-50% cost reduction",
        "Improved scalability",
        "Enhanced disaster recovery"
      ]
    },
    {
      icon: "fas fa-tools",
      title: "Managed IT Services",
      description: "Comprehensive IT support and management for your entire infrastructure",
      features: [
        "24/7 Monitoring & Support",
        "Help Desk Services",
        "Network Management",
        "Backup & Recovery",
        "Software Management",
        "Hardware Procurement"
      ],
      outcomes: [
        "99.9% uptime guarantee",
        "Faster issue resolution",
        "Predictable IT costs"
      ]
    },
    {
      icon: "fas fa-cogs",
      title: "IT Infrastructure",
      description: "Build and maintain robust, scalable IT infrastructure",
      features: [
        "Network Design & Implementation",
        "Server Management",
        "Storage Solutions",
        "Virtualization",
        "Disaster Recovery",
        "Performance Optimization"
      ],
      outcomes: [
        "Improved system performance",
        "Reduced downtime",
        "Better scalability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" data-testid="services-hero-title">
            Our <GradientText>Services</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="services-hero-subtitle">
            Comprehensive IT solutions designed to transform your business and drive sustainable growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlowCard key={service.title} className="p-8 hover:scale-105 transition-all duration-300" data-testid={`service-detail-card-${index}`}>
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="font-sora font-bold text-2xl mb-4 text-nb-text" data-testid={`service-detail-title-${index}`}>
                  {service.title}
                </h3>
                
                <p className="text-nb-muted mb-6 leading-relaxed" data-testid={`service-detail-description-${index}`}>
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-nb-text mb-3">What You Get:</h4>
                  <ul className="space-y-2 text-nb-muted text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${index}-${featureIndex}`}>
                        <i className="fas fa-check text-nb-accent mr-2"></i> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-nb-text mb-3">Typical Outcomes:</h4>
                  <ul className="space-y-2 text-nb-muted text-sm">
                    {service.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center" data-testid={`service-outcome-${index}-${outcomeIndex}`}>
                        <i className="fas fa-arrow-up text-green-400 mr-2"></i> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <GlowButton size="sm" className="w-full" data-testid={`service-detail-cta-${index}`}>
                  Learn More
                </GlowButton>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6" data-testid="services-cta-title">
            Ready to Transform Your <GradientText>IT Infrastructure?</GradientText>
          </h2>
          <p className="text-xl text-nb-muted mb-8 max-w-3xl mx-auto" data-testid="services-cta-subtitle">
            Let's discuss your specific needs and create a customized solution that drives real results.
          </p>
          <GlowButton size="lg" className="text-lg" data-testid="services-cta-button">
            Get Your Free Consultation
          </GlowButton>
        </div>
      </section>
    </div>
  );
}