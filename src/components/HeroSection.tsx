import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { SwissButton } from "./SwissButton";
import { FadeInUp, FadeInSide, ScaleIn, StaggerContainer } from "./animations/ScrollAnimations";
import { HoverScale, RippleButton } from "./animations/MicroInteractions";

// Spline Background Animation Component - Background layer with masking
const SplineBackgroundAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Fallback for reduced motion - static gradient background
  if (prefersReducedMotion) {
    return <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-30" />;
  }
  return <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {isVisible && <motion.div initial={{
      opacity: 0,
      scale: 1.02
    }} animate={{
      opacity: window.innerWidth <= 640 ? 0.25 : window.innerWidth <= 1024 ? 0.45 : 0.55,
      scale: 1
    }} transition={{
      duration: 1.2,
      ease: "easeInOut"
    }} className="absolute inset-0">
          <iframe src="https://my.spline.design/flowingribbon-nBkwkrvCCwuptQ1MlGvk5q5J/" frameBorder="0" loading="lazy" allow="autoplay; fullscreen; xr-spatial-tracking" className="absolute inset-0 w-full h-full pointer-events-none" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} title="Spline 3D Flowing Ribbon Animation" />
          
          {/* Semi-transparent overlay for text readability */}
          <div className="absolute inset-0 pointer-events-none z-[0.5]" style={{
        background: 'linear-gradient(to left, rgba(255,255,255,0) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.6) 80%)'
      }} />
        </motion.div>}
    </div>;
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
  delay = 0
}: {
  label: string;
  value: number;
  format?: "int" | "percent" | "chf";
  delay?: number;
}) {
  const v = useCountUp(value, 1400);
  let display = "";
  if (format === "percent") display = `${Math.round(v)}%`;else if (format === "chf") display = `CHF ${Intl.NumberFormat("de-CH").format(Math.round(v))}`;else display = Intl.NumberFormat("de-CH").format(Math.round(v));
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: 0.6 + delay,
    duration: 0.8
  }} className="flex flex-col gap-2">
      <span className="text-xs tracking-widest uppercase text-muted-foreground/80">{label}</span>
      <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">{display}</span>
      <span className="h-px w-12 bg-border/60" />
    </motion.div>;
}
export const HeroSection = () => {
  return <section className="relative overflow-hidden min-h-screen bg-background text-foreground">
      {/* Spline Background Animation - Full Hero Background */}
      <SplineBackgroundAnimation />
      
      {/* Enhanced starfield background with subtle movement */}
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_45%)] opacity-40 z-0" animate={{
      backgroundPosition: ["0% 0%", "100% 100%"]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }} />
      <motion.div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-0" animate={{
      opacity: [0.9, 1, 0.9]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <StaggerContainer>
            <FadeInUp delay={0.2}>
              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-light mb-6" animate={{
              textShadow: ["0 0 0px rgba(239, 68, 68, 0)", "0 0 20px rgba(239, 68, 68, 0.1)", "0 0 0px rgba(239, 68, 68, 0)"]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                Secure the future<br />
                <span className="text-gradient-luxury bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  with SwissPats
                </span>
              </motion.h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <motion.p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Premium-Beratung für die berufliche Integration in der Schweiz – fokussiert auf
                höhere Gehälter, kürzere Time-to-Job und eine sichere Relocation.
              </motion.p>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <HoverScale>
                  <RippleButton>
                    <SwissButton variant="burgundy" size="xl" className="min-w-[280px] shadow-2xl relative z-10 transition-all duration-300" data-cta="primary" onClick={() => {
                    document.getElementById('quick-assessment')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}>
                      Check your Swiss Potential
                    </SwissButton>
                  </RippleButton>
                </HoverScale>
                
                <HoverScale>
                  <SwissButton variant="outline" size="lg" className="min-w-[200px] relative z-10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-cta="secondary" onClick={() => {
                  document.getElementById('calendly-booking')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>
                    Kostenlose Beratung
                  </SwissButton>
                </HoverScale>
              </div>
            </FadeInUp>

            {/* Stats: SwissPats specific numbers */}
            <FadeInUp delay={0.8}>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
                <Stat label="Erfolgsquote" value={94} format="percent" delay={0} />
                <Stat label="Ø Gehaltsplus" value={67400} format="chf" delay={0.2} />
                <Stat label="Begleitete Relocations" value={847} format="int" delay={0.4} />
              </div>
            </FadeInUp>
          </StaggerContainer>
        </div>

        {/* Right: Empty space for background animation visibility with subtle parallax */}
        
      </div>
    </section>;
};