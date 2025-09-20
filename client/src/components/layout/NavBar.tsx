import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { LucideIcon } from "lucide-react";
import type { ServiceCategory } from "@/content/service-pages";
import {
  Menu,
  ChevronDown,
  Megaphone,
  ServerCog,
  Code2,
} from "lucide-react";
import logoIconPath from "@assets/1754808044144_1754808063522.png";
import niftybyteTextPath from "@assets/NIFTYBYTE_text (1)_1756663209425.png";
import {
  categoryPath,
  serviceCategoryMeta,
  serviceCategoryOrder,
  servicePath,
  servicesByCategory,
} from "@/lib/services";

const serviceIcons: Record<ServiceCategory, LucideIcon> = {
  "digital-marketing": Megaphone,
  "it-manager-services": ServerCog,
  programming: Code2,
};

export default function NavBar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const renderIcon = (IconComponent: LucideIcon) => {
    return <IconComponent size={24} />;
  };

  const serviceCategories = serviceCategoryOrder.map((slug) => {
    const meta = serviceCategoryMeta[slug];
    const highlights = servicesByCategory[slug].slice(0, 3);
    return {
      slug,
      meta,
      highlights,
      icon: serviceIcons[slug],
    };
  });

  const industries = [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Financial", href: "/industries/financial" },
    { name: "Education", href: "/industries/education" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Retail", href: "/industries/retail" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nb-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="nav-logo">
            <img 
              src={logoIconPath} 
              alt="NiftyByte Technologies" 
              className="h-16 w-16"
            />
            <img 
              src={niftybyteTextPath}
              alt="NIFTYBYTE"
              className="h-6 brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${location === '/' ? 'text-nb-accent' : 'text-nb-text hover:text-nb-accent'}`}
              data-testid="nav-home"
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-nb-text hover:text-nb-accent transition-colors flex items-center" data-testid="nav-services">
                Services <ChevronDown className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div
                  className="bg-nb-card border border-nb-primary/20 w-full p-6 rounded-2xl shadow-floating"
                  style={{ maxWidth: "min(900px, calc(100vw - 2rem))" }}
                >
                  <div className="overflow-x-auto overscroll-x-contain pb-1">
                    <div className="grid md:grid-cols-3 gap-4 min-w-[900px]">
                      {serviceCategories.map((category) => (
                        <div
                          key={category.slug}
                          className="group/item p-4 rounded border border-white/5 hover:border-white/10 hover:bg-nb-primary/3 hover:shadow-soft transition-all duration-200 flex flex-col"
                        >
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="mt-1 text-nb-accent group-hover/item:text-pink-300 group-hover/item:scale-110 transition-all duration-200 [&>svg]:drop-shadow-[0_0_6px_rgba(255,79,216,0.4)]">
                              {renderIcon(category.icon)}
                            </div>
                            <div className="flex-1">
                              <Link
                                href={categoryPath(category.slug)}
                                className="font-semibold text-nb-text hover:text-nb-accent transition-colors mb-1 block"
                                data-testid={`nav-service-${category.slug}`}
                              >
                                {category.meta.title}
                              </Link>
                              <p className="text-sm text-nb-muted leading-relaxed">
                                {category.meta.tagline}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-sm text-nb-muted mb-4 flex-1">
                            {category.highlights.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={servicePath(service)}
                                  className="flex items-center text-nb-text hover:text-nb-accent transition-colors"
                                >
                                  <span className="mr-2 text-nb-accent">&gt;</span>
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={categoryPath(category.slug)}
                            className="inline-flex items-center text-nb-accent hover:text-nb-primary transition-colors text-sm font-medium"
                          >
                            Explore {category.meta.title}
                            <span className="ml-1">&gt;</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-nb-accent hover:text-nb-primary transition-colors font-medium"
                    >
                      View All Services
                      <span className="ml-1">&gt;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-nb-text hover:text-nb-accent transition-colors flex items-center" data-testid="nav-industries">
                Industries <ChevronDown className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-nb-card border border-nb-primary/20 rounded shadow-soft min-w-[200px] py-2">
                  {industries.map((industry) => (
                    <Link 
                      key={industry.href} 
                      href={industry.href} 
                      className="block px-4 py-2 text-nb-text hover:text-nb-accent hover:bg-nb-primary/5 transition-colors" 
                      data-testid={`nav-industry-${industry.name.toLowerCase()}`}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className={`transition-colors ${location === '/about' ? 'text-nb-accent' : 'text-nb-text hover:text-nb-accent'}`}
              data-testid="nav-about"
            >
              About
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors ${location === '/resources' ? 'text-nb-accent' : 'text-nb-text hover:text-nb-accent'}`}
              data-testid="nav-resources"
            >
              Resources
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${location === '/blog' ? 'text-nb-accent' : 'text-nb-text hover:text-nb-accent'}`}
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link href="/contact" data-testid="nav-contact">
              <Button className="glow-button px-6 py-2 text-sm">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-nb-text" data-testid="nav-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-nb-card border-nb-primary/20">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="text-nb-text hover:text-nb-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <div className="space-y-3">
                  <span className="text-nb-muted text-sm font-medium">Services</span>
                  {serviceCategories.map((category) => (
                    <div key={category.slug} className="space-y-1">
                      <Link
                        href={categoryPath(category.slug)}
                        className="block pl-4 text-nb-text hover:text-nb-accent transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.meta.title}
                      </Link>
                      {category.highlights.length > 0 && (
                        <div className="pl-6 border-l border-white/10 space-y-1">
                          {category.highlights.map((service) => (
                            <Link
                              key={service.slug}
                              href={servicePath(service)}
                              className="block text-sm text-nb-muted hover:text-nb-accent transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <span className="text-nb-muted text-sm font-medium">Industries</span>
                  {industries.map((industry) => (
                    <Link 
                      key={industry.href}
                      href={industry.href} 
                      className="block pl-4 text-nb-text hover:text-nb-accent transition-colors" 
                      onClick={() => setIsOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-nb-text hover:text-nb-accent transition-colors" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/resources" className="text-nb-text hover:text-nb-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
                <Link href="/blog" className="text-nb-text hover:text-nb-accent transition-colors" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="glow-button w-full">
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
