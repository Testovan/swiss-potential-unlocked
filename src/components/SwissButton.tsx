import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const swissButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Blue CTA button - Clean Modern
        primary: "bg-primary-blue text-clean-white shadow-primary hover:bg-primary-blue-dark hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-bold",
        
        // Success Green button
        success: "bg-success-green text-clean-white shadow-success hover:bg-success-green-light hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
        
        // Premium Purple variant
        premium: "bg-gradient-premium text-clean-white shadow-premium hover:shadow-lg hover:scale-105 active:scale-95 font-bold transition-all duration-300",
        
        // Clean outline button
        outline: "border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-clean-white transition-all duration-300",
        
        // Light secondary button
        secondary: "bg-neutral-gray text-primary-navy shadow-soft hover:shadow-clean hover:bg-neutral-gray-dark transition-all duration-300",
        
        // Ghost button with clean colors
        ghost: "text-primary-navy hover:bg-neutral-gray/50 transition-colors duration-200",
        
        // Destructive button
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg transition-all duration-300",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base font-bold",
        xl: "h-16 px-10 py-5 text-lg font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface SwissButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof swissButtonVariants> {
  asChild?: boolean;
}

const SwissButton = React.forwardRef<HTMLButtonElement, SwissButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(swissButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
SwissButton.displayName = "SwissButton";

export { SwissButton, swissButtonVariants };