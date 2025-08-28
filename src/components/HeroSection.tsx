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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ 
            opacity: window.innerWidth <= 640 ? 0.25 : window.innerWidth <= 1024 ? 0.45 : 0.55,
            scale: 1 
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <iframe 
            src="https://my.spline.design/sphereofparticles-mltCekHouAIpWsT2xbRqfBRo/"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: window.innerWidth <= 640 
                ? 'blur(14px) saturate(1.02) brightness(1.02)' 
                : 'blur(10px) saturate(1.05) brightness(1.05)',
              clipPath: window.innerWidth >= 1024 ? 'inset(0 0 0 50%)' : undefined,
            }}
            title="Spline 3D Background Animation"
          />
          
          {/* Gradient overlay for text readability */}
          <div 
            className="absolute inset-0 pointer-events-none z-[0.5]"
            style={{
              background: 'linear-gradient(to left, rgba(28,28,28,0) 40%, rgba(28,28,28,0.45) 62%, rgba(28,28,28,0.85) 78%)'
            }}
          />
        </motion.div>
      )}
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
    <section className="relative min-h-screen bg-background">
      {/* Clean minimal background - no heavy animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-muted/40" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Bold Typography - Studio Meridian Style */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="studio-heading text-8xl sm:text-9xl lg:text-[12rem] leading-none text-foreground mb-8"
            >
              SwissPats
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="studio-subheading text-2xl lg:text-3xl text-foreground max-w-2xl">
                Premium-Beratung für die berufliche Integration in der Schweiz
              </h2>

              <p className="studio-body text-lg text-muted-foreground max-w-xl">
                Fokussiert auf höhere Gehälter, kürzere Time-to-Job und eine sichere Relocation.
              </p>

              {/* CTA Buttons - Clean Style */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <SwissButton 
                  variant="burgundy" 
                  size="xl"
                  className="min-w-[280px] rounded-xl"
                  data-cta="primary"
                  onClick={() => {
                    document.getElementById('quick-assessment')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Check your Swiss Potential
                </SwissButton>
                
                <SwissButton 
                  variant="outline" 
                  size="lg"
                  className="min-w-[200px] rounded-xl"
                  data-cta="secondary"
                  onClick={() => {
                    document.getElementById('calendly-booking')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Kostenlose Beratung
                </SwissButton>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats Cards - Clean Minimal Style */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 gap-6"
            >
              {/* Location Card */}
              <div className="studio-stat-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Standort</div>
                <div className="text-lg font-semibold text-foreground">Zürich, Schweiz</div>
                <div className="text-sm text-muted-foreground">Global tätig</div>
              </div>

              {/* Success Rate */}
              <div className="studio-stat-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Erfolgsquote</div>
                <div className="text-3xl font-bold text-accent">
                  <Stat label="" value={94} format="percent" delay={0} />
                </div>
              </div>

              {/* Salary Increase */}
              <div className="studio-stat-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Ø Gehaltsplus</div>
                <div className="text-2xl font-bold text-foreground">
                  <Stat label="" value={67400} format="chf" delay={0.2} />
                </div>
              </div>

              {/* Experience */}
              <div className="studio-stat-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Relocations</div>
                <div className="text-2xl font-bold text-foreground">
                  <Stat label="" value={847} format="int" delay={0.4} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};