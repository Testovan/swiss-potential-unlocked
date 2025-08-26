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
      <section className="py-20 bg-gradient-to-br from-off-white to-silver-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-scale-in">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-alpine-green animate-pulse-gentle" />
                <div className="absolute inset-2 rounded-full bg-off-white flex items-center justify-center">
                  <span className="text-2xl font-black text-charcoal-black">{totalScore}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-charcoal-black mb-3">
                Dein Quick-Score: {successRate}% 🎯
              </h3>
              
              <p className="text-lg text-charcoal-black/70 mb-6">
                Ausgezeichnete Ausgangslage für die Schweiz!
              </p>
              
              <SwissButton variant="premium" size="lg" className="mb-4">
                <Target className="w-5 h-5" />
                Vollständige Analyse starten
              </SwissButton>
              
              <p className="text-sm text-charcoal-black/60">
                Kostenlose Detailanalyse in nur 3 Minuten
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-silver-gray/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-alpine-green/10 text-alpine-green border-alpine-green/20">
            <Zap className="w-4 h-4 mr-2" />
            Quick Check - 30 Sekunden
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black text-charcoal-black mb-4">
            Wie gut sind deine 
            <span className="text-alpine-green"> Schweiz-Chancen?</span>
          </h2>
          <p className="text-xl text-charcoal-black/70 max-w-2xl mx-auto">
            3 schnelle Fragen für deinen ersten Eindruck
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-charcoal-black/70 mb-2">
            <span>Quick Check</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-silver-gray/50" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {quickQuestions.map((question, index) => {
            const isActive = index === currentCard;
            const isCompleted = answers[question.id] !== undefined;
            const isDisabled = index > currentCard && Object.keys(answers).length < index;
            
            return (
              <Card 
                key={question.id}
                className={`p-6 border-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-alpine-green bg-alpine-green/5 shadow-success' 
                    : isCompleted 
                      ? 'border-burgundy/30 bg-burgundy/5' 
                      : 'border-silver-gray bg-off-white/50'
                } ${isDisabled ? 'opacity-50' : 'hover:shadow-soft cursor-pointer'}`}
              >
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-xl mb-3 ${
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
                      onClick={() => handleAnswer(question.id, option.score)}
                      disabled={isDisabled}
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        answers[question.id] === option.score
                          ? 'bg-burgundy/10 border-burgundy text-burgundy font-semibold'
                          : 'bg-off-white border-silver-gray hover:border-alpine-green hover:bg-alpine-green/5'
                      } ${isDisabled ? 'cursor-not-allowed' : 'hover:transform hover:scale-105'}`}
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