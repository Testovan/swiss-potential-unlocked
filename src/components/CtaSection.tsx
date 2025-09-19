import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Bereit für deinen sicheren Schweiz-Wechsel?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Vertraue auf unsere Expertise und starte deine Schweiz-Karriere mit absoluter Sicherheit.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-[#7B0F13] text-white hover:bg-[#7B0F13]/90 px-8 py-4 text-lg font-semibold rounded-lg w-64 h-14"
            >
              Sichere Beratung starten
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-white border-2 border-black text-black hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg w-64 h-14"
            >
              Jetzt Kontakt aufnehmen
            </Button>
          </div>
          
          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              100% DSGVO-konform
            </span>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              SSL-verschlüsselt
            </span>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Zertifizierte Beratung
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;