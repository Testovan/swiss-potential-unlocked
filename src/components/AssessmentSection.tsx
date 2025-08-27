import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Zap, Target, ArrowRight, Star } from "lucide-react";

const questions = [
  {
    id: 1,
    title: "Dein aktueller Beruf?",
    options: [
      { label: "IT & Software", points: 25, icon: "💻" },
      { label: "Ingenieurswesen", points: 23, icon: "⚙️" },
      { label: "Medizin & Pharma", points: 28, icon: "🏥" },
      { label: "Finanzen & Banking", points: 30, icon: "🏦" },
      { label: "Andere", points: 15, icon: "🔧" },
    ]
  },
  {
    id: 2,
    title: "Deine Berufserfahrung?",
    options: [
      { label: "1-3 Jahre", points: 15, icon: "🌱" },
      { label: "3-7 Jahre", points: 25, icon: "🌿" },
      { label: "7-15 Jahre", points: 35, icon: "🌳" },
      { label: "15+ Jahre", points: 25, icon: "🏛️" },
    ]
  },
  {
    id: 3,
    title: "Wann möchtest du wechseln?",
    options: [
      { label: "Sofort verfügbar", points: 35, icon: "🚀" },
      { label: "In 1-3 Monaten", points: 30, icon: "📅" },
      { label: "In 3-6 Monaten", points: 25, icon: "⏰" },
      { label: "Über 6 Monate", points: 15, icon: "🔮" },
    ]
  }
];

export const AssessmentSection = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);
    
    const newScore = newAnswers.reduce((sum, score) => sum + (score || 0), 0);
    setTotalScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const progress = ((currentQuestion + (answers[currentQuestion] ? 1 : 0)) / questions.length) * 100;
  const successRate = Math.min(95, Math.max(60, (totalScore / 100) * 100));

  if (showResult) {
    return (
      <section className="py-20 bg-gradient-to-br from-off-white to-silver-gray/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-bounce-in">
              <div className="relative mx-auto w-32 h-32 mb-8">
                <div className="absolute inset-0 rounded-full bg-alpine-green animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-off-white flex items-center justify-center">
                  <span className="text-4xl font-black text-charcoal-black">{totalScore}</span>
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-charcoal-black mb-4">
                Herzlichen Glückwunsch! 🎉
              </h2>
              
              <p className="text-xl text-charcoal-black/70 mb-6">
                Deine Erfolgsquote: <span className="font-bold text-alpine-green">{successRate}%</span>
              </p>
              
              <div className="bg-gradient-to-r from-alpine-green/10 to-burgundy/10 rounded-2xl p-6 mb-8 border border-alpine-green/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="w-6 h-6 text-burgundy" />
                  <Badge variant="secondary" className="bg-burgundy/20 text-burgundy border-burgundy/30">
                    High Potential
                  </Badge>
                </div>
                <p className="text-sm text-charcoal-black/70">
                  Du gehörst zu den <strong>Top 16% der Teilnehmer</strong> und hast ausgezeichnete Chancen auf eine erfolgreiche Schweiz-Karriere!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SwissButton 
                variant="burgundy" 
                size="lg"
                onClick={() => navigate(`/analysis?score=${totalScore}`)}
              >
                <Target className="w-5 h-5" />
                Detaillierte Analyse erhalten
              </SwissButton>
              <SwissButton 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.getElementById('calendly-booking')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Kostenlose Beratung buchen
              </SwissButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment-section" className="py-20 bg-gradient-to-br from-off-white to-silver-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal-black mb-4">
            Dein Schweizer Potenzial 
            <span className="text-alpine-green"> in 60 Sekunden</span>
          </h2>
          <p className="text-xl text-charcoal-black/70 max-w-2xl mx-auto">
            Finde heraus, wie viel mehr du in der Schweiz verdienen könntest
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-sm text-charcoal-black/70 mb-2">
            <span>Fortschritt</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-silver-gray" />
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-luxury border-0 bg-off-white/80 backdrop-blur-sm animate-scale-in">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-alpine-green" />
                <Badge variant="secondary" className="bg-alpine-green/10 text-alpine-green border-alpine-green/20">
                  Frage {currentQuestion + 1} von {questions.length}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-charcoal-black mb-2">
                {questions[currentQuestion].title}
              </h3>
            </div>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.points)}
                  className="group p-4 rounded-xl border-2 border-silver-gray hover:border-alpine-green bg-off-white hover:bg-alpine-green/5 transition-all duration-300 transform hover:scale-105 hover:shadow-soft text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-semibold text-charcoal-black group-hover:text-alpine-green transition-colors">
                        {option.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-alpine-green/10 text-alpine-green border-alpine-green/20">
                        +{option.points} Punkte
                      </Badge>
                      <ArrowRight className="w-4 h-4 text-charcoal-black/50 group-hover:text-alpine-green transition-colors" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Live Score */}
            {totalScore > 0 && (
              <div className="mt-6 p-4 bg-gradient-to-r from-alpine-green/10 to-burgundy/10 rounded-xl border border-alpine-green/20 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-charcoal-black/70">
                    Aktueller Score:
                  </span>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-burgundy" />
                    <span className="font-bold text-alpine-green">{totalScore} Punkte</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};