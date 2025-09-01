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
  return <section className="py-20 bg-[#FAFAFA] text-[#111827] relative overflow-hidden animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-white border-[#D1D5DB] text-[#6B7280]">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Begrenzte Verfügbarkeit
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#111827]">
            Jeder Tag kostet dich 
            <span className="text-gray-900"> Geld!</span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Während du zögerst, verpasst du täglich bares Geld und wertvolle Chancen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Live Money Counter */}
          <Card className="p-8 mb-8 bg-white border border-[#D1D5DB] shadow-sm rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingDown className="w-6 h-6 text-[#B91C1C] animate-bounce" />
                <Badge variant="outline" className="bg-white border-[#D1D5DB] text-[#6B7280]">
                  Live Counter
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#111827]">
                Du verpasst jeden Tag:
              </h3>
              
              <div className="text-6xl md:text-7xl font-black mb-4 text-[#111827] animate-pulse-gentle">
                €{dailyLoss}
              </div>
              
              <p className="text-lg text-[#6B7280] mb-6">
                Basierend auf dem durchschnittlichen Mehrverdienst unserer Kunden
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-bold text-[#B91C1C]">€{(dailyLoss * 7).toLocaleString()}</div>
                  <div className="text-sm text-[#6B7280]">pro Woche</div>
                </div>
                <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-bold text-[#B91C1C]">€{(dailyLoss * 30).toLocaleString()}</div>
                  <div className="text-sm text-[#6B7280]">pro Monat</div>
                </div>
                <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-bold text-[#B91C1C]">€{(dailyLoss * 90).toLocaleString()}</div>
                  <div className="text-sm text-[#6B7280]">pro Quartal</div>
                </div>
                <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                  <div className="text-xl font-bold text-[#B91C1C]">€{(dailyLoss * 365).toLocaleString()}</div>
                  <div className="text-sm text-[#6B7280]">pro Jahr</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Countdown Timer */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white border border-[#D1D5DB] shadow-sm rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#16A34A]" />
                  <Badge variant="outline" className="bg-white border-[#D1D5DB] text-[#6B7280]">
                    Aktionsende
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-[#111827]">
                  Kostenlose Beratung endet in:
                </h3>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-black text-[#16A34A]">{timeLeft.days}</div>
                    <div className="text-xs text-[#6B7280]">Tage</div>
                  </div>
                  <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-black text-[#16A34A]">{timeLeft.hours}</div>
                    <div className="text-xs text-[#6B7280]">Std</div>
                  </div>
                  <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-black text-[#16A34A]">{timeLeft.minutes}</div>
                    <div className="text-xs text-[#6B7280]">Min</div>
                  </div>
                  <div className="bg-white border border-[#D1D5DB] rounded-lg p-3 shadow-sm">
                    <div className="text-2xl font-black text-[#16A34A] animate-pulse">{timeLeft.seconds}</div>
                    <div className="text-xs text-[#6B7280]">Sek</div>
                  </div>
                </div>
                
                <p className="text-sm text-[#6B7280]">
                  Danach regulärer Preis: €599
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#D1D5DB] shadow-sm rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#B91C1C]" />
                  <Badge variant="outline" className="bg-white border-[#D1D5DB] text-[#6B7280]">
                    Begrenzte Plätze
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-[#111827]">
                  Nur noch {spotsLeft} Plätze verfügbar
                </h3>
                
                <div className="mb-4">
                  <div className="text-4xl font-black text-[#B91C1C] mb-2">{spotsLeft}</div>
                  <div className="text-sm text-[#6B7280]">von 10 Plätzen frei</div>
                </div>
                
                <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#B91C1C] to-[#DC2626] transition-all duration-500" style={{
                  width: `${(10 - spotsLeft) / 10 * 100}%`
                }} />
                </div>
                
                <p className="text-sm text-[#6B7280]">
                  Persönliche 1:1 Beratung mit unserem Experten-Team
                </p>
              </div>
            </Card>
          </div>

          {/* Urgency Messages */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-white border border-[#D1D5DB] rounded-lg shadow-sm">
              <Euro className="w-8 h-8 text-[#16A34A] mx-auto mb-2" />
              <div className="text-lg font-bold text-[#16A34A] mb-1">€67.400</div>
              <div className="text-sm text-[#6B7280]">Ø Mehrverdienst pro Jahr</div>
            </div>
            
            <div className="text-center p-4 bg-white border border-[#D1D5DB] rounded-lg shadow-sm">
              <Timer className="w-8 h-8 text-[#16A34A] mx-auto mb-2" />
              <div className="text-lg font-bold text-[#16A34A] mb-1">2-4 Monate</div>
              <div className="text-sm text-[#6B7280]">Bis zum neuen Job</div>
            </div>
            
            <div className="text-center p-4 bg-white border border-[#D1D5DB] rounded-lg shadow-sm">
              <Calendar className="w-8 h-8 text-[#16A34A] mx-auto mb-2" />
              <div className="text-lg font-bold text-[#16A34A] mb-1">847+</div>
              <div className="text-sm text-[#6B7280]">Erfolgreiche Wechsel</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#111827]">
              Stoppe den Geld-Verlust jetzt!
            </h3>
            <p className="text-lg text-[#6B7280] mb-6">
              Sichere dir einen der letzten {spotsLeft} Beratungsplätze und starte deine Schweiz-Karriere
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SwissButton variant="swiss" size="xl" className="bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg">
                <Zap className="w-5 h-5" />
                JETZT kostenlose Beratung sichern
              </SwissButton>
              
              <SwissButton variant="outline" size="xl" className="border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white">
                Alternative: Mehr erfahren
              </SwissButton>
            </div>
            
            <p className="text-sm text-[#6B7280] mt-4">
              100% kostenfrei • Unverbindlich • Sofort verfügbar
            </p>
          </div>
        </div>
      </div>
    </section>;
};