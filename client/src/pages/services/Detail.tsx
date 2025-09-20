import { useMemo } from "react";
import { Link, useLocation } from "wouter";
import NotFound from "@/pages/not-found";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";
import {
  categoryPath,
  getService,
  isServiceCategory,
  serviceCategoryMeta,
} from "@/lib/services";

interface ServiceDetailPageProps {
  category: string;
  slug: string;
}

export default function ServiceDetailPage({ category, slug }: ServiceDetailPageProps) {
  if (!isServiceCategory(category)) {
    return <NotFound />;
  }

  const service = getService(category, slug);

  if (!service) {
    return <NotFound />;
  }

  const meta = serviceCategoryMeta[category];
  const [, navigate] = useLocation();
  const titleWords = service.title.split(" ").filter(Boolean);
  const focusWord = titleWords.length > 1 ? titleWords.pop() : undefined;
  const leadTitle = titleWords.join(" ");
  const cleanedContent = useMemo(() => {
    const trimmed = service.content.trim();
    if (!trimmed) {
      return "";
    }
    return trimmed.replace(/<p><br><\/p>/gi, "");
  }, [service.content]);
  const hasContent = cleanedContent.length > 0;

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-10">
            <Link
              href={categoryPath(category)}
              className="inline-flex items-center text-sm text-nb-muted hover:text-nb-accent transition-colors"
            >
              <span className="mr-2">&lt;</span> Back to {meta.title}
            </Link>
            <p className="uppercase tracking-wide text-xs font-semibold text-nb-accent/80">
              {meta.title}
            </p>
            <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl">
              {leadTitle}
              {focusWord ? (
                <>
                  {leadTitle ? " " : ""}
                  <GradientText>{focusWord}</GradientText>
                </>
              ) : (
                <GradientText>{service.title}</GradientText>
              )}
            </h1>
            {service.subtitle && (
              <p className="text-xl text-nb-muted max-w-3xl">{service.subtitle}</p>
            )}
            <p className="text-lg text-nb-muted max-w-3xl">{service.summary}</p>
            <GlowButton className="mt-4 max-w-xs" onClick={() => navigate(meta.ctaHref)}>
              Talk to Our Team
            </GlowButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasContent ? (
            <article className="prose prose-invert max-w-none prose-headings:text-nb-text prose-strong:text-nb-text">
              <div dangerouslySetInnerHTML={{ __html: cleanedContent }} />
            </article>
          ) : (
            <div className="bg-nb-card border border-nb-primary/20 rounded-2xl p-10 text-center">
              <h2 className="font-sora text-2xl mb-4 text-nb-text">Details Coming Soon</h2>
              <p className="text-nb-muted mb-6">
                We're finalizing the deep-dive for this service. Reach out and we'll share the latest playbooks, examples, and next steps for your organisation.
              </p>
              <GlowButton onClick={() => navigate("/contact")}>Contact Us</GlowButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
