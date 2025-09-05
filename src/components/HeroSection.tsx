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

// Modern KPI Card component for the right side
function KPICard({
  label,
  value,
  format = "int",
  delay = 0,
  position = "center"
}: {
  label: string;
  value: number;
  format?: "int" | "percent" | "chf";
  delay?: number;
  position?: "top" | "center" | "bottom";
}) {
  const v = useCountUp(value, 1400);
  let display = "";
  if (format === "percent") display = `${Math.round(v)}%`;
  else if (format === "chf") display = `CHF ${Intl.NumberFormat("de-CH").format(Math.round(v))}`;
  else display = Intl.NumberFormat("de-CH").format(Math.round(v));

  const positionClass = {
    top: "self-start",
    center: "self-center", 
    bottom: "self-end"
  }[position];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.6, ease: "easeOut" }}
      className={`bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border/50 ${positionClass} max-w-[200px]`}
    >
      <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
        {display}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
}

// Abstract globe/visual element for the right side
const VisualElement = () => (
  <motion.div 
    className="relative w-80 h-80 mx-auto"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
  >
    {/* Main circle */}
    <motion.div 
      className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
      animate={{ 
        rotate: [0, 360],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    
    {/* Inner elements */}
    <motion.div 
      className="absolute inset-16 rounded-full bg-gradient-to-tr from-secondary/30 to-secondary/10 border border-secondary/40"
      animate={{ 
        rotate: [360, 0],
        opacity: [0.6, 1, 0.6]
      }}
      transition={{ 
        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    />
    
    {/* Dot pattern */}
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transformOrigin: '0 0'
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
          }}
          initial={{
            transform: `rotate(${i * 30}deg) translate(120px, -4px)`
          }}
        />
      ))}
    </div>
  </motion.div>
);
export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background text-foreground">
      {/* Subtle background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Side: Content */}
          <div className="space-y-8">
            <StaggerContainer>
              <FadeInUp delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Die Zukunft der beruflichen
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    Integration ist da.
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Verkürzen Sie Ihre Time-to-Job auf unter 3 Monate, steigern Sie Ihr Gehalt 
                  und sichern Sie sich einen erfolgreichen Karrierestart in der Schweiz.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <HoverScale>
                    <SwissButton 
                      variant="burgundy" 
                      size="lg" 
                      className="px-8 py-4 text-lg font-semibold shadow-lg"
                      onClick={() => {
                        document.getElementById('quick-assessment')?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      Jetzt starten
                    </SwissButton>
                  </HoverScale>
                </div>
              </FadeInUp>
            </StaggerContainer>
          </div>

          {/* Right Side: Visual Element with KPI Cards */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Central Visual Element */}
              <VisualElement />
              
              {/* KPI Cards positioned around the visual element */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {/* Top Card */}
                <div className="flex justify-end -translate-y-4 translate-x-8">
                  <KPICard 
                    label="Erfolgsquote" 
                    value={94} 
                    format="percent" 
                    delay={0} 
                    position="top"
                  />
                </div>
                
                {/* Middle Card - Left */}
                <div className="flex justify-start -translate-x-8">
                  <KPICard 
                    label="Relocations" 
                    value={847} 
                    format="int" 
                    delay={0.2} 
                    position="center"
                  />
                </div>
                
                {/* Bottom Card */}
                <div className="flex justify-center translate-y-4 translate-x-4">
                  <KPICard 
                    label="Ø Gehaltsplus" 
                    value={67400} 
                    format="chf" 
                    delay={0.4} 
                    position="bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};