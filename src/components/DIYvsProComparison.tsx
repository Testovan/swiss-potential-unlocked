import { useState } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  X, 
  Check, 
  Calculator, 
  Clock, 
  TrendingDown, 
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Euro,
  Timer,
  Target
} from "lucide-react";

const comparisonData = [
  {
    category: "Erfolgsrate",
    diy: { value: "15-25%", status: "poor", icon: <TrendingDown className="w-5 h-5" /> },
    professional: { value: "85-95%", status: "excellent", icon: <TrendingUp className="w-5 h-5" /> }
  },
  {
    category: "Zeitaufwand", 
    diy: { value: "6-18 Monate", status: "poor", icon: <Clock className="w-5 h-5" /> },
    professional: { value: "2-4 Monate", status: "excellent", icon: <Timer className="w-5 h-5" /> }
  },
  {
    category: "Gehaltsverhandlung",
    diy: { value: "Oft unter Wert", status: "poor", icon: <TrendingDown className="w-5 h-5" /> },
    professional: { value: "Optimiert", status: "excellent", icon: <TrendingUp className="w-5 h-5" /> }
  },
  {
    category: "Bürokratie & Visa",
    diy: { value: "Oft Fehler", status: "poor", icon: <X className="w-5 h-5" /> },
    professional: { value: "Professionell", status: "excellent", icon: <Check className="w-5 h-5" /> }
  },
  {
    category: "Networking",
    diy: { value: "Begrenzt", status: "poor", icon: <X className="w-5 h-5" /> },
    professional: { value: "Insider-Kontakte", status: "excellent", icon: <CheckCircle2 className="w-5 h-5" /> }
  },
  {
    category: "Stresslevel",
    diy: { value: "Hoch", status: "poor", icon: <AlertTriangle className="w-5 h-5" /> },
    professional: { value: "Entspannt", status: "excellent", icon: <CheckCircle2 className="w-5 h-5" /> }
  }
];

