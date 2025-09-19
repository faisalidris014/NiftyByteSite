import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPreview from "@/components/sections/ContactPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <IndustriesPreview />
      <ProcessSection />
      <TestimonialsSection />
      <ContactPreview />
      <FinalCTA />
    </div>
  );
}