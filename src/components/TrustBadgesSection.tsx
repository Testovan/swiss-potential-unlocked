import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Award, 
  Users, 
  CheckCircle2,
  Star,
  FileCheck,
  Globe,
  Handshake,
  TrendingUp
} from "lucide-react";

const trustBadges = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% DSGVO Konform", 
    description: "Alle Daten werden verschlüsselt und DSGVO-konform verarbeitet",
    color: "alpine-green"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "SSL Verschlüsselung",
    description: "Höchste Sicherheitsstandards für deine persönlichen Daten", 
    color: "alpine-green"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Zertifizierte Berater",
    description: "Unsere Experten sind zertifizierte Karriere- und Relocation-Berater",
    color: "burgundy"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Geprüfte Referenzen", 
    description: "Alle Erfolgsgeschichten sind verifiziert und dokumentiert",
    color: "burgundy"
  }
];

const partnerLogos = [
  { name: "SRF Schweizer Radio und Fernsehen", logo: "/placeholder.svg", url: "#" },
  { name: "Swiss Business Association", logo: "/placeholder.svg", url: "#" },
  { name: "Xing", logo: "/placeholder.svg", url: "#" },
  { name: "LinkedIn", logo: "/placeholder.svg", url: "#" },
  { name: "Trustpilot", logo: "/placeholder.svg", url: "#" },
  { name: "Swiss Career Forum", logo: "/placeholder.svg", url: "#" }
];

const certifications = [
  {
    title: "ISO 27001 Zertifiziert",
    description: "Internationaler Standard für Informationssicherheit",
    badge: "ISO 27001"
  },
  {
    title: "Karriereberatung Zertifikat",
    description: "Zertifizierte Ausbildung in professioneller Karriereberatung", 
    badge: "Certified"
  },
  {
    title: "Swiss Quality Standards",
    description: "Erfüllt alle Schweizer Qualitätsstandards für Beratungsdienstleistungen",
    badge: "Swiss Quality"
  }
];

const guarantees = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
    text: "100% Geld-zurück-Garantie bei Nicht-Erfolg"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
    text: "Kostenlose Nachbetreuung für 12 Monate"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
    text: "Transparente Preisgestaltung ohne versteckte Kosten"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
    text: "Persönlicher Ansprechpartner während des gesamten Prozesses"
  }
];

export const TrustBadgesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-silver-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-alpine-green/10 text-alpine-green border-alpine-green/20">
            <Shield className="w-4 h-4 mr-2" />
            Sicherheit & Vertrauen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal-black mb-6">
            Deine Sicherheit ist
            <span className="text-alpine-green"> unsere Priorität</span>
          </h2>
          <p className="text-xl text-charcoal-black/70 max-w-3xl mx-auto">
            Höchste Standards bei Datenschutz, Sicherheit und Beratungsqualität
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <Card 
              key={index} 
              className={`p-6 text-center border-2 hover:shadow-soft transition-all duration-300 ${
                badge.color === 'alpine-green' 
                  ? 'border-alpine-green/20 bg-alpine-green/5 hover:border-alpine-green/40' 
                  : 'border-burgundy/20 bg-burgundy/5 hover:border-burgundy/40'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                badge.color === 'alpine-green' ? 'bg-alpine-green/20 text-alpine-green' : 'bg-burgundy/20 text-burgundy'
              }`}>
                {badge.icon}
              </div>
              <h3 className="font-bold text-charcoal-black mb-2">{badge.title}</h3>
              <p className="text-sm text-charcoal-black/70">{badge.description}</p>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-charcoal-black text-center mb-8">
            Zertifizierungen & Qualifikationen
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-burgundy/5 to-alpine-green/5 border border-silver-gray">
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="bg-burgundy/20 text-burgundy border-burgundy/30 shrink-0">
                    {cert.badge}
                  </Badge>
                  <div>
                    <h4 className="font-bold text-charcoal-black mb-2">{cert.title}</h4>
                    <p className="text-sm text-charcoal-black/70">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-charcoal-black text-center mb-8">
            Vertrauen von führenden Unternehmen & Medien
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="flex items-center justify-center p-4 bg-off-white rounded-lg border border-silver-gray hover:shadow-soft transition-all duration-300 grayscale hover:grayscale-0"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-charcoal-black text-center mb-8">
            Unsere Garantien für dich
          </h3>
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-alpine-green/10 to-burgundy/10 border border-alpine-green/20">
            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3">
                  {guarantee.icon}
                  <span className="text-charcoal-black font-medium">{guarantee.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-alpine-green/10 rounded-lg">
            <div className="text-2xl font-black text-alpine-green mb-1">847+</div>
            <div className="text-sm text-charcoal-black/70">Zufriedene Kunden</div>
          </div>
          <div className="text-center p-4 bg-burgundy/10 rounded-lg">
            <div className="text-2xl font-black text-burgundy mb-1">4.8★</div>
            <div className="text-sm text-charcoal-black/70">Trustpilot Bewertung</div>
          </div>
          <div className="text-center p-4 bg-alpine-green/10 rounded-lg">
            <div className="text-2xl font-black text-alpine-green mb-1">95%</div>
            <div className="text-sm text-charcoal-black/70">Erfolgsquote</div>
          </div>
          <div className="text-center p-4 bg-burgundy/10 rounded-lg">
            <div className="text-2xl font-black text-burgundy mb-1">6 Jahre</div>
            <div className="text-sm text-charcoal-black/70">Marktexpertise</div>
          </div>
        </div>

        {/* Privacy Notice */}
        <Card className="p-6 bg-charcoal-black text-off-white text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-alpine-green" />
            <Badge variant="secondary" className="bg-alpine-green/20 text-alpine-green border-alpine-green/30">
              Datenschutz-Hinweis
            </Badge>
          </div>
          <p className="text-sm text-off-white/80 max-w-2xl mx-auto">
            Deine Daten werden zu 100% DSGVO-konform verarbeitet. Wir geben keine persönlichen Informationen 
            an Dritte weiter und du kannst jederzeit die Löschung deiner Daten verlangen. 
            <a href="#" className="text-alpine-green hover:text-alpine-green-light ml-1">
              Mehr erfahren →
            </a>
          </p>
        </Card>
      </div>
    </section>
  );
};