import { useLocation } from "wouter";
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

export default function ServicesPreview() {
  const [, navigate] = useLocation();
  const previewCategories = serviceCategoryOrder.map((slug) => ({
    slug,
    meta: serviceCategoryMeta[slug],
    highlights: servicesByCategory[slug].slice(0, 3),
  }));

  return (
    <section className="py-20 bg-nb-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="services-title">
            Our Core <GradientText>Service Families</GradientText>
          </h2>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="services-subtitle">
            Three integrated practices cover demand generation, day-to-day IT operations, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewCategories.map((category, index) => (
            <GlowCard
              key={category.slug}
              className="p-8 hover:scale-105 transition-all duration-300 flex flex-col"
              data-testid={`service-card-${index}`}
            >
              <h3
                className="font-sora font-bold text-2xl mb-3 text-nb-text"
                data-testid={`service-title-${index}`}
              >
                {category.meta.title}
              </h3>
              <p
                className="text-nb-muted mb-5 leading-relaxed flex-1"
                data-testid={`service-description-${index}`}
              >
                {category.meta.tagline}
              </p>
              {category.highlights.length > 0 && (
                <ul className="text-left space-y-2 text-nb-muted text-sm mb-6">
                  {category.highlights.map((service, featureIndex) => (
                    <li
                      key={service.slug}
                      className="flex items-start"
                      data-testid={`service-feature-${index}-${featureIndex}`}
                    >
                      <span className="text-nb-accent mr-2">&gt;</span>
                      <button
                        type="button"
                        onClick={() => navigate(servicePath(service))}
                        className="text-left text-nb-text hover:text-nb-accent transition-colors"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <GlowButton
                variant="secondary"
                onClick={() => navigate(categoryPath(category.slug))}
                data-testid={`service-learn-more-${index}`}
              >
                Explore {category.meta.title}
              </GlowButton>
            </GlowCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <GlowButton
            onClick={() => navigate("/services")}
            data-testid="button-view-all-services"
          >
            View All Services
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
