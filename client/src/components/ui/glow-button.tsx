import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface GlowButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "primary" | "secondary";
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "glow-button shadow-soft hover:shadow-depth transition-all duration-200",
          variant === "secondary" && "border border-white/80 text-white hover:bg-white hover:text-nb-bg bg-transparent hover:shadow-floating",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
