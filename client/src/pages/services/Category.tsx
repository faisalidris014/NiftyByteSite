import { Link, useLocation } from "wouter";
import NotFound from "@/pages/not-found";
import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";
import {
  getCategoryServices,
  isServiceCategory,
  serviceCategoryMeta,
  servicePath,
} from "@/lib/services";

interface ServiceCategoryPageProps {
  category: string;
}

export default function ServiceCategoryPage({ category }: ServiceCategoryPageProps) {
  if (!isServiceCategory(category)) {
    return <NotFound />;
  }

  const meta = serviceCategoryMeta[category];
  const services = getCategoryServices(category);
  const [, navigate] = useLocation();
  const titleWords = meta.title.split(" ").filter(Boolean);
  const focusWord = titleWords.length > 1 ? titleWords.pop() : undefined;
  const leadTitle = titleWords.join(" ");

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-nb-muted hover:text-nb-accent transition-colors mb-6"
          >
            <span className="mr-2">&lt;</span> Back to Services Overview
          </Link>
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            {leadTitle}
            {focusWord ? (
              <>
                {leadTitle ? " " : ""}
                <GradientText>{focusWord}</GradientText>
              </>
            ) : (
              <GradientText>{meta.title}</GradientText>
            )}
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mb-4">{meta.tagline}</p>
          <p className="text-lg text-nb-muted max-w-3xl">{meta.description}</p>
          <GlowButton
            className="mt-8"
            onClick={() => navigate(meta.ctaHref)}
          >
            {meta.ctaLabel}
          </GlowButton>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <GlowCard key={service.slug} className="p-8 flex flex-col">
                  <h2 className="font-sora font-semibold text-2xl text-nb-text mb-4">{service.title}</h2>
                  {service.subtitle && (
                    <p className="text-nb-accent font-medium mb-3">{service.subtitle}</p>
                  )}
                  <p className="text-nb-muted leading-relaxed flex-1">{service.summary}</p>
                  <GlowButton
                    className="mt-8"
                    variant="secondary"
                    onClick={() => navigate(servicePath(service))}
                  >
                    Explore Service
                  </GlowButton>
                </GlowCard>
              ))}
            </div>
          ) : (
            <div className="bg-nb-card border border-nb-primary/20 rounded-2xl p-10 text-center">
              <h2 className="font-sora text-2xl mb-4 text-nb-text">New services launching soon</h2>
              <p className="text-nb-muted mb-6">
                We're curating the full offer line-up for this category. Share your goals and we'll build a tailored action plan in the meantime.
              </p>
              <GlowButton onClick={() => navigate(meta.ctaHref)}>Contact our team</GlowButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
