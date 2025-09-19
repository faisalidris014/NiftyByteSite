import { GradientText } from "@/components/ui/gradient-text";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "ASSESS",
      description: "We thoroughly analyze your current IT infrastructure, identify pain points, and understand your business objectives."
    },
    {
      number: "2", 
      title: "STABILIZE",
      description: "We implement immediate fixes and establish a stable foundation for future growth and optimization."
    },
    {
      number: "3",
      title: "OPTIMIZE", 
      description: "We continuously improve and optimize your systems for peak performance and long-term success."
    }
  ];

  return (
    <section className="py-20 bg-nb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6" data-testid="process-title">
            How We <GradientText>Work</GradientText>
          </h2>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="process-subtitle">
            Our proven methodology ensures successful project delivery every time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center relative" data-testid={`process-step-${index}`}>
              <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse" style={{animationDelay: `${index * 0.5}s`}}>
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="font-sora font-bold text-xl mb-4" data-testid={`process-step-title-${index}`}>{step.title}</h3>
              <p className="text-nb-muted leading-relaxed" data-testid={`process-step-description-${index}`}>
                {step.description}
              </p>
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-nb-primary to-nb-accent transform translate-x-10 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
