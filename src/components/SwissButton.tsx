import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Clean Minimal Button Variants - Studio Meridian Inspired
const swissButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        burgundy:
          "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
        swiss:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
        success:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
        premium:
          "bg-foreground text-background hover:bg-foreground/90 shadow-sm",
        glass:
          "bg-background/60 text-foreground border border-border backdrop-blur-sm hover:bg-background/80",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground",
        secondary:
          "bg-muted text-muted-foreground hover:bg-muted/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12 px-6 py-3 text-base rounded-lg",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg",
        xl: "h-16 rounded-xl px-10 text-xl font-semibold",
        icon: "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "burgundy",
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