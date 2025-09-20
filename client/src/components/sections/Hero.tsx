import { useCallback, useEffect, useRef, useState } from "react";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Link } from "wouter";
import modifiedBillboardPath from "@assets/ChatGPT Image Aug 10, 2025, 01_28_25 AM_1754807316422.png";
import aiConsultingImage from "@assets/generated_images/AI_IT_consulting_workspace_b0a5c3a5.png";
import alexKnightImage from "@assets/hero-slider/alex-knight-2EJCSULRwC8-unsplash.jpg";
import blakeWiszImage from "@assets/hero-slider/blake-wisz-q3o_8MteFM0-unsplash.jpg";
import carlosMuzaImage from "@assets/hero-slider/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import christinaWocintechChatImage from "@assets/hero-slider/christina-wocintechchat-com-6Dv3pe-JnSg-unsplash.jpeg";
import christinaWocintechChatConferenceImage from "@assets/hero-slider/christina-wocintechchat-com-CRL3A8Lc5dQ-unsplash.jpeg";
import microsoftWorkspaceImage from "@assets/hero-slider/microsoft-365-bWL-c09Ys80-unsplash.jpg";
import strategyWorkshopImage from "@assets/hero-slider/photo-1558494949-ef010cbdcc31.jpeg";
import reddFranciscoImage from "@assets/hero-slider/redd-francisco-5U_28ojjgms-unsplash.jpg";
import solenFeyissaImage from "@assets/hero-slider/solen-feyissa-hWSNT_Pp4x4-unsplash.jpeg";
import stoneArchDentalLogo from "@assets/stone-arch-dental-logo.svg";
import twinCareDentalLogo from "@assets/twin-care-dental-logo.svg";

const heroImageSlides = [
  {
    src: aiConsultingImage,
    alt: "AI-powered IT consulting workspace with holographic dashboard",
  },
  {
    src: alexKnightImage,
    alt: "Engineer collaborating with an AI interface",
  },
  {
    src: blakeWiszImage,
    alt: "Modern office building exterior at dusk",
  },
  {
    src: carlosMuzaImage,
    alt: "Business strategy meeting with analytics dashboard",
  },
  {
    src: christinaWocintechChatImage,
    alt: "IT consultant presenting with digital whiteboard",
  },
  {
    src: christinaWocintechChatConferenceImage,
    alt: "Team leads discussing project roadmap",
  },
  {
    src: microsoftWorkspaceImage,
    alt: "Modern collaborative workspace with Microsoft 365 tools",
  },
  {
    src: strategyWorkshopImage,
    alt: "Creative strategy workshop with sticky notes",
  },
  {
    src: reddFranciscoImage,
    alt: "IT professional reviewing cloud infrastructure",
  },
  {
    src: solenFeyissaImage,
    alt: "AI-powered data visualization on screen",
  },
];

const AUTO_SLIDE_INTERVAL = 6500;

