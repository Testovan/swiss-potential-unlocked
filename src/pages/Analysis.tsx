import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SwissButton } from "@/components/SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Euro, 
  Users, 
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Download,
  Phone
} from "lucide-react";

const Analysis = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const score = parseInt(searchParams.get('score') || '75');
  const successRate = Math.min(95, Math.max(60, (score / 100) * 100));

  const salaryData = {
    currentSalary: 65000,
    swissSalary: 98000,
    difference: 33000,
    percentIncrease: 51
  };

  const recommendations = [
    {
      category: "Visa & Aufenthaltsbewilligung",
      status: "critical",
      items: [
        "B-Bewilligung beantragen (3-6 Monate Vorlauf)",
        "Arbeitsvertrag vor Einreise sichern",
        "Anmeldung bei Gemeinde innerhalb 14 Tagen"
      ]
    },
    {
      category: "Steuern & Finanzen",
      status: "warning",
      items: [
        "Schweizer Bankkonto eröffnen",
        "Steuerklärung in beiden Ländern beachten",
        "3. Säule für Altersvorsorge einrichten"
      ]
    },
    {
      category: "Wohnen & Leben",
      status: "success",
      items: [
        "Wohnungssuche 2-3 Monate vor Umzug starten",
        "Krankenversicherung obligatorisch",
        "Umzugsfirma für grenzüberschreitenden Transport"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <SwissButton 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </SwissButton>
          <div>
            <h1 className="text-3xl font-black text-swiss-navy">
              Deine persönliche Schweiz-Analyse
            </h1>
            <p className="text-muted-foreground">
              Detaillierte Auswertung deines Schweizer Potenzials
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Score Overview */}
            <Card className="p-6 shadow-swiss border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-swiss-navy mb-2">
                    Dein Schweiz-Score
                  </h2>
                  <p className="text-muted-foreground">
                    Basierend auf deinen Antworten
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-success animate-pulse-glow" />
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-black text-swiss-navy">{score}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-success-green/10 text-success-green border-success-green/20">
                    {successRate}% Erfolgsrate
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-success-green/10 to-premium-gold/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-success-green mx-auto mb-2" />
                  <div className="font-bold text-success-green">Sehr gut</div>
                  <div className="text-sm text-muted-foreground">Marktposition</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-premium-gold/10 to-warning-orange/10 rounded-xl">
                  <Users className="w-8 h-8 text-premium-gold mx-auto mb-2" />
                  <div className="font-bold text-premium-gold">Top 16%</div>
                  <div className="text-sm text-muted-foreground">der Teilnehmer</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-warning-orange/10 to-danger-red/10 rounded-xl">
                  <Calendar className="w-8 h-8 text-warning-orange mx-auto mb-2" />
                  <div className="font-bold text-warning-orange">3-6 Monate</div>
                  <div className="text-sm text-muted-foreground">Umsetzung</div>
                </div>
              </div>
            </Card>

            {/* Salary Analysis */}
            <Card className="p-6 shadow-swiss border-0 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-swiss-navy mb-4 flex items-center gap-2">
                <Euro className="w-5 h-5 text-success-green" />
                Gehaltsanalyse
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Aktuelles Gehalt (Deutschland)</div>
                  <div className="text-2xl font-bold text-foreground">
                    €{salaryData.currentSalary.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">pro Jahr (brutto)</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Erwartetes Gehalt (Schweiz)</div>
                  <div className="text-2xl font-bold text-success-green">
                    CHF {salaryData.swissSalary.toLocaleString()}
                  </div>
                  <div className="text-sm text-success-green">
                    +{salaryData.percentIncrease}% mehr (+CHF {salaryData.difference.toLocaleString()})
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-success-green/10 to-premium-gold/10 rounded-xl border border-success-green/20">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    Zusätzliches Jahreseinkommen:
                  </span>
                  <span className="text-xl font-black text-success-green">
                    CHF {salaryData.difference.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Basierend auf vergleichbaren Positionen in der Schweiz
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6 shadow-swiss border-0 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-swiss-navy mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success-green" />
                Deine nächsten Schritte
              </h3>

              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border border-muted rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      {rec.status === 'critical' && <AlertTriangle className="w-5 h-5 text-danger-red" />}
                      {rec.status === 'warning' && <AlertTriangle className="w-5 h-5 text-warning-orange" />}
                      {rec.status === 'success' && <CheckCircle className="w-5 h-5 text-success-green" />}
                      <h4 className="font-semibold text-foreground">{rec.category}</h4>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${rec.status === 'critical' ? 'bg-danger-red/10 text-danger-red border-danger-red/20' : ''}
                          ${rec.status === 'warning' ? 'bg-warning-orange/10 text-warning-orange border-warning-orange/20' : ''}
                          ${rec.status === 'success' ? 'bg-success-green/10 text-success-green border-success-green/20' : ''}
                        `}
                      >
                        {rec.status === 'critical' ? 'Kritisch' : rec.status === 'warning' ? 'Wichtig' : 'Empfehlung'}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {rec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="p-6 shadow-swiss border-0 bg-gradient-to-br from-swiss-navy to-success-green text-white">
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-premium-gold" />
                <h3 className="text-xl font-bold mb-2">Kostenlose Beratung</h3>
                <p className="text-sm opacity-90 mb-4">
                  Lass uns gemeinsam deinen Schweiz-Plan erstellen
                </p>
                <div className="space-y-3">
                  <SwissButton variant="premium" className="w-full" size="lg">
                    <Phone className="w-4 h-4" />
                    Termin buchen
                  </SwissButton>
                  <SwissButton variant="outline" className="w-full border-white text-white hover:bg-white hover:text-swiss-navy">
                    <Download className="w-4 h-4" />
                    PDF herunterladen
                  </SwissButton>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 shadow-swiss border-0 bg-white/80 backdrop-blur-sm">
              <h4 className="font-bold text-swiss-navy mb-4">Schnelle Fakten</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Erfolgsrate:</span>
                  <span className="font-semibold text-success-green">{successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Zeitrahmen:</span>
                  <span className="font-semibold">3-6 Monate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Potenzial:</span>
                  <span className="font-semibold text-premium-gold">Sehr hoch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Investition:</span>
                  <span className="font-semibold">CHF 2,500-5,000</span>
                </div>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 shadow-swiss border-0 bg-white/80 backdrop-blur-sm">
              <h4 className="font-bold text-swiss-navy mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-success-green" />
                  <span>+41 44 123 45 67</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-success-green" />
                  <span>Zürich, Schweiz</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Analysis;