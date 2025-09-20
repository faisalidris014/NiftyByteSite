import { Link, useLocation } from "wouter";
import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";
import {
  categoryPath,
  serviceCategoryMeta,
  serviceCategoryOrder,
  servicePath,
  servicesByCategory,
} from "@/lib/services";

function splitTitle(title: string): { lead: string; focus: string } {
  const words = title.split(" ").filter(Boolean);
  if (words.length <= 1) {
    return { lead: "", focus: title };
  }
  const focus = words.pop() as string;
  return {
    lead: words.join(" "),
    focus,
  };
}

export default function Services() {
  const [, navigate] = useLocation();

  const categoryCards = serviceCategoryOrder.map((slug) => ({
    slug,
    meta: serviceCategoryMeta[slug],
    highlights: servicesByCategory[slug].slice(0, 3),
  }));

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our <GradientText>Service Ecosystem</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto">
            Every engagement is anchored in measurable outcomes. Explore the marketing, managed services, and engineering capabilities that help teams scale faster.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCards.map((category) => {
              const titleParts = splitTitle(category.meta.title);
              return (
                <GlowCard key={category.slug} className="p-8 flex flex-col">
                  <h2 className="font-sora font-semibold text-3xl text-nb-text mb-4">
                    {titleParts.lead ? `${titleParts.lead} ` : ""}
                    <GradientText>{titleParts.focus}</GradientText>
                  </h2>
                  <p className="text-nb-muted mb-4 leading-relaxed">{category.meta.tagline}</p>
                  <p className="text-nb-muted flex-1 leading-relaxed">{category.meta.description}</p>
                  {category.highlights.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-nb-text uppercase tracking-wide mb-3">
                        Featured services
                      </h3>
                      <ul className="space-y-2 text-sm text-nb-muted">
                        {category.highlights.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={servicePath(service)}
                              className="text-nb-text hover:text-nb-accent transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <GlowButton
                    className="mt-8"
                    onClick={() => navigate(categoryPath(category.slug))}
                  >
                    Explore {category.meta.title}
                  </GlowButton>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-nb-card/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-4">
              All Services by <GradientText>Category</GradientText>
            </h2>
            <p className="text-nb-muted text-lg max-w-3xl mx-auto">
              Drill into any capability to see the complete playbook, deliverables, and launch process. Every page below is powered by the detailed landing content you provided.
            </p>
          </div>

          <div className="space-y-10">
            {serviceCategoryOrder.map((slug) => {
              const meta = serviceCategoryMeta[slug];
              const services = servicesByCategory[slug];
              return (
                <div
                  key={slug}
                  className="bg-nb-card border border-nb-primary/20 rounded-2xl p-6 md:p-10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-sora text-2xl text-nb-text mb-1">{meta.title}</h3>
                      <p className="text-nb-muted">{meta.tagline}</p>
                    </div>
                    <GlowButton
                      variant="secondary"
                      onClick={() => navigate(categoryPath(slug))}
                    >
                      View category overview
                    </GlowButton>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={servicePath(service)}
                        className="block border border-white/5 rounded-xl p-4 hover:border-nb-accent/40 hover:shadow-soft transition-all duration-200"
                      >
                        <h4 className="font-semibold text-nb-text mb-1">{service.title}</h4>
                        {service.subtitle && (
                          <p className="text-sm text-nb-accent mb-2">{service.subtitle}</p>
                        )}
                        <p className="text-sm text-nb-muted leading-relaxed">{service.summary}</p>
                        <span className="inline-flex items-center text-sm text-nb-accent mt-3">
                          View details
                          <span className="ml-1">&gt;</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6">
            Ready to Activate Your <GradientText>Roadmap?</GradientText>
          </h2>
          <p className="text-xl text-nb-muted mb-8 max-w-3xl mx-auto">
            Share your goals and we will align the right mix of marketing, managed IT, and engineering capabilities to hit them.
          </p>
          <GlowButton size="lg" className="text-lg" onClick={() => navigate("/contact")}>
            Book a strategy session
          </GlowButton>
        </div>
      </section>
    </div>
  );
}
