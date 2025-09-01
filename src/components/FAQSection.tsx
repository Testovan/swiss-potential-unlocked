import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SwissButton } from "./SwissButton";
import { HelpCircle, MessageCircle, CheckCircle2, Euro, Clock, Shield, Users, Briefcase, Home, FileText, Calculator, Phone } from "lucide-react";
const faqData = [{
  id: "faq-1",
  question: "Wie lange dauert der komplette Prozess bis zum Job in der Schweiz?",
  answer: "Im Durchschnitt dauert es 2-4 Monate vom ersten Gespräch bis zur Vertragsunterzeichnung. Das hängt von deiner Branche, Erfahrung und aktuellen Marktlage ab. Wir haben bereits Kunden in nur 6 Wochen vermittelt, andere brauchten 6 Monate. Wichtig: Mit unserer Unterstützung geht es 60-80% schneller als alleine.",
  icon: <Clock className="w-5 h-5" />
}, {
  id: "faq-2",
  question: "Was kostet die SwissPats Beratung und wann muss ich zahlen?",
  answer: "Die Erstberatung ist kostenlos und unverbindlich. Unsere Dienstleistungen sind erfolgsbasiert - du zahlst nur, wenn du tatsächlich einen Job in der Schweiz bekommst. Die Kosten variieren je nach Service-Paket zwischen €1.500-€4.500. Viele Kunden haben ihre Investition bereits im ersten Monat durch das höhere Schweizer Gehalt wieder drin.",
  icon: <Euro className="w-5 h-5" />
}, {
  id: "faq-3",
  question: "Kann SwissPats auch bei Visa und Aufenthaltsgenehmigung helfen?",
  answer: "Ja, absolut! Wir begleiten dich durch den gesamten Visa- und Bewilligungsprozess. Deutsche Staatsangehörige haben es einfacher (EU-Abkommen), aber auch hier gibt es viele Fallstricke. Wir kennen alle Behörden, Fristen und Anforderungen und sorgen dafür, dass alles reibungslos läuft.",
  icon: <FileText className="w-5 h-5" />
}, {
  id: "faq-4",
  question: "In welchen Branchen vermittelt SwissPats hauptsächlich?",
  answer: "Unsere Stärken liegen in IT & Tech, Ingenieurswesen, Finanzen, Medizin/Pharma, und Consulting. Aber auch in anderen Bereichen wie Marketing, Sales oder HR haben wir bereits erfolgreich vermittelt. Wichtig ist deine Qualifikation und Berufserfahrung - die Schweiz sucht qualifizierte Fachkräfte in fast allen Bereichen.",
  icon: <Briefcase className="w-5 h-5" />
}, {
  id: "faq-5",
  question: "Hilft SwissPats auch bei der Wohnungssuche und dem Umzug?",
  answer: "Ja, wir unterstützen auch bei der Wohnungssuche und geben dir wertvolle Tipps für den Umzug. Der Schweizer Wohnungsmarkt ist herausfordernd, aber mit den richtigen Kontakten und Strategien findest du schneller eine passende Wohnung. Wir haben Partnerschaften mit Relocation-Services und Immobilienmaklern.",
  icon: <Home className="w-5 h-5" />
}, {
  id: "faq-6",
  question: "Wie realistisch ist ein Gehaltsplus von €67.400 pro Jahr?",
  answer: "Das ist der Durchschnittswert unserer bisherigen Kunden. Je nach Branche und Position sind sogar höhere Steigerungen möglich. Ein IT-Spezialist kann oft €80.000+ mehr verdienen, ein Ingenieur €60.000+. Wichtig: Wir helfen dir bei der optimalen Gehaltsverhandlung, denn viele Deutsche verkaufen sich unter Wert.",
  icon: <Calculator className="w-5 h-5" />
}, {
  id: "faq-7",
  question: "Was passiert, wenn ich nach 6 Monaten keinen Job finde?",
  answer: "Das ist bei unseren Kunden extrem selten (unter 5%), aber falls es passiert, arbeiten wir weiter mit dir - ohne zusätzliche Kosten. Unser Erfolg hängt von deinem Erfolg ab. Außerdem analysieren wir bereits im Erstgespräch deine Marktchancen realistisch und sagen dir ehrlich, ob und wie deine Schweiz-Pläne umsetzbar sind.",
  icon: <Shield className="w-5 h-5" />
}, {
  id: "faq-8",
  question: "Kann ich SwissPats auch nutzen, wenn ich bereits in der Schweiz lebe?",
  answer: "Absolut! Viele unserer Kunden sind bereits in der Schweiz und wollen den nächsten Karriereschritt machen oder das Gehalt optimieren. Oft können wir auch bei einem Jobwechsel innerhalb der Schweiz 20-40% Gehaltsplus erreichen. Unsere Insider-Kontakte helfen auch bei internen Wechseln.",
  icon: <Users className="w-5 h-5" />
}];
export const FAQSection = () => {
  return <section className="py-20 bg-gradient-to-br from-charcoal-black to-swiss-navy-dark text-off-white bg-slate-100 rounded-none">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-alpine-green/20 text-alpine-green border-alpine-green/30">
            <HelpCircle className="w-4 h-4 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Alle wichtigen
            <span className="text-alpine-green"> Antworten</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Die häufigsten Fragen unserer Kunden - ehrlich und transparent beantwortet
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-off-white/5 backdrop-blur-sm border border-off-white/10 p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map(faq => <AccordionItem key={faq.id} value={faq.id} className="border-b border-off-white/20 last:border-b-0">
                  <AccordionTrigger className="text-left hover:text-alpine-green transition-colors py-6 text-off-white hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="text-alpine-green flex-shrink-0">
                        {faq.icon}
                      </div>
                      <span className="font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-off-white/80 pb-6 pl-8">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-alpine-green/10 border border-alpine-green/30">
            <CheckCircle2 className="w-8 h-8 text-alpine-green mx-auto mb-3" />
            <div className="text-2xl font-black text-alpine-green mb-1">95%</div>
            <div className="text-sm text-off-white/70">Erfolgsquote</div>
          </Card>
          
          <Card className="p-6 text-center bg-burgundy/10 border border-burgundy/30">
            <Users className="w-8 h-8 text-burgundy mx-auto mb-3" />
            <div className="text-2xl font-black text-burgundy mb-1">847+</div>
            <div className="text-sm text-off-white/70">Zufriedene Kunden</div>
          </Card>
          
          <Card className="p-6 text-center bg-off-white/10 border border-off-white/30">
            <Clock className="w-8 h-8 text-off-white mx-auto mb-3" />
            <div className="text-2xl font-black text-off-white mb-1">3,2</div>
            <div className="text-sm text-off-white/70">Monate ∅ bis Job</div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Noch Fragen? Lass uns sprechen!
            </h3>
            <p className="text-off-white/70 mb-6">
              In einem kostenlosen 15-minütigen Gespräch klären wir alle deine individuellen Fragen
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SwissButton variant="burgundy" size="xl">
              <Phone className="w-5 h-5" />
              Kostenlose Beratung buchen
            </SwissButton>
            <SwissButton variant="outline" size="xl">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat starten
            </SwissButton>
          </div>
          
          <p className="text-sm text-off-white/60 mt-4">
            Keine Verkaufsgespräche • Ehrliche Einschätzung • Sofort Klarheit
          </p>
        </div>
      </div>
    </section>;
};