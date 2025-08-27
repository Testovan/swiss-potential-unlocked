import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { SwissButton } from "./SwissButton";

// Spline Background Animation Component - Background layer with masking
const SplineBackgroundAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback for reduced motion - static gradient background
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-30" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <iframe 
            src="https://my.spline.design/particleshand-H6LznNnSRGdQTySQe2C5AHLe/" 
            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
            style={{
              opacity: window.innerWidth <= 640 ? 0.35 : window.innerWidth <= 1024 ? 0.5 : 0.6,
              filter: window.innerWidth <= 640 
                ? 'blur(12px) saturate(1.05) brightness(1.05)' 
                : 'blur(8px) saturate(1.05) brightness(1.05)',
              maskImage: window.innerWidth >= 1024 
                ? 'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 65%)'
                : undefined,
              WebkitMaskImage: window.innerWidth >= 1024 
                ? 'linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 65%)'
                : undefined
            }}
            loading="lazy"
            title="Spline 3D Background Animation"
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-l 
                         from-transparent via-background/30 to-background/85
                         lg:from-transparent lg:via-background/55 lg:to-background/85
                         pointer-events-none z-[1]" />
        </motion.div>
      ) : null}
    </div>
  );
};

// Count-up hook for animating numbers
function useCountUp(target: number, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

// Stat component with count-up animation
function Stat({
  label,
  value,
  format = "int",
  delay = 0,
}: {
  label: string;
  value: number;
  format?: "int" | "percent" | "chf";
  delay?: number;
}) {
  const v = useCountUp(value, 1400);
  let display = "";
  if (format === "percent") display = `${Math.round(v)}%`;
  else if (format === "chf") display = `CHF ${Intl.NumberFormat("de-CH").format(Math.round(v))}`;
  else display = Intl.NumberFormat("de-CH").format(Math.round(v));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + delay, duration: 0.8 }}
      className="flex flex-col gap-2"
    >
      <span className="text-xs tracking-widest uppercase text-muted-foreground/80">{label}</span>
      <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">{display}</span>
      <span className="h-px w-12 bg-border/60" />
    </motion.div>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background text-foreground">
      {/* Spline Background Animation - Full Hero Background */}
      <SplineBackgroundAnimation />
      
      {/* Starfield background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_45%)] opacity-40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-0" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="relative order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-light mb-6"
          >
            Secure the future<br />
            <span className="text-gradient-luxury bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              with SwissPats
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Premium-Beratung für die berufliche Integration in der Schweiz – fokussiert auf
            höhere Gehälter, kürzere Time-to-Job und eine sichere Relocation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <SwissButton 
              variant="burgundy" 
              size="xl"
              className="min-w-[280px] shadow-2xl relative z-10"
              data-cta="primary"
            >
              Check your Swiss Potential
            </SwissButton>
            
            <SwissButton 
              variant="outline" 
              size="lg"
              className="min-w-[200px] relative z-10"
              data-cta="secondary"
            >
              Kostenlose Beratung
            </SwissButton>
          </motion.div>

          {/* Stats: SwissPats specific numbers */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <Stat label="Erfolgsquote" value={94} format="percent" delay={0} />
            <Stat label="Ø Gehaltsplus" value={67400} format="chf" delay={0.2} />
            <Stat label="Begleitete Relocations" value={847} format="int" delay={0.4} />
          </div>
        </div>

        {/* Right: Empty space for background animation visibility */}
        <div className="relative order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]" />
      </div>
    </section>
  );
};