export default function Hero() {
  const headlinePart1 = "Your IT,";
  const headlinePart2 = "Powered by AI";
  const letterDelay = 80;
  const initialDelay = 150;
  const part1RevealDuration = 600;
  const part2Duration = headlinePart2.length * letterDelay;

  const [showPart1, setShowPart1] = useState(false);
  const [showPart2, setShowPart2] = useState(false);
  const [showSupporting, setShowSupporting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = heroImageSlides.length;
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const preloaded = heroImageSlides.map((slide) => {
      const image = new Image();
      image.src = slide.src;
      return image;
    });

    return () => {
      preloaded.forEach((image) => {
        image.onload = null;
      });
    };
  }, []);

  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    timers.push(setTimeout(() => setShowPart1(true), initialDelay));
    timers.push(
      setTimeout(
        () => setShowPart2(true),
        initialDelay + part1RevealDuration + 150
      )
    );
    timers.push(
      setTimeout(
        () => setShowSupporting(true),
        initialDelay + part1RevealDuration + part2Duration + 400
      )
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [initialDelay, part1RevealDuration, part2Duration]);

  const clearAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  }, []);

  const scheduleAutoSlide = useCallback(() => {
    if (totalSlides <= 1) {
      clearAutoSlide();
      return;
    }

    clearAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTO_SLIDE_INTERVAL);
  }, [clearAutoSlide, totalSlides]);

  useEffect(() => {
    scheduleAutoSlide();

    return () => {
      clearAutoSlide();
    };
  }, [scheduleAutoSlide, clearAutoSlide]);

  const goToPrevious = () => {
    if (totalSlides <= 1) {
      return;
    }

    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    scheduleAutoSlide();
  };

  const goToNext = () => {
    if (totalSlides <= 1) {
      return;
    }

    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    scheduleAutoSlide();
  };

  const goToSlide = (index: number) => {
    if (totalSlides <= 1 || index === currentSlide) {
      return;
    }

    setCurrentSlide(index);
    scheduleAutoSlide();
  };

  const trustIndicators = [
    {
      key: "soc-2",
      node: (
        <div
          className="flex items-center gap-2 text-nb-muted shrink-0"
          data-testid="trust-indicator-soc"
        >
          <i className="fas fa-shield-alt text-2xl" aria-hidden="true"></i>
          <span className="font-semibold">SOC 2 Compliant</span>
        </div>
      ),
    },
    {
      key: "iso-27001",
      node: (
        <div
          className="flex items-center gap-2 text-nb-muted shrink-0"
          data-testid="trust-indicator-iso"
        >
          <i className="fas fa-award text-2xl" aria-hidden="true"></i>
          <span className="font-semibold">ISO 27001</span>
        </div>
      ),
    },
    {
      key: "clients",
      node: (
        <div
          className="flex items-center gap-2 text-nb-muted shrink-0"
          data-testid="trust-indicator-clients"
        >
          <i className="fas fa-users text-2xl" aria-hidden="true"></i>
          <span className="font-semibold">500+ Clients</span>
        </div>
      ),
    },
    {
      key: "support",
      node: (
        <div
          className="flex items-center gap-2 text-nb-muted shrink-0"
          data-testid="trust-indicator-support"
        >
          <i className="fas fa-clock text-2xl" aria-hidden="true"></i>
          <span className="font-semibold">24/7 Support</span>
        </div>
      ),
    },
    {
      key: "stone-arch-dental",
      node: (
        <div
          className="flex items-center justify-center shrink-0"
          data-testid="trust-indicator-stone-arch"
        >
          <img
            src={stoneArchDentalLogo}
            alt="Stone Arch Dental logo"
            className="h-14 w-auto drop-shadow-sm"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      key: "twin-care-dental",
      node: (
        <div
          className="flex items-center justify-center shrink-0"
          data-testid="trust-indicator-twin-care"
        >
          <img
            src={twinCareDentalLogo}
            alt="TwinCare Dental logo"
            className="h-14 w-auto drop-shadow-sm"
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  const renderAnimatedCharacters = (
    text: string,
    isVisible: boolean,
    keyPrefix: string,
    extraClass = ""
  ) =>
    text.split("").map((char, index) => {
      const baseClasses =
        "inline-block transition-all duration-300 ease-out will-change-transform";
      const combinedClasses = extraClass
        ? `${baseClasses} ${extraClass}`
        : baseClasses;

      return (
        <span
          key={`${keyPrefix}-${index}`}
          className={`${combinedClasses} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ transitionDelay: `${index * letterDelay}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });

  return (
    <section className="relative bg-nb-bg bg-noise overflow-hidden pt-48 pb-24">
      {/* Background Billboard Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={modifiedBillboardPath} 
          alt="NiftyByte Technologies Billboard Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-nb-primary/20 via-nb-bg/40 to-nb-accent/20"></div>

      <div className="relative z-20 max-w-[95vw] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle radial gradient background behind the unified card */}
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/5 to-transparent blur-3xl -z-10"></div>
        
        {/* Unified Glass Container for Both Sides */}
        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 px-16 md:px-20 lg:px-32 py-16 md:py-20 lg:py-24 mx-2 lg:mx-0 transform hover:translate-y-[-2px] hover:shadow-3xl hover:shadow-black/30 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - CTA Content */}
            <div className="lg:text-left text-center">
              <h1
                className="font-source-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-gray-100"
                data-testid="hero-title"
              >
                <span className="sr-only">Your IT, Powered by AI</span>
                <span
                  aria-hidden
                  className={`inline-block transition-all duration-500 ease-out will-change-transform ${
                    showPart1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                  }`}
                >
                  {headlinePart1}
                </span>
                <span aria-hidden className="block mt-2">
                  <span className="inline-flex">
                    {renderAnimatedCharacters(
                      headlinePart2,
                      showPart2,
                      "hero-p2",
                      "bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent"
                    )}
                  </span>
                </span>
              </h1>
              <p
                className={`text-lg sm:text-xl text-white/90 mb-8 leading-relaxed transition-all duration-500 ease-out ${
                  showSupporting ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                }`}
                style={{ transitionDelay: "150ms" }}
                data-testid="hero-subtitle"
              >
                Stop relying on outdated tech support. We combine 15+ years of IT expertise with cutting-edge AI to keep you secure, compliant, and ahead of the curve.
              </p>
              <div className="flex lg:justify-start justify-center">
                <Link href="/contact">
                  <button
                    className={`bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-bold text-xl px-10 py-5 rounded-xl shadow-2xl shadow-fuchsia-500/30 hover:shadow-3xl hover:shadow-fuchsia-500/50 hover:glow transition-all duration-300 transform hover:scale-110 ring-2 ring-white/10 hover:ring-white/20 ${
                      showSupporting
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-6"
                    }`}
                    style={{ transitionDelay: "280ms" }}
                    data-testid="button-book-consultation"
                  >
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - AI Consulting Image Slider */}
            <div className="lg:flex hidden justify-center items-center">
              <div
                className={`relative w-96 transition-all duration-500 transform-gpu ${
                  showSupporting
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
                style={{
                  transitionDelay: "280ms",
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-black/30">
                  <div
                    className="flex w-full will-change-transform"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: "transform 640ms cubic-bezier(0.45, 0, 0.55, 1)",
                    }}
                  >
                    {heroImageSlides.map((slide, index) => (
                      <div key={slide.src} className="w-full shrink-0">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-auto opacity-90 drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Image Glow Effect */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20 blur-3xl -z-10 rounded-xl"></div>
                </div>

                {totalSlides > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous slide"
                      onClick={goToPrevious}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-2 text-white hover:bg-white/20 transition"
                    >
                      <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      aria-label="Next slide"
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-2 text-white hover:bg-white/20 transition"
                    >
                      <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <div className="mt-4 flex w-full justify-center gap-2">
                      {heroImageSlides.map((slide, index) => (
                        <button
                          key={slide.src}
                          type="button"
                          aria-label={`Show slide ${index + 1}`}
                          onClick={() => goToSlide(index)}
                          className={`h-2 w-8 rounded-full transition ${
                            currentSlide === index
                              ? "bg-white/80"
                              : "bg-white/30 hover:bg-white/50"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-nb-muted mb-8" data-testid="trust-indicator-text">Trusted by leading companies since 2009</p>
          <div className="relative mx-auto max-w-5xl overflow-hidden opacity-80" data-testid="trust-indicator-slider">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-nb-bg via-nb-bg/70 to-transparent" aria-hidden="true"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-nb-bg via-nb-bg/70 to-transparent" aria-hidden="true"></div>
            <div className="flex items-center gap-12 trust-indicator-marquee" role="list">
              {trustIndicators.concat(trustIndicators).map((indicator, index) => (
                <div key={`${indicator.key}-${index}`} className="min-w-max" role="listitem">
                  {indicator.node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
