import { servicePages, type ServiceCategory, type ServicePageContent } from "@/content/service-pages";

export const serviceCategoryOrder: ServiceCategory[] = [
  "digital-marketing",
  "it-manager-services",
  "programming",
];

export interface ServiceCategoryMeta {
  slug: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const serviceCategoryMeta: Record<ServiceCategory, ServiceCategoryMeta> = {
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing Services",
    tagline: "Attract, nurture, and convert with full-funnel growth marketing.",
    description:
      "From search to social to automation, we build campaigns that increase visibility, capture qualified leads, and keep your brand top-of-mind across every channel.",
    ctaLabel: "Book a Marketing Strategy Call",
    ctaHref: "/contact",
  },
  "it-manager-services": {
    slug: "it-manager-services",
    title: "IT Manager Services",
    tagline: "Stabilize, secure, and scale your IT operations with a dedicated partner.",
    description:
      "Comprehensive managed services, proactive monitoring, and strategic roadmaps that keep your infrastructure running smoothly and your stakeholders informed.",
    ctaLabel: "Schedule an IT Assessment",
    ctaHref: "/contact",
  },
  programming: {
    slug: "programming",
    title: "Programming & Development",
    tagline: "Custom software, web, and app experiences built for impact.",
    description:
      "Design, build, and maintain modern digital products-from high-converting websites to enterprise platforms-tailored to your users and your roadmap.",
    ctaLabel: "Start a Project Scope",
    ctaHref: "/contact",
  },
};

export const servicesByCategory: Record<ServiceCategory, ServicePageContent[]> = serviceCategoryOrder.reduce(
  (acc, category) => {
    acc[category] = servicePages
      .filter((service) => service.category === category)
      .sort((a, b) => a.title.localeCompare(b.title));
    return acc;
  },
  {
    "digital-marketing": [] as ServicePageContent[],
    "it-manager-services": [] as ServicePageContent[],
    programming: [] as ServicePageContent[],
  }
);

export function isServiceCategory(value: string | undefined): value is ServiceCategory {
  return value != null && (serviceCategoryOrder as string[]).includes(value);
}

export function getCategoryServices(category: ServiceCategory): ServicePageContent[] {
  return servicesByCategory[category];
}

export function getService(category: ServiceCategory, slug: string): ServicePageContent | undefined {
  return servicesByCategory[category].find((service) => service.slug === slug);
}

export function servicePath(service: ServicePageContent): string {
  return `/services/${service.category}/${service.slug}`;
}

export function categoryPath(category: ServiceCategory): string {
  return `/services/${category}`;
}
