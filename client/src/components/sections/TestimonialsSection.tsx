import { GlowCard } from "@/components/ui/glow-card";
import { GradientText } from "@/components/ui/gradient-text";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CTO, HealthTech Solutions", 
      initials: "SM",
      content: "NiftyByte transformed our entire IT infrastructure. Their expertise in healthcare compliance saved us months of work.",
      rating: 5
    },
    {
      name: "James Chen",
      title: "CEO, FinanceFlow",
      initials: "JC", 
      content: "The cybersecurity improvements they implemented gave us peace of mind and improved our compliance rating significantly.",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      title: "Director, EduTech Academy",
      initials: "AR",
      content: "Their cloud migration strategy reduced our costs by 40% while improving performance across all our educational platforms.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nb-card to-nb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="testimonials-title">
            Client <GradientText>Success Stories</GradientText>
          </h2>
          <p className="text-xl text-nb-muted" data-testid="testimonials-subtitle">
            See what our clients say about working with NiftyByte Technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={testimonial.name} className="p-8" data-testid={`testimonial-card-${index}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-white">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-nb-text" data-testid={`testimonial-name-${index}`}>{testimonial.name}</h4>
                  <p className="text-nb-muted text-sm" data-testid={`testimonial-title-${index}`}>{testimonial.title}</p>
                </div>
              </div>
              <div className="flex text-nb-accent mb-4" data-testid={`testimonial-rating-${index}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-nb-muted leading-relaxed" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
