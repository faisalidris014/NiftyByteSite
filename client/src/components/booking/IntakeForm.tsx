import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

interface IntakeFormProps {
  onSubmit: (data: any) => void;
}

export default function IntakeForm({ onSubmit }: IntakeFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    currentItSetup: [] as string[],
    urgency: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleItSetupToggle = (setup: string) => {
    setFormData(prev => ({
      ...prev,
      currentItSetup: prev.currentItSetup.includes(setup)
        ? prev.currentItSetup.filter(s => s !== setup)
        : [...prev.currentItSetup, setup]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = insertContactInquirySchema.parse(formData);
      onSubmit(validatedData);
      toast({
        title: "Form submitted successfully",
        description: "You can now see the booking options",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const itSetupOptions = ["In-house", "Outsourced MSP", "Mixed", "None"];

  return (
    <div className="bg-nb-card rounded-2xl border border-white/10 p-8 shadow-soft">
      <h3 className="font-sora font-bold text-2xl mb-6 text-nb-text" data-testid="intake-form-title">Tell Us About Your Project</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-nb-text">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="mt-2 border-white/20 focus:ring-nb-accent focus:border-nb-accent bg-nb-bg text-nb-text placeholder:text-nb-muted"
              required
              data-testid="input-name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-nb-text">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="mt-2 border-white/20 focus:ring-nb-accent focus:border-nb-accent bg-nb-bg text-nb-text placeholder:text-nb-muted"
              required
              data-testid="input-email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="company" className="text-nb-text">Company Name *</Label>
          <Input
            id="company"
            type="text"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="mt-2 border-white/20 focus:ring-nb-accent focus:border-nb-accent bg-nb-bg text-nb-text placeholder:text-nb-muted"
            required
            data-testid="input-company"
          />
        </div>

        <div>
          <Label className="text-nb-text">Company Size</Label>
          <Select value={formData.companySize} onValueChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}>
            <SelectTrigger className="mt-2 border-white/20 focus:ring-nb-accent bg-nb-bg text-nb-text" data-testid="select-company-size">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="200+">200+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-nb-text">Current IT Setup</Label>
          <div className="flex flex-wrap gap-2 mt-2 bg-nb-bg p-3 rounded-lg border border-white/20">
            {itSetupOptions.map((setup) => (
              <button
                key={setup}
                type="button"
                onClick={() => handleItSetupToggle(setup)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  formData.currentItSetup.includes(setup)
                    ? 'bg-gradient-to-r from-nb-accent to-nb-primary text-white'
                    : 'bg-nb-card border border-white/10 text-nb-text hover:bg-gradient-to-r hover:from-nb-accent hover:to-nb-primary hover:text-white'
                }`}
                data-testid={`chip-it-setup-${setup.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {setup}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-nb-text">Urgency</Label>
          <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
            <SelectTrigger className="mt-2 border-white/20 focus:ring-nb-accent bg-nb-bg text-nb-text" data-testid="select-urgency">
              <SelectValue placeholder="How soon do you need help?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="3-months">3+ Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full glow-button"
          data-testid="button-submit-intake"
        >
          {isSubmitting ? "Submitting..." : "Continue to Booking"}
        </Button>
      </form>
    </div>
  );
}
