import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
}

export const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (!mediaQuery.matches) {
      // Generate Swiss-inspired minimalistic orbs
      const generateOrbs = () => {
        const newOrbs: Orb[] = [];
        const colors = [
          'rgba(239, 68, 68, 0.1)', // Swiss red
          'rgba(156, 163, 175, 0.08)', // Neutral gray
          'rgba(255, 255, 255, 0.06)', // White
          'rgba(34, 197, 94, 0.05)', // Success green
          'rgba(251, 191, 36, 0.04)', // Premium gold
        ];

        for (let i = 0; i < 8; i++) {
          newOrbs.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 120 + 40,
            delay: Math.random() * 2,
            duration: Math.random() * 20 + 15,
            opacity: Math.random() * 0.3 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
        setOrbs(newOrbs);
      };

      generateOrbs();
    }
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
            opacity: orb.opacity,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};