import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const swissButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary Burgundy CTA button - Heritage Luxury
        burgundy: "bg-burgundy text-off-white shadow-luxury hover:bg-burgundy-dark hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-bold",
        
        // Charcoal Black primary button
        swiss: "bg-charcoal-black text-off-white shadow-swiss hover:bg-swiss-navy-light hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
        
        // Alpine Green success button
        success: "bg-alpine-green text-off-white shadow-success hover:bg-alpine-green-light hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
        
        // Premium Burgundy variant (same as burgundy but different styling)
        premium: "bg-gradient-luxury text-off-white shadow-luxury hover:shadow-xl hover:scale-105 active:scale-95 font-bold transition-all duration-300",
        
        // Glass morphism button - now with off-white text
        glass: "bg-off-white/10 backdrop-blur-sm border border-off-white/20 text-off-white hover:bg-off-white/20 hover:border-off-white/30 transition-all duration-300",
        
        // Outlined Heritage button
        outline: "border-2 border-silver-gray text-charcoal-black hover:bg-silver-gray hover:text-charcoal-black transition-all duration-300",
        
        // Silver Gray secondary button
        secondary: "bg-silver-gray text-charcoal-black shadow-soft hover:shadow-md hover:bg-silver-gray-dark transition-all duration-300",
        
        // Ghost button with Heritage colors
        ghost: "text-charcoal-black hover:bg-silver-gray/50 transition-colors duration-200",
        
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