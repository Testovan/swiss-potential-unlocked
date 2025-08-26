import { useState, useEffect } from "react";
import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  TrendingDown, 
  Users, 
  Calendar,
  AlertTriangle,
  Zap,
  Euro,
  Timer
} from "lucide-react";

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
        let { days, hours, minutes, seconds } = prev;
        
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
        
        return { days, hours, minutes, seconds };
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

  return (
    <section className="py-20 bg-gradient-to-br from-burgundy via-burgundy-dark to-charcoal-black text-off-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,125,50,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(128,0,32,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-off-white/20 text-off-white border-off-white/30 animate-pulse-gentle">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Begrenzte Verfügbarkeit
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Jeder Tag kostet dich 
            <span className="text-alpine-green"> Geld!</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Während du zögerst, verpasst du täglich bares Geld und wertvolle Chancen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Live Money Counter */}
          <Card className="p-8 mb-8 bg-gradient-to-r from-red-500/20 to-burgundy/30 border-2 border-red-400/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingDown className="w-6 h-6 text-red-400 animate-bounce" />
                <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-400/50">
                  Live Counter
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-off-white">
                Du verpasst jeden Tag:
              </h3>
              
              <div className="text-6xl md:text-7xl font-black mb-4 text-red-400 animate-pulse-gentle">
                €{dailyLoss}
              </div>
              
              <p className="text-lg text-off-white/80 mb-6">
                Basierend auf dem durchschnittlichen Mehrverdienst unserer Kunden
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-off-white/10 rounded-lg p-3">
                  <div className="text-xl font-bold text-red-400">€{(dailyLoss * 7).toLocaleString()}</div>
                  <div className="text-sm text-off-white/70">pro Woche</div>
                </div>
                <div className="bg-off-white/10 rounded-lg p-3">
                  <div className="text-xl font-bold text-red-400">€{(dailyLoss * 30).toLocaleString()}</div>
                  <div className="text-sm text-off-white/70">pro Monat</div>
                </div>
                <div className="bg-off-white/10 rounded-lg p-3">
                  <div className="text-xl font-bold text-red-400">€{(dailyLoss * 90).toLocaleString()}</div>
                  <div className="text-sm text-off-white/70">pro Quartal</div>
                </div>
                <div className="bg-off-white/10 rounded-lg p-3">
                  <div className="text-xl font-bold text-red-400">€{(dailyLoss * 365).toLocaleString()}</div>
                  <div className="text-sm text-off-white/70">pro Jahr</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Countdown Timer */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-gradient-to-br from-alpine-green/20 to-alpine-green/10 border border-alpine-green/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-alpine-green" />
                  <Badge variant="secondary" className="bg-alpine-green/20 text-alpine-green border-alpine-green/30">
                    Aktionsende
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-off-white">
                  Kostenlose Beratung endet in:
                </h3>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-off-white/10 rounded-lg p-3">
                    <div className="text-2xl font-black text-alpine-green">{timeLeft.days}</div>
                    <div className="text-xs text-off-white/70">Tage</div>
                  </div>
                  <div className="bg-off-white/10 rounded-lg p-3">
                    <div className="text-2xl font-black text-alpine-green">{timeLeft.hours}</div>
                    <div className="text-xs text-off-white/70">Std</div>
                  </div>
                  <div className="bg-off-white/10 rounded-lg p-3">
                    <div className="text-2xl font-black text-alpine-green">{timeLeft.minutes}</div>
                    <div className="text-xs text-off-white/70">Min</div>
                  </div>
                  <div className="bg-off-white/10 rounded-lg p-3">
                    <div className="text-2xl font-black text-alpine-green animate-pulse">{timeLeft.seconds}</div>
                    <div className="text-xs text-off-white/70">Sek</div>
                  </div>
                </div>
                
                <p className="text-sm text-off-white/70">
                  Danach regulärer Preis: €599
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-burgundy/20 to-burgundy/10 border border-burgundy/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-burgundy" />
                  <Badge variant="secondary" className="bg-burgundy/20 text-burgundy border-burgundy/30">
                    Begrenzte Plätze
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-off-white">
                  Nur noch {spotsLeft} Plätze verfügbar
                </h3>
                
                <div className="mb-4">
                  <div className="text-4xl font-black text-burgundy mb-2">{spotsLeft}</div>
                  <div className="text-sm text-off-white/70">von 10 Plätzen frei</div>
                </div>
                
                <div className="bg-off-white/10 rounded-full h-3 mb-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-burgundy to-red-500 transition-all duration-500"
                    style={{ width: `${((10 - spotsLeft) / 10) * 100}%` }}
                  />
                </div>
                
                <p className="text-sm text-off-white/70">
                  Persönliche 1:1 Beratung mit unserem Experten-Team
                </p>
              </div>
            </Card>
          </div>

          {/* Urgency Messages */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-off-white/5 rounded-lg border border-off-white/20">
              <Euro className="w-8 h-8 text-alpine-green mx-auto mb-2" />
              <div className="text-lg font-bold text-off-white mb-1">€67.400</div>
              <div className="text-sm text-off-white/70">Ø Mehrverdienst pro Jahr</div>
            </div>
            
            <div className="text-center p-4 bg-off-white/5 rounded-lg border border-off-white/20">
              <Timer className="w-8 h-8 text-alpine-green mx-auto mb-2" />
              <div className="text-lg font-bold text-off-white mb-1">2-4 Monate</div>
              <div className="text-sm text-off-white/70">Bis zum neuen Job</div>
            </div>
            
            <div className="text-center p-4 bg-off-white/5 rounded-lg border border-off-white/20">
              <Calendar className="w-8 h-8 text-alpine-green mx-auto mb-2" />
              <div className="text-lg font-bold text-off-white mb-1">847+</div>
              <div className="text-sm text-off-white/70">Erfolgreiche Wechsel</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-off-white">
              Stoppe den Geld-Verlust jetzt!
            </h3>
            <p className="text-lg text-off-white/80 mb-6">
              Sichere dir einen der letzten {spotsLeft} Beratungsplätze und starte deine Schweiz-Karriere
            </p>
            
            <SwissButton 
              variant="burgundy" 
              size="xl" 
              className="mb-4 bg-gradient-to-r from-alpine-green to-alpine-green-light hover:from-alpine-green-light hover:to-alpine-green shadow-success animate-pulse-gentle"
            >
              <Zap className="w-5 h-5" />
              JETZT kostenlose Beratung sichern
            </SwissButton>
            
            <p className="text-sm text-off-white/60">
              100% kostenfrei • Unverbindlich • Sofort verfügbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};