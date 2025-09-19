import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function Resources() {
  const resources = [
    {
      category: "Whitepapers",
      items: [
        {
          title: "The Complete Guide to Digital Transformation",
          description: "A comprehensive roadmap for modernizing your IT infrastructure",
          type: "PDF",
          downloadUrl: "#"
        },
        {
          title: "Cybersecurity Best Practices for Small Business",
          description: "Essential security measures every business should implement",
          type: "PDF", 
          downloadUrl: "#"
        },
        {
          title: "Cloud Migration Strategy Framework",
          description: "Step-by-step guide to successful cloud adoption",
          type: "PDF",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Case Studies",
      items: [
        {
          title: "Healthcare Provider Reduces Costs by 40%",
          description: "How we helped a regional hospital modernize their IT infrastructure",
          type: "Case Study",
          downloadUrl: "#"
        },
        {
          title: "Manufacturing Company Achieves Zero Downtime",
          description: "Implementing predictive maintenance with IoT solutions",
          type: "Case Study",
          downloadUrl: "#"
        },
        {
          title: "Financial Firm Enhances Security Posture",
          description: "Complete cybersecurity overhaul for compliance and protection",
          type: "Case Study",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Tools & Calculators",
      items: [
        {
          title: "ROI Calculator",
          description: "Calculate the return on investment for your IT projects",
          type: "Tool",
          downloadUrl: "#"
        },
        {
          title: "IT Security Assessment",
          description: "Free online assessment to evaluate your security posture",
          type: "Tool",
          downloadUrl: "#"
        },
        {
          title: "Cloud Cost Estimator",
          description: "Estimate your potential cloud migration costs and savings",
          type: "Tool",
          downloadUrl: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" data-testid="resources-hero-title">
            Resources & <GradientText>Insights</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="resources-hero-subtitle">
            Access our library of expert insights, tools, and resources to help you make informed IT decisions
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16" data-testid={`resource-category-${categoryIndex}`}>
              <h2 className="font-sora font-bold text-3xl mb-8 text-nb-text" data-testid={`resource-category-title-${categoryIndex}`}>
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((resource, resourceIndex) => (
                  <GlowCard key={resource.title} className="p-6 hover:scale-105 transition-all duration-300" data-testid={`resource-card-${categoryIndex}-${resourceIndex}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-nb-primary/20 text-nb-primary rounded-full text-sm font-medium" data-testid={`resource-type-${categoryIndex}-${resourceIndex}`}>
                        {resource.type}
                      </span>
                      <i className="fas fa-download text-nb-accent"></i>
                    </div>
                    
                    <h3 className="font-sora font-bold text-lg mb-3 text-nb-text" data-testid={`resource-title-${categoryIndex}-${resourceIndex}`}>
                      {resource.title}
                    </h3>
                    
                    <p className="text-nb-muted mb-6 leading-relaxed" data-testid={`resource-description-${categoryIndex}-${resourceIndex}`}>
                      {resource.description}
                    </p>

                    <GlowButton variant="secondary" size="sm" className="w-full" data-testid={`resource-download-${categoryIndex}-${resourceIndex}`}>
                      <i className="fas fa-download mr-2"></i>
                      Download
                    </GlowButton>
                  </GlowCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6" data-testid="newsletter-title">
            Stay Updated with <GradientText>Expert Insights</GradientText>
          </h2>
          <p className="text-xl text-nb-muted mb-8" data-testid="newsletter-subtitle">
            Subscribe to our newsletter for the latest IT trends, security updates, and best practices.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4" data-testid="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-nb-surface border border-nb-primary/20 rounded-lg text-nb-text placeholder-nb-muted focus:outline-none focus:border-nb-primary"
                data-testid="newsletter-email-input"
              />
              <GlowButton data-testid="newsletter-subscribe-button">
                Subscribe
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}