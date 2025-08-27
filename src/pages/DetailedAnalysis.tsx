import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { SwissButton } from "@/components/SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Target, 
  Trophy, 
  Euro,
  Star,
  Award,
  CheckCircle2,
  TrendingUp,
  Calendar,
  FileText,
  Download,
  Mail,
  Phone,
  Clock,
  Briefcase,
  MapPin,
  Users,
  Zap,
  Shield,
  ChevronRight
} from "lucide-react";

// Count-up animation hook
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

const DetailedAnalysis = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Get scores from URL parameters or use defaults
  const quizScore = parseInt(searchParams.get('quiz') || '75');
  const financialBenefit = parseInt(searchParams.get('financial') || '15000');
  const readinessScore = parseInt(searchParams.get('readiness') || '82');

  // Animated counters
  const animatedQuizScore = useCountUp(quizScore, 1500);
  const animatedFinancialBenefit = useCountUp(Math.abs(financialBenefit), 2000);
  const animatedReadinessScore = useCountUp(readinessScore, 2500);

  const getReadinessLevel = (score: number) => {
    if (score >= 85) return { label: "Exzellent", color: "alpine-green", description: "Optimale Voraussetzungen" };
    if (score >= 70) return { label: "Sehr Gut", color: "alpine-green", description: "Ausgezeichnete Chancen" };
    if (score >= 55) return { label: "Gut", color: "burgundy", description: "Gute Ausgangslage" };
    return { label: "Verbesserbar", color: "burgundy", description: "Potentiale vorhanden" };
  };

  const readinessLevel = getReadinessLevel(readinessScore);

  const analysisData = [
    {
      category: "Berufliche Qualifikation",
      score: quizScore,
      maxScore: 100,
      icon: <Briefcase className="w-6 h-6" />,
      details: [
        "Branchenerfahrung wird in der Schweiz hoch geschätzt",
        "Internationale Qualifikationen sind ein Plus",
        "Weiterbildungsmöglichkeiten vorhanden"
      ]
    },
    {
      category: "Finanzielle Aussichten", 
      score: Math.min(100, (Math.abs(financialBenefit) / 200) * 100),
      maxScore: 100,
      icon: <Euro className="w-6 h-6" />,
      details: [
        `Erwarteter Gehaltszuwachs: €${Math.abs(financialBenefit).toLocaleString()}`,
        "Steuervorteile in der Schweiz berücksichtigt",
        "Lebenshaltungskosten einkalkuliert"
      ]
    },
    {
      category: "Marktchancen",
      score: 88,
      maxScore: 100,
      icon: <TrendingUp className="w-6 h-6" />,
      details: [
        "Starke Nachfrage in deinem Bereich",
        "Gute Netzwerkmöglichkeiten",
        "Wachsende Industrie"
      ]
    }
  ];

  const timelineSteps = [
    {
      phase: "Vorbereitung",
      duration: "1-2 Wochen",
      tasks: ["Dokumente sammeln", "Profil optimieren", "Netzwerk aktivieren"],
      icon: <FileText className="w-5 h-5" />
    },
    {
      phase: "Bewerbung",
      duration: "2-4 Wochen", 
      tasks: ["Gezielte Bewerbungen", "Interview-Vorbereitung", "Referenzen sammeln"],
      icon: <Mail className="w-5 h-5" />
    },
    {
      phase: "Verhandlung",
      duration: "1-2 Wochen",
      tasks: ["Gehaltsverhandlung", "Vertragsprüfung", "Startdatum vereinbaren"],
      icon: <Users className="w-5 h-5" />
    },
    {
      phase: "Umzug & Start",
      duration: "2-4 Wochen",
      tasks: ["Umzug organisieren", "Behördengänge", "Arbeitsstart"],
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const recommendations = [
    {
      priority: "Hoch",
      title: "Professionelle Bewerbungsberatung",
      description: "Schweizer Arbeitgeber haben spezifische Erwartungen an Bewerbungsunterlagen",
      benefit: "Erhöht Erfolgsrate um 65%",
      color: "alpine-green"
    },
    {
      priority: "Hoch", 
      title: "Gehaltsverhandlungs-Coaching",
      description: "Verhandle dein Gehalt optimal - oft 15-30% mehr möglich",
      benefit: `Potential: +€${Math.round(financialBenefit * 0.2).toLocaleString()}`,
      color: "alpine-green"
    },
    {
      priority: "Mittel",
      title: "Netzwerk-Aufbau",
      description: "Kontakte zu Schweizer Unternehmen und Headhuntern",
      benefit: "Verkürzt Suchzeit um 40%",
      color: "burgundy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-alpine-green/5 to-burgundy/5">
      {/* Header */}
      <header className="border-b border-silver-gray/30 bg-off-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-charcoal-black hover:text-alpine-green transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Zurück zur Hauptseite</span>
            </Link>
            <Badge variant="secondary" className="bg-alpine-green/10 text-alpine-green border-alpine-green/20">
              <Award className="w-4 h-4 mr-1" />
              Detaillierte Analyse
            </Badge>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative mx-auto w-40 h-40 mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-alpine-green/20 to-burgundy/20 animate-pulse-gentle" />
              <div className="absolute inset-6 rounded-full bg-off-white border-4 border-alpine-green flex items-center justify-center">
                <span className="text-4xl font-black text-charcoal-black">{animatedReadinessScore}%</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-charcoal-black mb-4">
              Deine detaillierte
              <span className="text-alpine-green"> Schweiz-Analyse</span>
            </h1>
            
            <Badge variant="secondary" className={`text-xl px-6 py-3 bg-${readinessLevel.color}/20 text-${readinessLevel.color} border-0 mb-4`}>
              <Star className="w-6 h-6 mr-2" />
              {readinessLevel.label} • {readinessLevel.description}
            </Badge>
            
            <p className="text-xl text-charcoal-black/70 max-w-3xl mx-auto">
              Basierend auf deinem Assessment haben wir eine umfassende Analyse erstellt und konkrete Handlungsempfehlungen entwickelt.
            </p>
          </div>

          {/* Score Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <Card className="p-6 text-center bg-gradient-to-br from-alpine-green/10 to-alpine-green/5 border border-alpine-green/30">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-alpine-green" />
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Profil-Score</h3>
              <div className="text-4xl font-black text-alpine-green mb-2">
                {animatedQuizScore}
              </div>
              <p className="text-sm text-charcoal-black/70">von 100 Punkten</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-burgundy/10 to-burgundy/5 border border-burgundy/30">
              <Euro className="w-12 h-12 mx-auto mb-4 text-burgundy" />
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Finanzieller Vorteil</h3>
              <div className="text-4xl font-black text-burgundy mb-2">
                €{animatedFinancialBenefit}
              </div>
              <p className="text-sm text-charcoal-black/70">jährlich zusätzlich</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-charcoal-black/10 to-charcoal-black/5 border border-charcoal-black/20">
              <Star className="w-12 h-12 mx-auto mb-4 text-charcoal-black" />
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Swiss-Readiness</h3>
              <div className="text-4xl font-black text-charcoal-black mb-2">
                {animatedReadinessScore}%
              </div>
              <p className="text-sm text-charcoal-black/70">Gesamtbewertung</p>
            </Card>
          </div>

          {/* Detailed Analysis */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-charcoal-black mb-8 text-center">
              Detaillierte Bewertung nach Kategorien
            </h2>
            
            <div className="space-y-6">
              {analysisData.map((category, index) => (
                <Card key={index} className="p-6 bg-gradient-to-r from-off-white to-silver-gray/10 border border-silver-gray/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-alpine-green/20 text-alpine-green">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-charcoal-black">{category.category}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-alpine-green">
                        {category.score}/{category.maxScore}
                      </div>
                      <div className="text-sm text-charcoal-black/70">Punkte</div>
                    </div>
                  </div>
                  
                  <Progress value={(category.score / category.maxScore) * 100} className="mb-4 h-3" />
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {category.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-alpine-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal-black/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-charcoal-black mb-8 text-center">
              Dein persönlicher Fahrplan
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {timelineSteps.map((step, index) => (
                <Card key={index} className="p-6 relative">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-alpine-green/20 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-charcoal-black mb-1">{step.phase}</h3>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </div>
                  
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-alpine-green mt-0.5 flex-shrink-0" />
                        <span className="text-charcoal-black/70">{task}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {index < timelineSteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-alpine-green" />
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-charcoal-black mb-8 text-center">
              Personalisierte Empfehlungen
            </h2>
            
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <Card key={index} className={`p-6 border-l-4 border-l-${rec.color}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge 
                          variant="secondary" 
                          className={`bg-${rec.color}/10 text-${rec.color} border-${rec.color}/20`}
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          Priorität: {rec.priority}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-charcoal-black mb-2">{rec.title}</h3>
                      <p className="text-charcoal-black/70 mb-3">{rec.description}</p>
                      <div className={`inline-flex items-center gap-2 text-sm font-medium text-${rec.color}`}>
                        <TrendingUp className="w-4 h-4" />
                        {rec.benefit}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-gradient-to-br from-alpine-green/10 via-off-white to-burgundy/10 border border-alpine-green/20">
              <Shield className="w-16 h-16 mx-auto mb-6 text-alpine-green" />
              <h2 className="text-3xl font-black text-charcoal-black mb-4">
                Bereit, deine Schweiz-Pläne umzusetzen?
              </h2>
              <p className="text-lg text-charcoal-black/70 mb-8 max-w-2xl mx-auto">
                Mit deiner {readinessLevel.label.toLowerCase()}en Bewertung stehen deine Chancen sehr gut. 
                Lass uns gemeinsam deine Karriere in der Schweiz realisieren.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <SwissButton variant="burgundy" size="xl">
                  <Phone className="w-5 h-5" />
                  Kostenlose Beratung buchen
                </SwissButton>
                <SwissButton variant="outline" size="xl">
                  <Download className="w-5 h-5" />
                  PDF-Report herunterladen
                </SwissButton>
              </div>
              
              <p className="text-sm text-charcoal-black/60">
                100% kostenlos • Keine Verpflichtung • Individuelle Beratung
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailedAnalysis;