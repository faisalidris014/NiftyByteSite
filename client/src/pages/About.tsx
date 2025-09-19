import { GradientText } from "@/components/ui/gradient-text";
import { GlowCard } from "@/components/ui/glow-card";

export default function About() {
  const leadership = [
    {
      name: "Sarah Johnson",
      title: "CEO & Founder",
      bio: "20+ years in enterprise IT consulting with expertise in digital transformation.",
      image: "SJ"
    },
    {
      name: "Michael Chen", 
      title: "CTO",
      bio: "Former Microsoft architect specializing in cloud infrastructure and cybersecurity.",
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      title: "VP of Operations", 
      bio: "Operations expert with a track record of scaling consulting practices.",
      image: "ER"
    }
  ];

  const values = [
    {
      icon: "fas fa-handshake",
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication and reliable delivery."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    },
    {
      icon: "fas fa-users",
      title: "Client Success",
      description: "Your success is our success. We're invested in your long-term growth."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security Focus",
      description: "Security isn't an afterthought - it's built into everything we do."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20 mt-16">
        <div className="absolute inset-0 bg-nb-bg/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" data-testid="about-hero-title">
            About <GradientText>NiftyByte Technologies</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="about-hero-subtitle">
            Transforming businesses through technology excellence since 2009
          </p>
        </div>
      </section>

      {/* Story Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6 text-gray-900" data-testid="about-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-nb-muted leading-relaxed">
                <p data-testid="about-story-p1">
                  Founded in 2009, NiftyByte Technologies began with a simple mission: to help businesses harness the power of technology to drive growth and innovation. What started as a small consulting firm has grown into a trusted partner for organizations across multiple industries.
                </p>
                <p data-testid="about-story-p2">
                  Over the years, we've helped hundreds of companies navigate digital transformation, strengthen their cybersecurity posture, and optimize their IT infrastructure. Our approach combines deep technical expertise with a genuine understanding of business needs.
                </p>
                <p data-testid="about-story-p3">
                  Today, we're proud to be recognized as a leading IT consulting firm, but our core values remain unchanged: putting our clients first, delivering exceptional results, and staying at the forefront of technology innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-nb-primary/10 to-nb-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-sora font-bold text-gray-800 mb-2">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - White Background */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6 text-gray-900" data-testid="about-leadership-title">
              Leadership Team
            </h2>
            <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="about-leadership-subtitle">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={leader.name} className="text-center bg-gray-50 rounded-2xl p-8" data-testid={`leadership-card-${index}`}>
                <div className="w-24 h-24 bg-gradient-to-br from-nb-primary to-nb-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{leader.image}</span>
                </div>
                <h3 className="font-sora font-bold text-xl mb-2 text-gray-900" data-testid={`leadership-name-${index}`}>{leader.name}</h3>
                <p className="text-nb-primary font-semibold mb-4" data-testid={`leadership-title-${index}`}>{leader.title}</p>
                <p className="text-nb-muted leading-relaxed" data-testid={`leadership-bio-${index}`}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - White Background */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-6 text-gray-900" data-testid="about-values-title">
              Our Values
            </h2>
            <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="about-values-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center" data-testid={`value-card-${index}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-nb-primary to-nb-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-sora font-bold text-lg mb-4 text-gray-900" data-testid={`value-title-${index}`}>{value.title}</h3>
                <p className="text-nb-muted leading-relaxed" data-testid={`value-description-${index}`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - White Background */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl mb-12 text-gray-900" data-testid="about-awards-title">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6" data-testid="award-1">
              <i className="fas fa-trophy text-4xl text-nb-accent mb-4"></i>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Best IT Consulting Firm 2023</h3>
              <p className="text-gray-600">TechCrunch Awards</p>
            </div>
            <div className="p-6" data-testid="award-2">
              <i className="fas fa-medal text-4xl text-nb-primary mb-4"></i>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Innovation Excellence Award</h3>
              <p className="text-gray-600">Digital Transformation Summit</p>
            </div>
            <div className="p-6" data-testid="award-3">
              <i className="fas fa-star text-4xl text-nb-accent mb-4"></i>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Client Satisfaction Leader</h3>
              <p className="text-gray-600">Industry Review Board</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}