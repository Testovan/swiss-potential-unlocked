import { useState, useEffect } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Trophy, 
  Zap, 
  Target, 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Clock,
  Calculator,
  Euro,
  CheckCircle2,
  Star,
  Award,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    title: "Deine Branche?",
    icon: <Briefcase className="w-6 h-6" />,
    options: [
      { label: "IT & Tech", score: 25 },
      { label: "Ingenieurswesen", score: 23 },
      { label: "Medizin", score: 28 },
      { label: "Finanzen", score: 30 },
      { label: "Andere", score: 15 }
    ]
  },
  {
    id: 2,
    title: "Deine Erfahrung?", 
    icon: <TrendingUp className="w-6 h-6" />,
    options: [
      { label: "1-3 Jahre", score: 15 },
      { label: "3-7 Jahre", score: 25 },
      { label: "7+ Jahre", score: 35 }
    ]
  },
  {
    id: 3,
    title: "Wechsel-Zeitpunkt?",
    icon: <Clock className="w-6 h-6" />,
    options: [
      { label: "Sofort", score: 35 },
      { label: "1-3 Monate", score: 30 },
      { label: "3-6 Monate", score: 25 },
      { label: "Später", score: 15 }
    ]
  }
];

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

export const CombinedAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [quizScore, setQuizScore] = useState(0);
  
  // Calculator state
  const [currentSalary, setCurrentSalary] = useState([60000]);
  const [targetSalary, setTargetSalary] = useState([85000]);
  const [timeToMove, setTimeToMove] = useState([6]);
  
  // Results state
  const [showResults, setShowResults] = useState(false);

  const progress = (currentStep / 3) * 100;

  // Quiz logic
  const handleQuizAnswer = (questionId: number, score: number) => {
    const newAnswers = { ...quizAnswers, [questionId]: score };
    setQuizAnswers(newAnswers);
    
    const newTotal = Object.values(newAnswers).reduce((sum, s) => sum + s, 0);
    setQuizScore(newTotal);

    if (Object.keys(newAnswers).length === quizQuestions.length) {
      // Quiz completed, move to calculator
      setTimeout(() => setCurrentStep(2), 500);
    } else if (currentQuestionIndex < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
    }
  };

  // Calculator logic
  const yearlyIncrease = targetSalary[0] - currentSalary[0];
  const monthlyIncrease = yearlyIncrease / 12;
  const lostIncomeDelay = monthlyIncrease * (timeToMove[0] - 3);
  const professionalServiceCost = 2500;
  const financialBenefit = lostIncomeDelay - professionalServiceCost;

  // Combined scoring
  const financialScore = Math.max(0, Math.min(50, (financialBenefit / 10000) * 50)); // Weight financial benefit to max 50 points
  const totalScore = quizScore + financialScore;
  const swissReadinessPercentage = Math.min(100, Math.max(0, (totalScore / 140) * 100)); // Max possible: 100 quiz + 40 financial

  const handleCalculatorComplete = () => {
    setCurrentStep(3);
    setShowResults(true);
  };

  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 85) return { label: "Exzellent", color: "text-alpine-green", bg: "bg-alpine-green/20" };
    if (percentage >= 70) return { label: "Sehr Gut", color: "text-alpine-green", bg: "bg-alpine-green/15" };
    if (percentage >= 55) return { label: "Gut", color: "text-burgundy", bg: "bg-burgundy/15" };
    return { label: "Verbesserbar", color: "text-burgundy", bg: "bg-burgundy/20" };
  };

  const readinessLevel = getReadinessLevel(swissReadinessPercentage);

  // Animated counters for results
  const animatedQuizScore = useCountUp(quizScore, 1500);
  const animatedFinancialBenefit = useCountUp(Math.abs(financialBenefit), 2000);
  const animatedTotalScore = useCountUp(Math.round(swissReadinessPercentage), 2500);

  return (
    <section className="py-20 bg-gradient-to-br from-alpine-green/5 via-off-white to-burgundy/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-alpine-green/10 text-alpine-green border-alpine-green/20">
            <Star className="w-4 h-4 mr-2" />
            Komplette Swiss-Readiness Analyse
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal-black mb-4">
            Deine vollständige
            <span className="text-alpine-green"> Schweiz-Bewertung</span>
          </h2>
          <p className="text-xl text-charcoal-black/70 max-w-3xl mx-auto">
            Persönlichkeitsprofil + Finanzanalyse = Dein komplettes Swiss-Readiness Rating
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-alpine-green' : 'text-charcoal-black/50'}`}>
              1. Profil-Quiz
            </span>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-alpine-green' : 'text-charcoal-black/50'}`}>
              2. Finanz-Kalkulator
            </span>
            <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-alpine-green' : 'text-charcoal-black/50'}`}>
              3. Gesamtbewertung
            </span>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="text-center mt-2 text-sm text-charcoal-black/60">
            Schritt {currentStep} von 3 • {Math.round(progress)}% abgeschlossen
          </div>
        </div>

        {/* Step 1: Quiz */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-charcoal-black mb-2">
                Schritt 1: Dein Profil-Assessment
              </h3>
              <p className="text-charcoal-black/70">
                Beantworte {quizQuestions.length} Fragen zu deinem beruflichen Hintergrund
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quizQuestions.map((question, index) => {
                const isActive = index === currentQuestionIndex;
                const isCompleted = quizAnswers[question.id] !== undefined;
                const isDisabled = index > currentQuestionIndex;
                
                return (
                  <Card 
                    key={question.id}
                    className={`p-6 border-2 transition-all duration-500 ${
                      isActive 
                        ? 'border-alpine-green bg-alpine-green/5 shadow-success scale-105' 
                        : isCompleted 
                          ? 'border-burgundy/30 bg-burgundy/5' 
                          : 'border-silver-gray bg-off-white/50'
                    } ${isDisabled ? 'opacity-50' : ''}`}
                  >
                    <div className="text-center mb-4">
                      <div className={`inline-flex p-3 rounded-xl mb-3 transition-colors ${
                        isCompleted ? 'bg-burgundy/20 text-burgundy' : 'bg-alpine-green/20 text-alpine-green'
                      }`}>
                        {question.icon}
                      </div>
                      <h3 className="font-bold text-charcoal-black mb-2">{question.title}</h3>
                    </div>

                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => !isDisabled && handleQuizAnswer(question.id, option.score)}
                          disabled={isDisabled}
                          className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                            quizAnswers[question.id] === option.score
                              ? 'bg-burgundy/10 border-burgundy text-burgundy font-semibold'
                              : 'bg-off-white border-silver-gray hover:border-alpine-green hover:bg-alpine-green/5'
                          } ${isDisabled ? 'cursor-not-allowed' : 'hover:scale-105'}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm">{option.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-50" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Live Quiz Score */}
            {quizScore > 0 && (
              <div className="max-w-md mx-auto mt-8 p-4 bg-gradient-to-r from-alpine-green/10 to-burgundy/10 rounded-xl border border-alpine-green/20 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-charcoal-black/70">Quiz-Punkte:</span>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-burgundy" />
                    <span className="font-bold text-alpine-green">{quizScore} / 100</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Calculator */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-charcoal-black mb-2">
                Schritt 2: Finanzielle Analyse
              </h3>
              <p className="text-charcoal-black/70">
                Berechne deinen finanziellen Vorteil durch professionelle Unterstützung
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-alpine-green/5 to-burgundy/5 border border-alpine-green/20">
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
                    Zeit bis zum Wechsel (Monate)
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

              <div className="text-center">
                <SwissButton 
                  variant="burgundy" 
                  size="lg" 
                  onClick={handleCalculatorComplete}
                  className="animate-pulse-gentle"
                >
                  <Calculator className="w-5 h-5" />
                  Analyse abschließen
                  <ChevronRight className="w-5 h-5" />
                </SwissButton>
              </div>
            </Card>
          </div>
        )}

        {/* Step 3: Results */}
        {currentStep === 3 && showResults && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-alpine-green/20 to-burgundy/20 animate-pulse-gentle" />
                <div className="absolute inset-4 rounded-full bg-off-white border-4 border-alpine-green flex items-center justify-center">
                  <span className="text-3xl font-black text-charcoal-black">{animatedTotalScore}%</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-charcoal-black mb-3">
                Deine Swiss-Readiness Bewertung
              </h3>
              
              <Badge variant="secondary" className={`text-lg px-4 py-2 ${readinessLevel.bg} ${readinessLevel.color} border-0`}>
                <Award className="w-5 h-5 mr-2" />
                {readinessLevel.label}
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Quiz Score */}
              <Card className="p-6 text-center bg-gradient-to-br from-alpine-green/10 to-alpine-green/5 border border-alpine-green/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-alpine-green/20 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-alpine-green" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-black mb-2">Profil-Score</h4>
                <div className="text-3xl font-black text-alpine-green mb-2">
                  {animatedQuizScore} Punkte
                </div>
                <p className="text-sm text-charcoal-black/70">
                  Basierend auf deinem beruflichen Profil
                </p>
              </Card>

              {/* Financial Benefit */}
              <Card className="p-6 text-center bg-gradient-to-br from-burgundy/10 to-burgundy/5 border border-burgundy/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-burgundy/20 flex items-center justify-center">
                  <Euro className="w-8 h-8 text-burgundy" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-black mb-2">Finanzieller Vorteil</h4>
                <div className={`text-3xl font-black mb-2 ${financialBenefit >= 0 ? 'text-alpine-green' : 'text-burgundy'}`}>
                  {financialBenefit >= 0 ? '+' : '-'}€{animatedFinancialBenefit}
                </div>
                <p className="text-sm text-charcoal-black/70">
                  Durch professionelle Begleitung
                </p>
              </Card>

              {/* Combined Score */}
              <Card className="p-6 text-center bg-gradient-to-br from-charcoal-black/5 to-charcoal-black/10 border border-charcoal-black/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-alpine-green/30 to-burgundy/30 flex items-center justify-center">
                  <Star className="w-8 h-8 text-charcoal-black" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-black mb-2">Swiss-Readiness</h4>
                <div className="text-3xl font-black text-charcoal-black mb-2">
                  {animatedTotalScore}%
                </div>
                <p className="text-sm text-charcoal-black/70">
                  Gesamtbewertung für deine Schweiz-Pläne
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-charcoal-black mb-4">
                  Bereit für den nächsten Schritt?
                </h3>
                <p className="text-lg text-charcoal-black/70">
                  Mit deinem Swiss-Readiness Score von {Math.round(swissReadinessPercentage)}% hast du {swissReadinessPercentage >= 70 ? 'exzellente' : 'gute'} Voraussetzungen für eine erfolgreiche Karriere in der Schweiz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SwissButton variant="burgundy" size="xl">
                  <Target className="w-5 h-5" />
                  Detaillierte Analyse anfordern
                </SwissButton>
                <SwissButton variant="outline" size="xl">
                  <Calculator className="w-5 h-5" />
                  Kostenlose Beratung buchen
                </SwissButton>
              </div>
              
              <p className="text-sm text-charcoal-black/60 mt-4">
                Kostenlos • Unverbindlich • Individuelle Empfehlungen
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};