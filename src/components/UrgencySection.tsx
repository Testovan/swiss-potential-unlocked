import { useState, useEffect } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingDown, Users, Calendar, AlertTriangle, Zap, Euro, Timer } from "lucide-react";
export const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });
  const [dailyLoss, setDailyLoss] = useState(184);
  const [spotsLeft, setSpotsLeft] = useState(3);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let {
          days,
          hours,
          minutes,
          seconds
        } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return {
          days,
          hours,
          minutes,
          seconds
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animated daily loss counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDailyLoss(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section style={{
    padding: '100px 0',
    background: '#F5F5F5',
    overflow: 'hidden'
  }}>
      <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }}>
        {/* Header */}
        <div style={{
        textAlign: 'center',
        marginBottom: '44px'
      }}>
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
            <AlertTriangle style={{
            width: '16px',
            height: '20px',
            color: 'rgba(0, 0, 0, 0.40)'
          }} />
            <span style={{
            color: 'black',
            fontSize: '11.44px',
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: '14.40px'
          }}>
              BEGRENZTE VERFÜGBARKEIT
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
            Jeder Tag kostet dich Geld!
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
            Während du zögerst, verpasst du täglich bares Geld und wertvolle Chancen
          </p>
        </div>

        <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
          {/* Live Money Counter */}
          <div style={{
          padding: '60px 40px 40px 40px',
          background: '#F5F5F5',
          boxShadow: '0px 3px 1px white inset',
          borderRadius: '20px',
          marginBottom: '24px'
        }}>
            <div style={{
            textAlign: 'center'
          }}>
              <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
                <TrendingDown style={{
                width: '24px',
                height: '24px',
                color: '#B91C1C'
              }} />
                <span style={{
                padding: '6px 12px',
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                borderRadius: '60px',
                color: 'black',
                fontSize: '11.44px',
                fontFamily: 'Inter',
                fontWeight: 500,
                lineHeight: '14.40px'
              }}>
                  Live Counter
                </span>
              </div>
              
              <h3 style={{
              fontSize: '22.12px',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '36px',
              color: 'black',
              marginBottom: '16px'
            }}>
                Du verpasst jeden Tag:
              </h3>
              
              <div style={{
              fontSize: '60px',
              fontFamily: 'Inter',
              fontWeight: 500,
              color: 'black',
              marginBottom: '16px'
            }}>
                €{dailyLoss}
              </div>
              
              <p style={{
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '24px',
              color: 'black',
              opacity: 0.8,
              marginBottom: '24px'
            }}>
                Basierend auf dem durchschnittlichen Mehrverdienst unserer Kunden
              </p>
              
              <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}>
                <div style={{
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                  <div style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#B91C1C'
                }}>€{(dailyLoss * 7).toLocaleString()}</div>
                  <div style={{
                  fontSize: '12px',
                  color: 'black',
                  opacity: 0.6
                }}>pro Woche</div>
                </div>
                <div style={{
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                  <div style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#B91C1C'
                }}>€{(dailyLoss * 30).toLocaleString()}</div>
                  <div style={{
                  fontSize: '12px',
                  color: 'black',
                  opacity: 0.6
                }}>pro Monat</div>
                </div>
                <div style={{
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                  <div style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#B91C1C'
                }}>€{(dailyLoss * 90).toLocaleString()}</div>
                  <div style={{
                  fontSize: '12px',
                  color: 'black',
                  opacity: 0.6
                }}>pro Quartal</div>
                </div>
                <div style={{
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                  <div style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#B91C1C'
                }}>€{(dailyLoss * 365).toLocaleString()}</div>
                  <div style={{
                  fontSize: '12px',
                  color: 'black',
                  opacity: 0.6
                }}>pro Jahr</div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
            

            <div style={{
            padding: '32px',
            background: '#F5F5F5',
            boxShadow: '0px 3px 1px white inset',
            borderRadius: '16px'
          }}>
              <div style={{
              textAlign: 'center'
            }}>
                <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}>
                  <Users style={{
                  width: '16px',
                  height: '20px',
                  color: 'rgba(0, 0, 0, 0.40)'
                }} />
                  <span style={{
                  color: 'black',
                  fontSize: '11.44px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  lineHeight: '14.40px'
                }}>
                    BEGRENZTE PLÄTZE
                  </span>
                </div>
                
                <h3 style={{
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '24px',
                color: 'black',
                marginBottom: '16px'
              }}>
                  Nur noch {spotsLeft} Plätze verfügbar
                </h3>
                
                <div style={{
                marginBottom: '16px'
              }}>
                  <div style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#B91C1C',
                  marginBottom: '8px'
                }}>{spotsLeft}</div>
                  <div style={{
                  fontSize: '14px',
                  color: 'black',
                  opacity: 0.6
                }}>von 10 Plätzen frei</div>
                </div>
                
                <div style={{
                background: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                height: '12px',
                marginBottom: '16px',
                overflow: 'hidden'
              }}>
                  <div style={{
                  height: '100%',
                  background: 'linear-gradient(to right, #B91C1C, #DC2626)',
                  width: `${(10 - spotsLeft) / 10 * 100}%`,
                  borderRadius: '20px',
                  transition: 'all 0.5s ease'
                }} />
                </div>
                
                <p style={{
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 400,
                lineHeight: '24px',
                color: 'black',
                opacity: 0.8
              }}>
                  Persönliche 1:1 Beratung mit unserem Experten-Team
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{
          textAlign: 'center'
        }}>
            <h3 style={{
            fontSize: '22.12px',
            fontFamily: 'Inter',
            fontWeight: 500,
            lineHeight: '36px',
            color: 'black',
            marginBottom: '16px'
          }}>
              Stoppe den Geld-Verlust jetzt!
            </h3>
            <p style={{
            fontSize: '16px',
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: '24px',
            color: 'black',
            opacity: 0.8,
            marginBottom: '24px'
          }}>
              Sichere dir einen der letzten {spotsLeft} Beratungsplätze und starte deine Schweiz-Karriere
            </p>
            
            <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
              <button style={{
              padding: '11px 24px',
              background: 'black',
              boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)',
              borderRadius: '10px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
                <Zap style={{
                width: '20px',
                height: '20px',
                color: 'white'
              }} />
                <span style={{
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 500,
                lineHeight: '22.40px'
              }}>
                  JETZT kostenlose Beratung sichern
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
              100% kostenfrei • Unverbindlich • Sofort verfügbar
            </p>
          </div>
        </div>
      </div>
    </section>;
};