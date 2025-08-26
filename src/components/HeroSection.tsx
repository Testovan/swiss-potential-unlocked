import { SwissButton } from "./SwissButton";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Users, Award } from "lucide-react";
import { SplineBackground } from "./SplineBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Spline Background */}
      <SplineBackground />
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-black/40 via-charcoal-black/60 to-charcoal-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--alpine-green)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--burgundy)/0.05),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        {/* SRF Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge 
            variant="secondary" 
            className="bg-off-white/10 backdrop-blur-sm border border-off-white/20 text-off-white px-6 py-2 text-sm font-medium shadow-soft"
          >
            <Award className="w-4 h-4 mr-2 text-burgundy" />
            SRF – Schweizer Fernsehen dokumentierte unseren Erfolg
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white mb-6 leading-tight">
            <span className="block text-3xl md:text-4xl font-semibold text-alpine-green mb-2">
              847 Deutsche haben bereits
            </span>
            <span className="text-gradient-luxury bg-gradient-to-r from-burgundy to-burgundy-dark bg-clip-text text-transparent">
              CHF 67'400
            </span>
            <span className="block">mehr verdient</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-off-white/90 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Professionelle Schweiz-Beratung für deutsche Fachkräfte. 
            Vom ersten Gespräch bis zum ersten Gehalt in der Schweiz.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex justify-center items-center gap-8 mb-12 animate-scale-in">
          <div className="flex items-center gap-2 text-off-white/80">
            <Users className="w-5 h-5 text-alpine-green" />
            <span className="text-sm font-medium">847+ Erfolgreiche Kunden</span>
          </div>
          <div className="flex items-center gap-2 text-off-white/80">
            <TrendingUp className="w-5 h-5 text-alpine-green" />
            <span className="text-sm font-medium">Ø CHF 67'400 Mehr-Verdienst</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-fade-in">
          <SwissButton 
            variant="burgundy" 
            size="xl"
            className="min-w-[280px] shadow-2xl"
            data-cta="primary"
          >
            <TrendingUp className="w-5 h-5" />
            Check your Swiss Potential Now
          </SwissButton>
          
          <SwissButton 
            variant="glass" 
            size="lg"
            className="min-w-[200px]"
            data-cta="secondary"
          >
            <Play className="w-5 h-5" />
            SRF Beitrag ansehen
          </SwissButton>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-luxury rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-off-white/5 backdrop-blur-sm border border-off-white/10 rounded-xl overflow-hidden shadow-2xl group-hover:shadow-luxury transition-all duration-500 transform group-hover:scale-[1.02]">
              <div className="aspect-video bg-gradient-to-br from-charcoal-black to-swiss-navy-dark flex items-center justify-center">
                <div className="text-center text-off-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-alpine-green drop-shadow-lg" />
                  <p className="text-lg font-semibold mb-2">SRF Beitrag</p>
                  <p className="text-sm text-off-white/70">Wie SwissPats Deutschen beim Umzug hilft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};