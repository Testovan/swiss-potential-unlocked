import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Trophy, Zap, Target, ArrowRight, Briefcase, TrendingUp, Clock, Calculator, Euro, CheckCircle2, Star, Award, ChevronRight, ArrowLeft } from "lucide-react";

const quizQuestions = [{
  id: 1,
  title: "Deine Branche?",
  icon: <Briefcase className="w-6 h-6" />,
  options: [{
    label: "IT & Tech",
    score: 25
  }, {
    label: "Ingenieurswesen",
    score: 23
  }, {
    label: "Medizin",
    score: 28
  }, {
    label: "Finanzen",
    score: 30
  }, {
    label: "Andere",
    score: 15
  }]
}, {
  id: 2,
  title: "Deine Erfahrung?",
  icon: <TrendingUp className="w-6 h-6" />,
  options: [{
    label: "1-3 Jahre",
    score: 15
  }, {
    label: "3-7 Jahre",
    score: 25
  }, {
    label: "7+ Jahre",
    score: 35
  }]
}, {
  id: 3,
  title: "Wechsel-Zeitpunkt?",
  icon: <Clock className="w-6 h-6" />,
  options: [{
    label: "Sofort",
    score: 35
  }, {
    label: "1-3 Monate",
    score: 30
  }, {
    label: "3-6 Monate",
    score: 25
  }, {
    label: "Später",
    score: 15
  }]
}];

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
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [quizScore, setQuizScore] = useState(0);

  // Calculator state
  const [currentSalary, setCurrentSalary] = useState([60000]);
  const [targetSalary, setTargetSalary] = useState([85000]);
  const [timeToMove, setTimeToMove] = useState([6]);

  // Results state
  const [showResults, setShowResults] = useState(false);
  const progress = currentStep / 3 * 100;

  // Quiz logic
  const handleQuizAnswer = (questionId: number, score: number) => {
    const newAnswers = {
      ...quizAnswers,
      [questionId]: score
    };
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
  const financialScore = Math.max(0, Math.min(50, financialBenefit / 10000 * 50)); // Weight financial benefit to max 50 points
  const totalScore = quizScore + financialScore;
  const swissReadinessPercentage = Math.min(100, Math.max(0, totalScore / 140 * 100)); // Max possible: 100 quiz + 40 financial

  const handleCalculatorComplete = () => {
    setCurrentStep(3);
    setShowResults(true);
  };
  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 85) return {
      label: "Exzellent",
      color: "text-alpine-green",
      bg: "bg-alpine-green/20"
    };
    if (percentage >= 70) return {
      label: "Sehr Gut",
      color: "text-alpine-green",
      bg: "bg-alpine-green/15"
    };
    if (percentage >= 55) return {
      label: "Gut",
      color: "text-burgundy",
      bg: "bg-burgundy/15"
    };
    return {
      label: "Verbesserbar",
      color: "text-burgundy",
      bg: "bg-burgundy/20"
    };
  };
  const readinessLevel = getReadinessLevel(swissReadinessPercentage);
  const handleDetailedAnalysis = () => {
    const params = new URLSearchParams({
      quiz: quizScore.toString(),
      financial: financialBenefit.toString(),
      readiness: Math.round(swissReadinessPercentage).toString()
    });
    navigate(`/detailed-analysis?${params}`);
  };

  // Animated counters for results
  const animatedQuizScore = useCountUp(quizScore, 1500);
  const animatedFinancialBenefit = useCountUp(Math.abs(financialBenefit), 2000);
  const animatedTotalScore = useCountUp(Math.round(swissReadinessPercentage), 2500);
  
  return <section style={{ padding: '100px 0', background: '#F5F5F5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ 
            padding: '6px 12px', 
            background: '#F5F5F5', 
            boxShadow: '0px 3px 1px white inset', 
            borderRadius: '60px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '16px'
          }}>
            <Star style={{ width: '16px', height: '20px', color: 'rgba(0, 0, 0, 0.40)' }} />
            <span style={{ 
              color: 'black', 
              fontSize: '11.44px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '14.40px' 
            }}>
              KOMPLETTE SWISS-READINESS ANALYSE
            </span>
          </div>
          <h2 style={{ 
            fontSize: '53.16px', 
            fontFamily: 'Inter', 
            fontWeight: 500, 
            lineHeight: '67.20px', 
            color: 'black',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Deine vollständige Schweiz-Bewertung
          </h2>
          <p style={{ 
            fontSize: '16px', 
            fontFamily: 'Inter', 
            fontWeight: 400, 
            lineHeight: '24px', 
            color: 'black',
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Persönlichkeitsprofil + Finanzanalyse = Dein komplettes Swiss-Readiness Rating
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 44px auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 500, 
              color: currentStep >= 1 ? 'black' : 'rgba(0, 0, 0, 0.50)' 
            }}>
              1. Profil-Quiz
            </span>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 500, 
              color: currentStep >= 2 ? 'black' : 'rgba(0, 0, 0, 0.50)' 
            }}>
              2. Finanz-Kalkulator
            </span>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 500, 
              color: currentStep >= 3 ? 'black' : 'rgba(0, 0, 0, 0.50)' 
            }}>
              3. Gesamtbewertung
            </span>
          </div>
          <Progress value={progress} className="h-3" />
          <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: 'rgba(0, 0, 0, 0.60)' }}>
            Schritt {currentStep} von 3 • {Math.round(progress)}% abgeschlossen
          </div>
        </div>

        {/* Step 1: Quiz */}
        {currentStep === 1 && 
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '22.12px', 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                lineHeight: '36px', 
                color: 'black',
                marginBottom: '8px'
              }}>
                Schritt 1: Dein Profil-Assessment
              </h3>
              <p style={{ 
                fontSize: '16px', 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                lineHeight: '24px', 
                color: 'rgba(0, 0, 0, 0.70)'
              }}>
                Beantworte {quizQuestions.length} Fragen zu deinem beruflichen Hintergrund
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {quizQuestions.map((question, index) => {
                const isActive = index === currentQuestionIndex;
                const isCompleted = quizAnswers[question.id] !== undefined;
                const isDisabled = index > currentQuestionIndex;
                return <div key={question.id} style={{ 
                  padding: '32px', 
                  background: '#F5F5F5', 
                  boxShadow: '0px 3px 1px white inset',
                  borderRadius: '16px',
                  border: isActive ? '2px solid #2E7D32' : '2px solid transparent',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.5s ease',
                  opacity: isDisabled ? 0.5 : 1
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      padding: '12px', 
                      borderRadius: '12px', 
                      marginBottom: '12px',
                      background: isCompleted ? 'rgba(128, 0, 32, 0.20)' : 'rgba(46, 125, 50, 0.20)',
                      color: isCompleted ? '#800020' : '#2E7D32'
                    }}>
                      {question.icon}
                    </div>
                    <h3 style={{ 
                      fontSize: '16px', 
                      fontFamily: 'Inter', 
                      fontWeight: 500, 
                      color: 'black',
                      marginBottom: '8px'
                    }}>
                      {question.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {question.options.map((option, optionIndex) => 
                      <button 
                        key={optionIndex} 
                        onClick={() => !isDisabled && handleQuizAnswer(question.id, option.score)} 
                        disabled={isDisabled} 
                        style={{ 
                          width: '100%', 
                          padding: '12px', 
                          textAlign: 'left', 
                          borderRadius: '10px', 
                          border: quizAnswers[question.id] === option.score ? '1px solid #800020' : '1px solid rgba(0, 0, 0, 0.15)',
                          background: quizAnswers[question.id] === option.score ? 'rgba(128, 0, 32, 0.10)' : '#F5F5F5',
                          color: quizAnswers[question.id] === option.score ? '#800020' : 'black',
                          fontWeight: quizAnswers[question.id] === option.score ? 600 : 400,
                          cursor: isDisabled ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s ease',
                          fontSize: '14px',
                          fontFamily: 'Inter'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>{option.label}</span>
                          <ArrowRight style={{ width: '16px', height: '16px', opacity: 0.5 }} />
                        </div>
                      </button>
                    )}
                  </div>
                </div>;
              })}
            </div>

            {/* Live Quiz Score */}
            {quizScore > 0 && 
              <div style={{ 
                maxWidth: '400px', 
                margin: '32px auto 0 auto', 
                padding: '16px', 
                background: 'rgba(46, 125, 50, 0.10)', 
                borderRadius: '12px',
                border: '1px solid rgba(46, 125, 50, 0.20)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(0, 0, 0, 0.70)' }}>Quiz-Punkte:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy style={{ width: '16px', height: '16px', color: '#800020' }} />
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#2E7D32' }}>{quizScore} / 100</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }

        {/* Step 2: Calculator */}
        {currentStep === 2 && 
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '22.12px', 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                lineHeight: '36px', 
                color: 'black',
                marginBottom: '8px'
              }}>
                Schritt 2: Finanzielle Analyse
              </h3>
              <p style={{ 
                fontSize: '16px', 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                lineHeight: '24px', 
                color: 'rgba(0, 0, 0, 0.70)'
              }}>
                Berechne deinen finanziellen Vorteil durch professionelle Unterstützung
              </p>
            </div>

            <div style={{ 
              padding: '60px 40px 40px 40px', 
              background: '#F5F5F5', 
              boxShadow: '0px 3px 1px white inset', 
              borderRadius: '20px'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                {/* Current Salary */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: 'black',
                    marginBottom: '12px'
                  }}>
                    Aktuelles Gehalt (€/Jahr)
                  </label>
                  <div style={{ marginBottom: '12px' }}>
                    <Slider value={currentSalary} onValueChange={setCurrentSalary} max={150000} min={30000} step={5000} className="w-full" />
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '12px', 
                    background: '#F5F5F5', 
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.15)'
                  }}>
                    <span style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold', 
                      color: 'black'
                    }}>
                      €{currentSalary[0].toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Target Salary */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: 'black',
                    marginBottom: '12px'
                  }}>
                    Ziel-Gehalt Schweiz (€/Jahr)
                  </label>
                  <div style={{ marginBottom: '12px' }}>
                    <Slider value={targetSalary} onValueChange={setTargetSalary} max={200000} min={40000} step={5000} className="w-full" />
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '12px', 
                    background: 'rgba(46, 125, 50, 0.10)', 
                    borderRadius: '10px',
                    border: '1px solid rgba(46, 125, 50, 0.30)'
                  }}>
                    <span style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold', 
                      color: '#2E7D32'
                    }}>
                      €{targetSalary[0].toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Time to Move */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: 'black',
                    marginBottom: '12px'
                  }}>
                    Zeit bis zum Wechsel (Monate)
                  </label>
                  <div style={{ marginBottom: '12px' }}>
                    <Slider value={timeToMove} onValueChange={setTimeToMove} max={24} min={2} step={1} className="w-full" />
                  </div>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '12px', 
                    background: 'rgba(128, 0, 32, 0.10)', 
                    borderRadius: '10px',
                    border: '1px solid rgba(128, 0, 32, 0.30)'
                  }}>
                    <span style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold', 
                      color: '#800020'
                    }}>
                      {timeToMove[0]} Monate
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={handleCalculatorComplete}
                  style={{ 
                    padding: '11px 24px', 
                    background: 'black', 
                    boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)', 
                    borderRadius: '10px',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <Calculator style={{ width: '20px', height: '20px', color: 'white' }} />
                  <span style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontFamily: 'Inter', 
                    fontWeight: 500, 
                    lineHeight: '22.40px' 
                  }}>
                    Analyse abschließen
                  </span>
                  <ChevronRight style={{ width: '20px', height: '20px', color: 'white' }} />
                </button>
              </div>
            </div>
          </div>
        }

        {/* Step 3: Results */}
        {currentStep === 3 && showResults && 
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div style={{ 
                position: 'relative', 
                margin: '0 auto', 
                width: '120px', 
                height: '120px', 
                marginBottom: '24px'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  borderRadius: '50%', 
                  background: 'rgba(46, 125, 50, 0.20)'
                }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: '16px', 
                  borderRadius: '50%', 
                  background: '#F5F5F5', 
                  border: '4px solid #2E7D32',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <span style={{ 
                    fontSize: '32px', 
                    fontWeight: 'bold', 
                    color: 'black'
                  }}>
                    {animatedTotalScore}%
                  </span>
                </div>
              </div>
              
              <h3 style={{ 
                fontSize: '28px', 
                fontFamily: 'Inter', 
                fontWeight: 'bold', 
                color: 'black',
                marginBottom: '12px'
              }}>
                Deine Swiss-Readiness Bewertung
              </h3>
              
              <div style={{ 
                fontSize: '18px', 
                padding: '8px 16px', 
                background: readinessLevel.label === 'Exzellent' ? 'rgba(46, 125, 50, 0.20)' : 'rgba(128, 0, 32, 0.20)',
                color: readinessLevel.label === 'Exzellent' ? '#2E7D32' : '#800020',
                borderRadius: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Award style={{ width: '20px', height: '20px' }} />
                {readinessLevel.label}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '44px' }}>
              {/* Quiz Score */}
              <div style={{ 
                padding: '32px', 
                background: '#F5F5F5', 
                boxShadow: '0px 3px 1px white inset', 
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(46, 125, 50, 0.30)'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 16px auto', 
                  borderRadius: '50%', 
                  background: 'rgba(46, 125, 50, 0.20)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <Trophy style={{ width: '32px', height: '32px', color: '#2E7D32' }} />
                </div>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'Inter', 
                  fontWeight: 500, 
                  color: 'black',
                  marginBottom: '8px'
                }}>
                  Profil-Score
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 'bold', 
                  color: '#2E7D32',
                  marginBottom: '8px'
                }}>
                  {animatedQuizScore} Punkte
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(0, 0, 0, 0.70)'
                }}>
                  Basierend auf deinem beruflichen Profil
                </p>
              </div>

              {/* Financial Benefit */}
              <div style={{ 
                padding: '32px', 
                background: '#F5F5F5', 
                boxShadow: '0px 3px 1px white inset', 
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(128, 0, 32, 0.30)'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 16px auto', 
                  borderRadius: '50%', 
                  background: 'rgba(128, 0, 32, 0.20)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <Euro style={{ width: '32px', height: '32px', color: '#800020' }} />
                </div>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'Inter', 
                  fontWeight: 500, 
                  color: 'black',
                  marginBottom: '8px'
                }}>
                  Finanzieller Vorteil
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 'bold', 
                  color: financialBenefit >= 0 ? '#2E7D32' : '#800020',
                  marginBottom: '8px'
                }}>
                  {financialBenefit >= 0 ? '+' : '-'}€{animatedFinancialBenefit}
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(0, 0, 0, 0.70)'
                }}>
                  Durch professionelle Begleitung
                </p>
              </div>

              {/* Combined Score */}
              <div style={{ 
                padding: '32px', 
                background: '#F5F5F5', 
                boxShadow: '0px 3px 1px white inset', 
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(0, 0, 0, 0.20)'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  margin: '0 auto 16px auto', 
                  borderRadius: '50%', 
                  background: 'rgba(46, 125, 50, 0.30)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <Star style={{ width: '32px', height: '32px', color: 'black' }} />
                </div>
                <h4 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'Inter', 
                  fontWeight: 500, 
                  color: 'black',
                  marginBottom: '8px'
                }}>
                  Swiss-Readiness
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 'bold', 
                  color: 'black',
                  marginBottom: '8px'
                }}>
                  {animatedTotalScore}%
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(0, 0, 0, 0.70)'
                }}>
                  Gesamtbewertung für deine Schweiz-Pläne
                </p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ maxWidth: '600px', margin: '0 auto 32px auto' }}>
                <h3 style={{ 
                  fontSize: '22.12px', 
                  fontFamily: 'Inter', 
                  fontWeight: 500, 
                  lineHeight: '36px', 
                  color: 'black',
                  marginBottom: '16px'
                }}>
                  Bereit für den nächsten Schritt?
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  fontFamily: 'Inter', 
                  fontWeight: 400, 
                  lineHeight: '24px', 
                  color: 'rgba(0, 0, 0, 0.70)'
                }}>
                  Mit deinem Swiss-Readiness Score von {Math.round(swissReadinessPercentage)}% hast du {swissReadinessPercentage >= 70 ? 'exzellente' : 'gute'} Voraussetzungen für eine erfolgreiche Karriere in der Schweiz.
                </p>
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                justifyContent: 'center', 
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={handleDetailedAnalysis}
                  style={{ 
                    padding: '11px 24px', 
                    background: 'black', 
                    boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)', 
                    borderRadius: '10px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <Target style={{ width: '20px', height: '20px', color: 'white' }} />
                  <span style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontFamily: 'Inter', 
                    fontWeight: 500, 
                    lineHeight: '22.40px' 
                  }}>
                    Detaillierte Analyse anfordern
                  </span>
                </button>
              </div>

              <p style={{ 
                fontSize: '14px', 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                lineHeight: '24px', 
                color: 'black',
                opacity: 0.8,
                marginTop: '16px'
              }}>
                Kostenlos • Unverbindlich • Sofort verfügbar
              </p>
            </div>
          </div>
        }
      </div>
    </section>;
};