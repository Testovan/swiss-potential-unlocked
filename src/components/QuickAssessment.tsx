import { useState } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Zap, 
  Target, 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Heart,
  Coins,
  Clock,
  MapPin
} from "lucide-react";

const quickQuestions = [
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

export const QuickAssessment = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, score: number) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);
    
    const newTotal = Object.values(newAnswers).reduce((sum, s) => sum + s, 0);
    setTotalScore(newTotal);

    if (Object.keys(newAnswers).length === quickQuestions.length) {
      setShowResult(true);
    } else if (currentCard < quickQuestions.length - 1) {
      setTimeout(() => setCurrentCard(currentCard + 1), 300);
    }
  };

  const progress = (Object.keys(answers).length / quickQuestions.length) * 100;
  const successRate = Math.min(95, Math.max(60, (totalScore / 100) * 100));

  if (showResult) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="studio-card">
              <div className="relative mx-auto w-24 h-24 mb-8">
                <div className="absolute inset-0 rounded-full bg-accent" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <span className="studio-heading text-2xl text-foreground">{totalScore}</span>
                </div>
              </div>
              
              <h3 className="studio-heading text-3xl text-foreground mb-4">
                Score: {successRate}%
              </h3>
              
              <p className="studio-body text-lg text-muted-foreground mb-8">
                Ausgezeichnete Ausgangslage für die Schweiz!
              </p>
              
              <SwissButton 
                variant="burgundy" 
                size="lg" 
                className="mb-4"
                onClick={() => {
                  document.getElementById('assessment-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <Target className="w-5 h-5" />
                Vollständige Analyse starten
              </SwissButton>
              
              <p className="text-sm text-muted-foreground">
                Kostenlose Detailanalyse in nur 3 Minuten
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quick-assessment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-muted-foreground bg-muted/50 rounded-full border border-border">
            <Zap className="w-4 h-4 mr-2" />
            Quick Check - 30 Sekunden
          </div>
          <h2 className="studio-heading text-4xl md:text-6xl text-foreground mb-6">
            Schweiz-Chancen Check
          </h2>
          <p className="studio-body text-xl text-muted-foreground max-w-2xl mx-auto">
            3 schnelle Fragen für deinen ersten Eindruck
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Quick Check</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-muted" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickQuestions.map((question, index) => {
            const isActive = index === currentCard;
            const isCompleted = answers[question.id] !== undefined;
            const isDisabled = index > currentCard && Object.keys(answers).length < index;
            
            return (
              <div
                key={question.id}
                className={`studio-card transition-all duration-300 ${
                  isActive 
                    ? 'border-accent bg-accent/5 shadow-md' 
                    : isCompleted 
                      ? 'border-foreground/20 bg-muted/30' 
                      : 'border-border bg-card'
                } ${isDisabled ? 'opacity-50' : 'hover:shadow-md cursor-pointer'}`}
              >
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${
                    isCompleted ? 'bg-foreground/10 text-foreground' : 'bg-accent/10 text-accent'
                  }`}>
                    {question.icon}
                  </div>
                  <h3 className="studio-subheading text-lg text-foreground mb-2">{question.title}</h3>
                </div>

                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(question.id, option.score)}
                      disabled={isDisabled}
                      className={`w-full p-3 text-left rounded-lg border transition-all studio-body ${
                        answers[question.id] === option.score
                          ? 'bg-foreground/5 border-foreground text-foreground font-semibold'
                          : 'bg-background border-border hover:border-accent hover:bg-accent/5'
                      } ${isDisabled ? 'cursor-not-allowed' : 'hover:transform hover:scale-105'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{option.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Score */}
        {totalScore > 0 && (
          <div className="max-w-md mx-auto mt-8 p-4 bg-gradient-to-r from-alpine-green/10 to-burgundy/10 rounded-xl border border-alpine-green/20 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-charcoal-black/70">Live Score:</span>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-burgundy" />
                <span className="font-bold text-alpine-green">{totalScore} Punkte</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};