import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

interface BookingWidgetProps {
  formCompleted: boolean;
  formData: any;
}

export default function BookingWidget({ formCompleted, formData }: BookingWidgetProps) {
  if (!formCompleted) {
    return (
      <GlowCard className="p-8" data-testid="booking-widget-pending">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-calendar-alt text-2xl text-white"></i>
          </div>
          <h3 className="font-sora font-bold text-2xl mb-4 text-nb-text">
            Booking Options
          </h3>
          <p className="text-nb-muted mb-6">
            Complete the intake form to see your personalized booking options and pricing.
          </p>
          <div className="text-nb-muted text-sm">
            <i className="fas fa-arrow-left mr-2"></i>
            Fill out the form on the left to continue
          </div>
        </div>
      </GlowCard>
    );
  }

  // Determine booking recommendation based on form data
  const getBookingRecommendation = () => {
    const { companySize, urgency } = formData;
    
    // Large companies or urgent needs get paid consultation recommendation
    if (companySize === 'enterprise' || urgency === 'urgent') {
      return {
        type: 'paid',
        title: 'Priority Consultation',
        description: 'Based on your requirements, we recommend starting with a comprehensive strategy session.',
        price: '$299',
        duration: '90 minutes',
        includes: [
          'Comprehensive IT assessment',
          'Custom strategy roadmap',
          'Priority support',
          'Dedicated project manager',
          'Follow-up action plan'
        ],
        buttonText: 'Book Priority Session',
        note: 'Perfect for complex projects and enterprise needs'
      };
    }

    // Smaller companies get free consultation first
    return {
      type: 'free',
      title: 'Free Discovery Call',
      description: 'Start with a complimentary consultation to discuss your needs and explore solutions.',
      price: 'Free',
      duration: '30 minutes',
      includes: [
        'Initial needs assessment',
        'Technology recommendations',
        'Budget planning guidance',
        'Next steps roadmap'
      ],
      buttonText: 'Schedule Free Call',
      note: 'Great starting point for most businesses'
    };
  };

  const recommendation = getBookingRecommendation();

  return (
    <GlowCard className="p-8" data-testid="booking-widget-active">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-check text-2xl text-white"></i>
        </div>
        <h3 className="font-sora font-bold text-2xl mb-2 text-nb-text">
          Perfect! Here's Your <GradientText>Next Step</GradientText>
        </h3>
        <p className="text-nb-muted text-sm">
          Based on your responses, we've selected the best option for your needs
        </p>
      </div>

      <div className="border border-nb-primary/20 rounded-xl p-6 mb-6" data-testid="booking-recommendation">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-sora font-bold text-lg text-nb-text" data-testid="booking-title">
              {recommendation.title}
            </h4>
            <p className="text-nb-muted text-sm" data-testid="booking-note">
              {recommendation.note}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-nb-primary" data-testid="booking-price">
              {recommendation.price}
            </div>
            <div className="text-nb-muted text-sm" data-testid="booking-duration">
              {recommendation.duration}
            </div>
          </div>
        </div>

        <p className="text-nb-muted mb-4 leading-relaxed" data-testid="booking-description">
          {recommendation.description}
        </p>

        <div className="mb-6">
          <h5 className="font-semibold text-nb-text mb-3">What's Included:</h5>
          <ul className="space-y-2">
            {recommendation.includes.map((item, index) => (
              <li key={index} className="flex items-center text-nb-muted text-sm" data-testid={`booking-include-${index}`}>
                <i className="fas fa-check text-nb-accent mr-2"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <GlowButton size="lg" className="w-full text-lg" data-testid="booking-cta-button">
          <i className="fas fa-calendar-plus mr-2"></i>
          {recommendation.buttonText}
        </GlowButton>
      </div>

      {/* Alternative Option */}
      <div className="border border-nb-muted/20 rounded-xl p-4 bg-nb-surface/50" data-testid="booking-alternative">
        <div className="text-center">
          <h5 className="font-semibold text-nb-text mb-2">
            {recommendation.type === 'paid' ? 'Prefer to start smaller?' : 'Need more comprehensive support?'}
          </h5>
          <p className="text-nb-muted text-sm mb-3">
            {recommendation.type === 'paid' 
              ? 'We also offer free 15-minute quick consultations to get started.'
              : 'For complex projects, consider our comprehensive strategy sessions.'
            }
          </p>
          <GlowButton variant="secondary" size="sm" data-testid="booking-alternative-button">
            {recommendation.type === 'paid' ? 'Book Free Call Instead' : 'Learn About Premium Options'}
          </GlowButton>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-nb-muted text-xs">
          <i className="fas fa-shield-alt mr-1"></i>
          100% satisfaction guarantee • No long-term contracts
        </p>
      </div>
    </GlowCard>
  );
}