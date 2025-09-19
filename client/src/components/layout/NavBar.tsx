import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  ChevronDown, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Settings, 
  BarChart3 
} from "lucide-react";
import logoIconPath from "@assets/1754808044144_1754808063522.png";
import niftybyteTextPath from "@assets/NIFTYBYTE_text (1)_1756663209425.png";

export default function NavBar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const renderIcon = (IconComponent: any) => {
    return <IconComponent size={24} />;
  };

  const services = [
    { 
      name: "AI-Powered IT Strategy", 
      href: "/services/strategy",
      description: "Strategic IT planning with AI insights to optimize your technology roadmap and business outcomes.",
      icon: Brain
    },
    { 
      name: "Digital Transformation", 
      href: "/services/digital-transformation",
      description: "End-to-end digital transformation leveraging AI to modernize your business processes.",
      icon: Rocket
    },
    { 
      name: "Cybersecurity & Compliance", 
      href: "/services/cybersecurity",
      description: "AI-enhanced security solutions to protect your business from evolving cyber threats.",
      icon: Shield
    },
    { 
      name: "Cloud Migration & Optimization", 
      href: "/services/cloud",
      description: "Smart cloud solutions with AI-driven cost optimization and performance monitoring.",
      icon: Cloud
    },
    { 
      name: "Managed IT Services", 
      href: "/services/managed-it",
      description: "24/7 proactive IT support powered by AI monitoring and predictive maintenance.",
      icon: Settings
    },
    { 
      name: "Data Analytics & AI", 
      href: "/services/data-analytics",
      description: "Transform your data into actionable insights with advanced AI and machine learning.",
      icon: BarChart3
    },
  ];

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
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-nb-card border border-nb-primary/20 w-[800px] p-6 rounded shadow-floating">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Link 
                        key={service.href} 
                        href={service.href} 
                        className="group/item block p-4 rounded border border-white/5 hover:border-white/10 hover:bg-nb-primary/3 hover:shadow-soft transition-all duration-200" 
                        data-testid={`nav-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 text-nb-accent group-hover/item:text-pink-300 group-hover/item:scale-110 transition-all duration-200 [&>svg]:drop-shadow-[0_0_6px_rgba(255,79,216,0.4)]">
                            {renderIcon(service.icon)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-nb-text group-hover/item:text-nb-accent transition-colors mb-1">
                              {service.name}
                            </h3>
                            <p className="text-sm text-nb-muted group-hover/item:text-nb-text transition-colors leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-nb-accent hover:text-nb-primary transition-colors font-medium"
                    >
                      View All Services →
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
                <div className="space-y-2">
                  <span className="text-nb-muted text-sm font-medium">Services</span>
                  {services.map((service) => (
                    <Link 
                      key={service.href}
                      href={service.href} 
                      className="block pl-4 text-nb-text hover:text-nb-accent transition-colors" 
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
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
