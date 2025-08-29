import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MicroInteractionProps {
  children: ReactNode;
  className?: string;
}

// Hover scale effect for buttons and clickable elements
export const HoverScale = ({ children, className = "" }: MicroInteractionProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Subtle glow effect on hover
export const HoverGlow = ({ children, className = "" }: MicroInteractionProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Lift effect for cards and sections
export const HoverLift = ({ children, className = "" }: MicroInteractionProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic effect for interactive elements
export const MagneticHover = ({ children, className = "" }: MicroInteractionProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        rotateY: 2,
        rotateX: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// Button with ripple effect
export const RippleButton = ({ children, className = "" }: MicroInteractionProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{
          scale: 4,
          opacity: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
      />
    </motion.div>
  );
};