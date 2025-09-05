import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwissButton } from "./SwissButton";
import { FadeInUp, StaggerContainer } from "./animations/ScrollAnimations";
import { HoverScale } from "./animations/MicroInteractions";

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

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-background text-foreground" style={{position: 'relative', overflow: 'hidden'}}>
      {/* Spline Background */}
      <div 
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '50vw',
          height: '100%',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        <iframe 
          src="https://my.spline.design/particleshand-2zbKEZ7u9yhhBl2BdP3HJt0Q/" 
          frameBorder="0"
          style={{
            width: '100%',
            height: '100%',
            border: 0
          }}
        />
      </div>

      {/* Gradient overlay for blending */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0))',
          zIndex: 0,
          top: 0,
          right: '50vw',
          bottom: 0,
          left: 0
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24 min-h-screen" style={{zIndex: 1}}>
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
                <div className="pt-4">
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

                  {/* KPI Cards under CTA Button */}
                  <div 
                    className="flex gap-6 mt-4 items-stretch"
                    style={{
                      display: 'flex',
                      gap: '24px',
                      marginTop: '16px',
                      alignItems: 'stretch'
                    }}
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 text-center"
                      style={{
                        flex: 1,
                        padding: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                      }}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        {Math.round(useCountUp(94, 1400))}%
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Erfolgsquote
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 text-center"
                      style={{
                        flex: 1,
                        padding: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                      }}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        {Intl.NumberFormat("de-CH").format(Math.round(useCountUp(847, 1400)))}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Relocations
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                      className="flex-1 text-center"
                      style={{
                        flex: 1,
                        padding: '16px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                      }}
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                        CHF {Intl.NumberFormat("de-CH").format(Math.round(useCountUp(67400, 1400)))}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Ø Gehaltsplus
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeInUp>
            </StaggerContainer>
          </div>

          {/* Right Side: Empty space for background animation */}
          <div className="relative">
            {/* This space is intentionally left for the background Spline animation */}
          </div>
        </div>
      </div>
    </section>
  );
};