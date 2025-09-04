import { useState } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { X, Check, Calculator, Clock, TrendingDown, TrendingUp, AlertTriangle, CheckCircle2, Euro, Timer, Target } from "lucide-react";
const comparisonData = [{
  category: "Erfolgsrate",
  diy: {
    value: "15-25%",
    status: "poor",
    icon: <TrendingDown className="w-5 h-5" />
  },
  professional: {
    value: "85-95%",
    status: "excellent",
    icon: <TrendingUp className="w-5 h-5" />
  }
}, {
  category: "Zeitaufwand",
  diy: {
    value: "6-18 Monate",
    status: "poor",
    icon: <Clock className="w-5 h-5" />
  },
  professional: {
    value: "2-4 Monate",
    status: "excellent",
    icon: <Timer className="w-5 h-5" />
  }
}, {
  category: "Gehaltsverhandlung",
  diy: {
    value: "Oft unter Wert",
    status: "poor",
    icon: <TrendingDown className="w-5 h-5" />
  },
  professional: {
    value: "Optimiert",
    status: "excellent",
    icon: <TrendingUp className="w-5 h-5" />
  }
}, {
  category: "Bürokratie & Visa",
  diy: {
    value: "Oft Fehler",
    status: "poor",
    icon: <X className="w-5 h-5" />
  },
  professional: {
    value: "Professionell",
    status: "excellent",
    icon: <Check className="w-5 h-5" />
  }
}, {
  category: "Networking",
  diy: {
    value: "Begrenzt",
    status: "poor",
    icon: <X className="w-5 h-5" />
  },
  professional: {
    value: "Insider-Kontakte",
    status: "excellent",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
}, {
  category: "Stresslevel",
  diy: {
    value: "Hoch",
    status: "poor",
    icon: <AlertTriangle className="w-5 h-5" />
  },
  professional: {
    value: "Entspannt",
    status: "excellent",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
}];
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
  return <section style={{
    padding: '80px 0',
    background: 'white',
    position: 'relative'
  }}>
      <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    }}>
        {/* Header */}
        <div style={{
        textAlign: 'center',
        marginBottom: '64px'
      }}>
          <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '16px',
          lineHeight: '1.2'
        }}>
            DIY vs. Professionelle Begleitung
          </h2>
          <p style={{
          fontSize: '20px',
          color: '#666',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
            Der Unterschied ist deutlicher als du denkst
          </p>
        </div>

        {/* Comparison Cards */}
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginBottom: '48px'
      }}>
          {/* DIY Card */}
          <Card style={{
            background: '#FFFFFF',
            border: '1px solid hsl(var(--border))',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              background: '#F8F9FA',
              color: '#1a1a1a',
              padding: '24px',
              textAlign: 'center'
            }}>
              <X style={{
                width: '32px',
                height: '32px',
                margin: '0 auto 12px',
                color: '#6B7280'
              }} />
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '4px'
              }}>
                Do-It-Yourself
              </h3>
              <p style={{
                fontSize: '16px',
                opacity: '0.7'
              }}>
                Alleine durchkämpfen
              </p>
            </div>
            
            <div style={{
              padding: '24px'
            }}>
              {comparisonData.map((item, index) => <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: index < comparisonData.length - 1 ? '1px solid rgba(107, 114, 128, 0.2)' : 'none'
              }}>
                <div style={{
                  color: '#6B7280',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <X className="w-5 h-5" />
                </div>
                <div style={{
                  flex: 1
                }}>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '4px'
                  }}>
                    {item.category}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1a1a1a'
                  }}>
                    {item.diy.value}
                  </div>
                </div>
              </div>)}
              
              {/* Special cost section */}
              <div style={{
                marginTop: '24px',
                padding: '20px',
                background: '#F5F5F5',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>€13'250</div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.4'
                }}>
                  Entgangenes Einkommen + Stress + Fehlerkosten
                </div>
              </div>
            </div>
          </Card>

          {/* Professional Card */}
          <Card style={{
          background: '#ECF8F1',
          border: '1px solid #2ECC71',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }} onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }} onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
            <div style={{
            background: '#2ECC71',
            color: 'white',
            padding: '24px',
            textAlign: 'center'
          }}>
              <CheckCircle2 style={{
              width: '32px',
              height: '32px',
              margin: '0 auto 12px'
            }} />
              <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '4px'
            }}>
                SwissPats Professional
              </h3>
              <p style={{
              fontSize: '16px',
              opacity: '0.9'
            }}>
                Experten-Begleitung
              </p>
            </div>
            
            <div style={{
            padding: '24px'
          }}>
              {comparisonData.map((item, index) => <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 0',
              borderBottom: index < comparisonData.length - 1 ? '1px solid rgba(46, 204, 113, 0.2)' : 'none'
            }}>
                  <div style={{
                color: '#2ECC71',
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center'
              }}>
                    {item.professional.icon}
                  </div>
                  <div style={{
                flex: 1
              }}>
                    <div style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '4px'
                }}>
                      {item.category}
                    </div>
                    <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2ECC71'
                }}>
                      {item.professional.value}
                    </div>
                  </div>
                </div>)}
              
              {/* Special cost section */}
              <div style={{
              marginTop: '24px',
              padding: '20px',
              background: 'rgba(46, 204, 113, 0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
                <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#2ECC71',
                marginBottom: '8px'
              }}>€6'500</div>
                <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4'
              }}>
                  Transparente Beratungskosten
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Text Section */}
        <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
          <h3 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '16px'
        }}>
            Die Rechnung ist eindeutig
          </h3>
          <p style={{
          fontSize: '18px',
          color: '#666',
          lineHeight: '1.6'
        }}>
            Professionelle Begleitung zahlt sich aus. Spare Zeit, Nerven und am Ende auch Geld.
          </p>
        </div>
      </div>
    </section>;
};