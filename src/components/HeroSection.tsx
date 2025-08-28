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
    <section 
      id="hero" 
      className="hero-r5s0ej4-section" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        overflow: 'hidden',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
    >
      {/* Network Pattern Background */}
      <div 
        className="hero-r5s0ej4-network-bg"
        style={{
          position: 'absolute',
          inset: '0',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%)
          `,
          opacity: 0.4
        }}
      />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="hero-r5s0ej4-dots"
        style={{
          position: 'absolute',
          inset: '0',
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.2
        }}
      />
      
      <div 
        className="hero-r5s0ej4-container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <div 
          className="hero-r5s0ej4-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            width: '100%'
          }}
        >
          
          {/* Main Content */}
          <div className="hero-r5s0ej4-content">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '32px' }}
            >
              <span 
                className="hero-r5s0ej4-badge"
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '500',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                WILLKOMMEN IN DER SCHWEIZ
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ marginBottom: '24px' }}
            >
              <h1 
                className="hero-r5s0ej4-heading"
                style={{
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  color: '#ffffff',
                  margin: '0'
                }}
              >
                <div style={{ marginBottom: '8px' }}>Relocate.</div>
                <div style={{ marginBottom: '8px' }}>Integrate.</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Succeed.</div>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-r5s0ej4-description"
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '480px',
                marginBottom: '40px',
                margin: '0 0 40px 0'
              }}
            >
              Professionelle Beratung für Fachkräfte, die erfolgreich in die Schweiz relocaten möchten. 
              Höhere Gehälter, kürzere Time-to-Job und sichere Integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-r5s0ej4-buttons"
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <button
                onClick={() => {
                  document.getElementById('assessment-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="hero-r5s0ej4-btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: '#ffffff',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Jetzt Starten
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('calendly-booking')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="hero-r5s0ej4-btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Kostenlose Beratung
              </button>
            </motion.div>
          </div>

          {/* Stats Card - Positioned absolutely on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-r5s0ej4-stats-card"
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              minWidth: '200px'
            }}
          >
            <div 
              style={{
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '12px'
              }}
            >
              Erfolgreiche Relocations
            </div>
            <div 
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px',
                lineHeight: '1'
              }}
            >
              <Stat label="" value={847} format="int" delay={0} />
            </div>
            <div 
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.4'
              }}
            >
              Zufriedene Kunden seit 2019
            </div>
          </motion.div>

        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-r5s0ej4-stats-card {
            position: static !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 48px;
          }
          .hero-r5s0ej4-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 640px) {
          .hero-r5s0ej4-buttons {
            flex-direction: column !important;
          }
          .hero-r5s0ej4-btn-primary,
          .hero-r5s0ej4-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-r5s0ej4-container {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
};