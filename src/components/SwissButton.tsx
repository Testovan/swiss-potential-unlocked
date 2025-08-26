import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const swissButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Swiss Navy button
        swiss: "bg-gradient-swiss text-primary-foreground shadow-swiss hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
        
        // Success Green CTA button
        success: "bg-gradient-success text-accent-foreground shadow-success hover:shadow-lg hover:scale-105 active:scale-95 animate-pulse-glow",
        
        // Premium Gold button
        premium: "bg-gradient-premium text-foreground shadow-premium hover:shadow-lg hover:scale-105 active:scale-95 font-bold",
        
        // Glass morphism button
        glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300",
        
        // Outlined Swiss button
        outline: "border-2 border-swiss-navy text-swiss-navy hover:bg-swiss-navy hover:text-white transition-all duration-300",
        
        // Subtle secondary button
        secondary: "bg-secondary text-secondary-foreground shadow-soft hover:shadow-md hover:bg-secondary/80 transition-all duration-300",
        
        // Ghost button
        ghost: "text-swiss-navy hover:bg-swiss-navy/10 transition-colors duration-200",
        
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
      variant: "swiss",
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