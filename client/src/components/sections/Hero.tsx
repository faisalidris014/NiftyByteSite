import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";
import { Link } from "wouter";
import modifiedBillboardPath from "@assets/ChatGPT Image Aug 10, 2025, 01_28_25 AM_1754807316422.png";
import aiConsultingImage from "@assets/generated_images/AI_IT_consulting_workspace_b0a5c3a5.png";

export default function Hero() {
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
              <h1 className="font-source-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-gray-100" data-testid="hero-title">
                Your IT, 
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">Powered by AI</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Stop relying on outdated tech support. We combine 15+ years of IT expertise with cutting-edge AI to keep you secure, compliant, and ahead of the curve.
              </p>
              <div className="flex lg:justify-start justify-center">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-bold text-xl px-10 py-5 rounded-xl shadow-2xl shadow-fuchsia-500/30 hover:shadow-3xl hover:shadow-fuchsia-500/50 hover:glow transition-all duration-300 transform hover:scale-110 ring-2 ring-white/10 hover:ring-white/20" data-testid="button-book-consultation">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - AI Consulting Image */}
            <div className="lg:flex hidden justify-center items-center">
              <div className="relative">
                <img 
                  src={aiConsultingImage} 
                  alt="AI-Powered IT Consulting Workspace" 
                  className="w-96 h-auto opacity-90 drop-shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-xl"
                />
                {/* Image Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-nb-primary/20 to-nb-accent/20 blur-3xl -z-10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-center text-nb-muted mb-8" data-testid="trust-indicator-text">Trusted by leading companies since 2009</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2 text-nb-muted" data-testid="trust-indicator-soc">
              <i className="fas fa-shield-alt text-2xl"></i>
              <span className="font-semibold">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-nb-muted" data-testid="trust-indicator-iso">
              <i className="fas fa-award text-2xl"></i>
              <span className="font-semibold">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 text-nb-muted" data-testid="trust-indicator-clients">
              <i className="fas fa-users text-2xl"></i>
              <span className="font-semibold">500+ Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-nb-muted" data-testid="trust-indicator-support">
              <i className="fas fa-clock text-2xl"></i>
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
