import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-nb-bg bg-noise relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="final-cta-title">
          Transform Your Business with
          <span className="block">
            <GradientText>Expert IT Consulting</GradientText>
          </span>
        </h2>
        <p className="text-xl text-nb-muted mb-8 max-w-3xl mx-auto" data-testid="final-cta-subtitle">
          Join hundreds of satisfied clients who have transformed their operations with our proven methodology and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton size="lg" className="text-lg" data-testid="button-start-transformation">
            Start Your Transformation
          </GlowButton>
          <GlowButton variant="secondary" size="lg" className="text-lg" data-testid="button-view-case-studies">
            View Case Studies
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
