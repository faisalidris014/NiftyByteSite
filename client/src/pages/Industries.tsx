import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function Industries() {
  const industries = [
    {
      icon: "fas fa-heartbeat",
      title: "Healthcare",
      description: "HIPAA-compliant IT solutions for medical practices, hospitals, and healthcare organizations",
      challenges: [
        "HIPAA compliance requirements",
        "Patient data security",
        "Legacy system integration",
        "Telehealth implementation"
      ],
      solutions: [
        "Secure cloud infrastructure",
        "HIPAA-compliant email systems",
        "Electronic health records (EHR)",
        "Telemedicine platforms",
        "Data backup & recovery",
        "Cybersecurity training"
      ],
      outcomes: [
        "100% HIPAA compliance",
        "50% reduction in data breaches",
        "Improved patient care efficiency"
      ]
    },
    {
      icon: "fas fa-university",
      title: "Financial Services",
      description: "Secure, compliant technology solutions for banks, credit unions, and financial institutions",
      challenges: [
        "Regulatory compliance (SOX, PCI DSS)",
        "Fraud prevention",
        "Digital banking transformation",
        "Legacy system modernization"
      ],
      solutions: [
        "Multi-factor authentication",
        "Fraud detection systems",
        "Core banking modernization",
        "Digital payment platforms",
        "Risk management tools",
        "Compliance monitoring"
      ],
      outcomes: [
        "Zero compliance violations",
        "75% reduction in fraud incidents",
        "Faster transaction processing"
      ]
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Education",
      description: "Modern learning technology for schools, universities, and educational institutions",
      challenges: [
        "Remote learning infrastructure",
        "Student data privacy",
        "Budget constraints",
        "Technology adoption"
      ],
      solutions: [
        "Learning management systems",
        "Virtual classroom platforms",
        "Student information systems",
        "Network infrastructure",
        "Device management",
        "Digital security training"
      ],
      outcomes: [
        "Seamless remote learning",
        "Improved student engagement",
        "Cost-effective IT operations"
      ]
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing",
      description: "Smart factory solutions and industrial IoT for modern manufacturing operations",
      challenges: [
        "Industry 4.0 transformation",
        "Operational technology security",
        "Supply chain integration",
        "Equipment monitoring"
      ],
      solutions: [
        "Industrial IoT platforms",
        "Predictive maintenance systems",
        "ERP integration",
        "Quality management systems",
        "Supply chain optimization",
        "Cybersecurity for OT"
      ],
      outcomes: [
        "30% increase in productivity",
        "Reduced equipment downtime",
        "Improved quality control"
      ]
    },
    {
      icon: "fas fa-shopping-cart",
      title: "Retail & E-commerce",
      description: "Digital commerce solutions and customer experience platforms for retail businesses",
      challenges: [
        "Omnichannel integration",
        "Payment processing security",
        "Inventory management",
        "Customer data protection"
      ],
      solutions: [
        "E-commerce platforms",
        "Point-of-sale systems",
        "Inventory management",
        "Customer relationship management",
        "Payment security",
        "Analytics & reporting"
      ],
      outcomes: [
        "Unified customer experience",
        "Increased online sales",
        "Better inventory optimization"
      ]
    },
    {
      icon: "fas fa-gavel",
      title: "Legal Services",
      description: "Secure document management and case management systems for law firms",
      challenges: [
        "Client confidentiality",
        "Document security",
        "Case management efficiency",
        "Compliance requirements"
      ],
      solutions: [
        "Legal practice management",
        "Secure document storage",
        "Client communication platforms",
        "Time tracking & billing",
        "E-discovery tools",
        "Compliance monitoring"
      ],
      outcomes: [
        "Enhanced client confidentiality",
        "Streamlined case management",
        "Improved billing accuracy"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" data-testid="industries-hero-title">
            Industries We <GradientText>Serve</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="industries-hero-subtitle">
            Specialized technology solutions tailored to your industry's unique challenges and compliance requirements
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <GlowCard key={industry.title} className="p-8 hover:scale-105 transition-all duration-300" data-testid={`industry-detail-card-${index}`}>
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${industry.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="font-sora font-bold text-2xl mb-4 text-nb-text" data-testid={`industry-detail-title-${index}`}>
                  {industry.title}
                </h3>
                
                <p className="text-nb-muted mb-6 leading-relaxed" data-testid={`industry-detail-description-${index}`}>
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-nb-text mb-3">Common Challenges:</h4>
                  <ul className="space-y-2 text-nb-muted text-sm">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center" data-testid={`industry-challenge-${index}-${challengeIndex}`}>
                        <i className="fas fa-exclamation-triangle text-yellow-400 mr-2"></i> {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-nb-text mb-3">Our Solutions:</h4>
                  <ul className="space-y-2 text-nb-muted text-sm">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center" data-testid={`industry-solution-${index}-${solutionIndex}`}>
                        <i className="fas fa-check text-nb-accent mr-2"></i> {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-nb-text mb-3">Typical Results:</h4>
                  <ul className="space-y-2 text-nb-muted text-sm">
                    {industry.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-center" data-testid={`industry-outcome-${index}-${outcomeIndex}`}>
                        <i className="fas fa-arrow-up text-green-400 mr-2"></i> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <GlowButton size="sm" className="w-full" data-testid={`industry-detail-cta-${index}`}>
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
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6" data-testid="industries-cta-title">
            Don't See Your <GradientText>Industry?</GradientText>
          </h2>
          <p className="text-xl text-nb-muted mb-8 max-w-3xl mx-auto" data-testid="industries-cta-subtitle">
            We work with businesses across all sectors. Let's discuss how we can help solve your specific industry challenges.
          </p>
          <GlowButton size="lg" className="text-lg" data-testid="industries-cta-button">
            Schedule a Consultation
          </GlowButton>
        </div>
      </section>
    </div>
  );
}