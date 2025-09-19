import { Link } from "wouter";
import logoPath from "@assets/Nifty Byte Inverted Color_1754788468624.png";

export default function Footer() {
  return (
    <footer className="bg-nb-card border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={logoPath} 
                alt="NiftyByte Technologies" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-nb-muted mb-4 leading-relaxed">
              Expert IT consulting services helping businesses transform and grow through technology since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nb-muted hover:text-nb-accent transition-colors" data-testid="footer-linkedin">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-nb-muted hover:text-nb-accent transition-colors" data-testid="footer-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-nb-muted hover:text-nb-accent transition-colors" data-testid="footer-github">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4 text-nb-text">Services</h3>
            <ul className="space-y-2 text-nb-muted">
              <li><Link href="/services/strategy" className="hover:text-nb-accent transition-colors" data-testid="footer-service-strategy">IT Strategy</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-nb-accent transition-colors" data-testid="footer-service-digital">Digital Transformation</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-nb-accent transition-colors" data-testid="footer-service-cyber">Cybersecurity</Link></li>
              <li><Link href="/services/cloud" className="hover:text-nb-accent transition-colors" data-testid="footer-service-cloud">Cloud Services</Link></li>
              <li><Link href="/services/managed-it" className="hover:text-nb-accent transition-colors" data-testid="footer-service-managed">Managed IT</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4 text-nb-text">Industries</h3>
            <ul className="space-y-2 text-nb-muted">
              <li><Link href="/industries/healthcare" className="hover:text-nb-accent transition-colors" data-testid="footer-industry-healthcare">Healthcare</Link></li>
              <li><Link href="/industries/financial" className="hover:text-nb-accent transition-colors" data-testid="footer-industry-financial">Financial</Link></li>
              <li><Link href="/industries/education" className="hover:text-nb-accent transition-colors" data-testid="footer-industry-education">Education</Link></li>
              <li><Link href="/industries/manufacturing" className="hover:text-nb-accent transition-colors" data-testid="footer-industry-manufacturing">Manufacturing</Link></li>
              <li><Link href="/industries/retail" className="hover:text-nb-accent transition-colors" data-testid="footer-industry-retail">Retail</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sora font-semibold text-lg mb-4 text-nb-text">Company</h3>
            <ul className="space-y-2 text-nb-muted">
              <li><Link href="/about" className="hover:text-nb-accent transition-colors" data-testid="footer-about">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-nb-accent transition-colors" data-testid="footer-resources">Resources</Link></li>
              <li><Link href="/blog" className="hover:text-nb-accent transition-colors" data-testid="footer-blog">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-nb-accent transition-colors" data-testid="footer-contact">Contact</Link></li>
              <li><a href="/careers" className="hover:text-nb-accent transition-colors" data-testid="footer-careers">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nb-muted text-sm">
            © 2024 NiftyByte Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-nb-muted hover:text-nb-accent text-sm transition-colors" data-testid="footer-privacy">Privacy Policy</a>
            <a href="/terms" className="text-nb-muted hover:text-nb-accent text-sm transition-colors" data-testid="footer-terms">Terms of Service</a>
            <a href="/security" className="text-nb-muted hover:text-nb-accent text-sm transition-colors" data-testid="footer-security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
