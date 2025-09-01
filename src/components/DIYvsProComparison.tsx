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
  return;
};