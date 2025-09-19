import IntakeForm from "@/components/booking/IntakeForm";
import BookingWidget from "@/components/booking/BookingWidget";
import { GradientText } from "@/components/ui/gradient-text";
import { useState } from "react";

export default function ContactPreview() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setFormCompleted(true);
  };

  return (
    <section className="py-20 bg-nb-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-nb-text" data-testid="contact-preview-title">
            Ready to Get <GradientText>Started?</GradientText>
          </h2>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="contact-preview-subtitle">
            Schedule a consultation to discuss your IT challenges and discover how we can help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <IntakeForm onSubmit={handleFormSubmit} />
          <BookingWidget formCompleted={formCompleted} formData={formData} />
        </div>
      </div>
    </section>
  );
}
