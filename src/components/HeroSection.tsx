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
      id="hero-r5s0ej4" 
      className="hero-r5s0ej4-section"
      style={{
        minHeight: '100vh',
        background: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 20px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      }}
    >
      <div 
        className="hero-r5s0ej4-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <div 
          className="hero-r5s0ej4-card"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 25px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1px 400px',
            minHeight: '600px',
            position: 'relative'
          }}
        >
          
          {/* Left Pane - White with Network Graphics */}
          <div 
            className="hero-r5s0ej4-left-pane"
            style={{
              background: '#ffffff',
              padding: '60px 80px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            
            {/* Network SVG Background */}
            <div 
              className="hero-r5s0ej4-network"
              style={{
                position: 'absolute',
                inset: '0',
                opacity: 0.15,
                overflow: 'hidden'
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                style={{ position: 'absolute', inset: 0 }}
              >
                {/* Network nodes */}
                <circle cx="120" cy="150" r="3" fill="#6366f1" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="120" r="2.5" fill="#8b5cf6" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="180" r="3.5" fill="#06b6d4" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="320" cy="280" r="2" fill="#10b981" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="520" cy="320" r="3" fill="#f59e0b" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="380" r="2.5" fill="#ef4444" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
                </circle>
                
                {/* Network connections */}
                <line x1="120" y1="150" x2="280" y2="120" stroke="#6366f1" strokeWidth="1" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="280" y1="120" x2="450" y2="180" stroke="#8b5cf6" strokeWidth="1" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.35;0.15" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="450" y1="180" x2="520" y2="320" stroke="#06b6d4" strokeWidth="1" opacity="0.25">
                  <animate attributeName="opacity" values="0.25;0.45;0.25" dur="2.5s" repeatCount="indefinite" />
                </line>
                <line x1="320" y1="280" x2="180" y2="380" stroke="#10b981" strokeWidth="1" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="120" y1="150" x2="320" y2="280" stroke="#f59e0b" strokeWidth="1" opacity="0.15">
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur="4.5s" repeatCount="indefinite" />
                </line>
                <line x1="450" y1="180" x2="320" y2="280" stroke="#ef4444" strokeWidth="1" opacity="0.18">
                  <animate attributeName="opacity" values="0.18;0.38;0.18" dur="2.8s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>

            {/* Content */}
            <div className="hero-r5s0ej4-content" style={{ position: 'relative', zIndex: 10 }}>
              
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
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    borderRadius: '20px',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  WILLKOMMEN IN DER SCHWEIZ
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="hero-r5s0ej4-heading"
                style={{
                  fontSize: 'clamp(42px, 5.5vw, 72px)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  color: '#0f172a',
                  marginBottom: '24px',
                  maxWidth: '500px'
                }}
              >
                <div style={{ marginBottom: '4px' }}>Relocate.</div>
                <div style={{ marginBottom: '4px' }}>Integrate.</div>
                <div>Succeed.</div>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hero-r5s0ej4-description"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#64748b',
                  maxWidth: '480px',
                  marginBottom: '40px'
                }}
              >
                Professionelle Beratung für Fachkräfte, die erfolgreich in die Schweiz relocaten möchten. 
                Höhere Gehälter, kürzere Time-to-Job und sichere Integration.
              </motion.p>

              {/* Buttons */}
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
                    background: '#0f172a',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1e293b';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0f172a';
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
                    color: '#64748b',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  Kostenlose Beratung
                </button>
              </motion.div>
            </div>

            {/* Stats Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-r5s0ej4-stats-card"
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '80px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.1)',
                borderRadius: '12px',
                padding: '20px 24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div 
                style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '4px'
                }}
              >
                Erfolgreiche Relocations
              </div>
              <div 
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#0f172a',
                  lineHeight: '1'
                }}
              >
                <Stat label="" value={847} format="int" delay={0} />
              </div>
            </motion.div>

          </div>

          {/* Center Divider */}
          <div 
            className="hero-r5s0ej4-divider"
            style={{
              background: 'linear-gradient(to bottom, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent)',
              width: '1px'
            }}
          />

          {/* Right Pane - Light Gray Content */}
          <div 
            className="hero-r5s0ej4-right-pane"
            style={{
              background: '#f8fafc',
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: '20px'
              }}
            >
              WARUM SWISSPATS
            </motion.div>

            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '1.3',
                color: '#0f172a',
                marginBottom: '16px'
              }}
            >
              Für erfolgreiche Fachkräfte
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#64748b',
                marginBottom: '32px'
              }}
            >
              Professionelle Schweiz-Integration mit bewährten Methoden und persönlicher Betreuung.
            </motion.p>

            {/* Feature List */}
            <div className="hero-r5s0ej4-features">
              {[
                {
                  icon: '⚡',
                  title: 'Schnelle Integration',
                  desc: 'Durchschnittlich 3 Monate bis zur erfolgreichen Anstellung in der Schweiz.'
                },
                {
                  icon: '🔒',
                  title: 'Sichere Relocation',
                  desc: 'Rechtliche Beratung und vollständige Unterstützung bei allen Formalitäten.'
                },
                {
                  icon: '🌍',
                  title: 'Schweizweites Netzwerk',
                  desc: 'Zugang zu einem exklusiven Netzwerk von Schweizer Arbeitgebern.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: index === 2 ? '0' : '24px'
                  }}
                >
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#ffffff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      flexShrink: 0,
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#0f172a',
                        marginBottom: '4px',
                        lineHeight: '1.3'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.4',
                        color: '#64748b',
                        margin: '0'
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-r5s0ej4-card {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 1px auto;
          }
          .hero-r5s0ej4-divider {
            background: linear-gradient(to right, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent) !important;
            height: 1px !important;
            width: auto !important;
          }
          .hero-r5s0ej4-left-pane {
            padding: 40px !important;
          }
          .hero-r5s0ej4-right-pane {
            padding: 40px !important;
          }
          .hero-r5s0ej4-stats-card {
            position: static !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: 24px !important;
            display: inline-block !important;
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
          .hero-r5s0ej4-left-pane,
          .hero-r5s0ej4-right-pane {
            padding: 24px !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-r5s0ej4-network svg * {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};