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

              {/* KPI Cards under CTA Button */}
              <FadeInUp delay={0.7}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50 text-center"
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
                    className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50 text-center"
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
                    className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50 text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                      CHF {Intl.NumberFormat("de-CH").format(Math.round(useCountUp(67400, 1400)))}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Ø Gehaltsplus
                    </div>
                  </motion.div>
                </div>
              </FadeInUp>
            </StaggerContainer>
          </div>

          {/* Right Side: Spline Animation */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div 
              className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <iframe 
                src="https://my.spline.design/particleshand-2zbKEZ7u9yhhBl2BdP3HJt0Q/" 
                frameBorder="0" 
                width="100%" 
                height="100%"
                loading="lazy"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-full"
                title="Spline 3D Particles Hand Animation"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};