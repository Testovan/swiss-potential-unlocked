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
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Dark background with network pattern */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="network"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
              >
                <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                <line x1="10" y1="10" x2="30" y2="10" stroke="white" strokeWidth="0.5" opacity="0.2" />
                <line x1="10" y1="10" x2="10" y2="30" stroke="white" strokeWidth="0.5" opacity="0.2" />
                <line x1="10" y1="10" x2="30" y2="30" stroke="white" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left: Hero Content */}
          <div className="lg:col-span-8 text-white">
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 rounded-full text-xs uppercase tracking-wider bg-white/10 text-white/80 border border-white/20">
                WILLKOMMEN IN DER SCHWEIZ
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <div className="mb-2">Relocate.</div>
                <div className="mb-2">Integrate.</div>
                <div className="text-white/90">Succeed.</div>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg lg:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
            >
              Professionelle Beratung für Fachkräfte, die erfolgreich in die Schweiz relocaten möchten. 
              Höhere Gehälter, kürzere Time-to-Job und sichere Integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {
                  document.getElementById('assessment-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
              >
                Jetzt Starten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('calendly-booking')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Kostenlose Beratung
              </button>
            </motion.div>
          </div>

          {/* Right: Stats Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="text-center">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-4">
                  Erfolgreiche Relocations
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <Stat label="" value={847} format="int" delay={0} />
                </div>
                <div className="text-white/80 text-sm">
                  Zufriedene Kunden seit 2019
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};