import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function IndustriesPreview() {
  const industries = [
    {
      icon: "fas fa-heartbeat",
      title: "Healthcare",
      description: "HIPAA-compliant solutions"
    },
    {
      icon: "fas fa-university", 
      title: "Financial",
      description: "Secure financial systems"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Education", 
      description: "Modern learning platforms"
    },
    {
      icon: "fas fa-industry",
      title: "Manufacturing",
      description: "Smart factory solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nb-card to-nb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="industries-title">
            Industries We <GradientText>Serve</GradientText>
          </h2>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="industries-subtitle">
            Specialized solutions tailored to your industry's unique challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <GlowCard key={industry.title} className="p-6 text-center hover:scale-105 transition-all" data-testid={`industry-card-${index}`}>
              <i className={`${industry.icon} text-3xl text-nb-accent mb-4`}></i>
              <h3 className="font-sora font-semibold text-lg mb-2" data-testid={`industry-title-${index}`}>{industry.title}</h3>
              <p className="text-nb-muted text-sm" data-testid={`industry-description-${index}`}>{industry.description}</p>
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <GlowButton variant="secondary" data-testid="button-view-industries">
            Explore All Industries
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