export const DIYvsProComparison = () => {
  const [currentSalary, setCurrentSalary] = useState([60000]);
  const [targetSalary, setTargetSalary] = useState([85000]);
  const [timeToMove, setTimeToMove] = useState([6]);

  // Berechnungen
  const yearlyIncrease = targetSalary[0] - currentSalary[0];
  const monthlyIncrease = yearlyIncrease / 12;
  const lostIncomeDelay = monthlyIncrease * (timeToMove[0] - 3); // 3 Monate Unterschied zwischen Pro und DIY
  const professionalServiceCost = 2500; // Beispielkosten
  const netBenefit = lostIncomeDelay - professionalServiceCost;

  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-silver-gray/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-burgundy/10 text-burgundy border-burgundy/20">
            <Calculator className="w-4 h-4 mr-2" />
            Kosten-Nutzen Analyse
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal-black mb-6">
            Alleine oder mit 
            <span className="text-alpine-green"> Experten-Hilfe?</span>
          </h2>
          <p className="text-xl text-charcoal-black/70 max-w-3xl mx-auto mb-8">
            Die meisten unterschätzen die Kosten des "Do-It-Yourself" Ansatzes
          </p>
        </div>

        {/* Interactive Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-br from-alpine-green/5 to-burgundy/5 border border-alpine-green/20 shadow-success">
            <h3 className="text-2xl font-bold text-charcoal-black mb-6 text-center">
              <Calculator className="w-6 h-6 inline mr-2 text-alpine-green" />
              Dein persönlicher Kosten-Kalkulator
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Current Salary */}
              <div>
                <label className="block text-sm font-medium text-charcoal-black mb-3">
                  Aktuelles Gehalt (€/Jahr)
                </label>
                <div className="mb-3">
                  <Slider
                    value={currentSalary}
                    onValueChange={setCurrentSalary}
                    max={150000}
                    min={30000}
                    step={5000}
                    className="w-full"
                  />
                </div>
                <div className="text-center p-3 bg-off-white rounded-lg border">
                  <span className="text-xl font-bold text-charcoal-black">
                    €{currentSalary[0].toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Target Salary */}
              <div>
                <label className="block text-sm font-medium text-charcoal-black mb-3">
                  Ziel-Gehalt Schweiz (€/Jahr)
                </label>
                <div className="mb-3">
                  <Slider
                    value={targetSalary}
                    onValueChange={setTargetSalary}
                    max={200000}
                    min={40000}
                    step={5000}
                    className="w-full"
                  />
                </div>
                <div className="text-center p-3 bg-alpine-green/10 rounded-lg border border-alpine-green/30">
                  <span className="text-xl font-bold text-alpine-green">
                    €{targetSalary[0].toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Time to Move */}
              <div>
                <label className="block text-sm font-medium text-charcoal-black mb-3">
                  Zeit bis zum Wechsel (Monate, DIY)
                </label>
                <div className="mb-3">
                  <Slider
                    value={timeToMove}
                    onValueChange={setTimeToMove}
                    max={24}
                    min={2}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="text-center p-3 bg-burgundy/10 rounded-lg border border-burgundy/30">
                  <span className="text-xl font-bold text-burgundy">
                    {timeToMove[0]} Monate
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-4 p-6 bg-off-white rounded-xl border-2 border-alpine-green/20">
              <div className="text-center">
                <div className="text-2xl font-black text-alpine-green mb-1">
                  +€{monthlyIncrease.toLocaleString()}
                </div>
                <div className="text-sm text-charcoal-black/70">Monatliches Plus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-burgundy mb-1">
                  -€{Math.abs(lostIncomeDelay).toLocaleString()}
                </div>
                <div className="text-sm text-charcoal-black/70">Verlust durch Verzögerung</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-black mb-1 ${netBenefit > 0 ? 'text-alpine-green' : 'text-burgundy'}`}>
                  {netBenefit > 0 ? '+' : ''}€{netBenefit.toLocaleString()}
                </div>
                <div className="text-sm text-charcoal-black/70">Netto-Vorteil mit Beratung</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Header */}
            <div className="hidden md:block"></div>
            <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 text-center">
              <div className="flex items-center justify-center mb-2">
                <X className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-bold text-red-700">Do-It-Yourself</h3>
              </div>
              <p className="text-sm text-red-600">Alleine durchkämpfen</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-alpine-green/10 to-alpine-green/20 border-2 border-alpine-green text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="w-6 h-6 text-alpine-green mr-2" />
                <h3 className="text-xl font-bold text-alpine-green">SwissPats Professional</h3>
              </div>
              <p className="text-sm text-charcoal-black/70">Experten-Begleitung</p>
            </Card>

            {/* Comparison Rows */}
            {comparisonData.map((item, index) => (
              <>
                {/* Category */}
                <div key={`category-${index}`} className="flex items-center p-4 font-semibold text-charcoal-black">
                  {item.category}
                </div>
                
                {/* DIY Column */}
                <Card key={`diy-${index}`} className="p-4 bg-red-50 border border-red-200">
                  <div className="flex items-center gap-3">
                    <div className="text-red-600">{item.diy.icon}</div>
                    <div>
                      <div className="font-semibold text-red-700">{item.diy.value}</div>
                    </div>
                  </div>
                </Card>
                
                {/* Professional Column */}
                <Card key={`pro-${index}`} className="p-4 bg-alpine-green/10 border border-alpine-green/30">
                  <div className="flex items-center gap-3">
                    <div className="text-alpine-green">{item.professional.icon}</div>
                    <div>
                      <div className="font-semibold text-alpine-green">{item.professional.value}</div>
                    </div>
                  </div>
                </Card>
              </>
            ))}

            {/* Bottom Summary */}
            <div className="font-bold text-lg text-charcoal-black p-4">
              Gesamtkosten (versteckt):
            </div>
            <Card className="p-4 bg-red-100 border-2 border-red-300 text-center">
              <div className="text-2xl font-black text-red-700 mb-1">
                €{Math.abs(lostIncomeDelay + 5000).toLocaleString()}
              </div>
              <div className="text-sm text-red-600">
                Entgangenes Einkommen + Stress + Fehlerkosten
              </div>
            </Card>
            <Card className="p-4 bg-alpine-green/20 border-2 border-alpine-green text-center">
              <div className="text-2xl font-black text-alpine-green mb-1">
                €{professionalServiceCost.toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-black/70">
                Transparente Beratungskosten
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-charcoal-black mb-4">
              Die Rechnung ist eindeutig
            </h3>
            <p className="text-lg text-charcoal-black/70 mb-6">
              Professionelle Begleitung zahlt sich aus. Spare Zeit, Nerven und am Ende auch Geld.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton variant="burgundy" size="xl">
              <Target className="w-5 h-5" />
              Kostenlose Beratung buchen
            </SwissButton>
            <SwissButton variant="outline" size="xl">
              <Calculator className="w-5 h-5" />
              Persönliche Kalkulation erstellen
            </SwissButton>
          </div>
          
          <p className="text-sm text-charcoal-black/60 mt-4">
            Unverbindlich • Kostenfrei • In 15 Minuten
          </p>
        </div>
      </div>
    </section>
  );
};