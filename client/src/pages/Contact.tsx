import IntakeForm from "@/components/booking/IntakeForm";
import BookingWidget from "@/components/booking/BookingWidget";
import { GradientText } from "@/components/ui/gradient-text";
import { useState } from "react";

export default function Contact() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setFormCompleted(true);
  };

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-nb-text" data-testid="contact-page-title">
            Ready to Get <GradientText>Started?</GradientText>
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="contact-page-subtitle">
            Schedule a consultation to discuss your IT challenges and discover how we can help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <IntakeForm onSubmit={handleFormSubmit} />
          <BookingWidget formCompleted={formCompleted} formData={formData} />
        </div>
      </div>
    </div>
  );
}