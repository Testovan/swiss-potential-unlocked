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
            <HelpCircle style={{ width: '16px', height: '20px', color: 'rgba(0, 0, 0, 0.40)' }} />
            <span style={{ 
              color: 'black', 
              fontSize: '11.44px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '14.40px' 
            }}>
              HÄUFIGE FRAGEN
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
            Alle wichtigen Antworten
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
            Die häufigsten Fragen unserer Kunden - ehrlich und transparent beantwortet
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto 44px auto' }}>
          <div style={{ 
            padding: '60px 40px 40px 40px', 
            background: '#F5F5F5', 
            boxShadow: '0px 3px 1px white inset', 
            borderRadius: '20px'
          }}>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map(faq => <AccordionItem key={faq.id} value={faq.id} style={{ 
                borderBottom: '1px solid rgba(0, 0, 0, 0.15)', 
                paddingBottom: '0' 
              }}>
                  <AccordionTrigger style={{ 
                    textAlign: 'left',
                    padding: '24px 0',
                    color: 'black',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ color: 'rgba(0, 0, 0, 0.60)', flexShrink: 0 }}>
                        {faq.icon}
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent style={{ 
                    color: 'rgba(0, 0, 0, 0.80)', 
                    paddingBottom: '24px', 
                    paddingLeft: '32px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    lineHeight: '22px'
                  }}>
                    <p style={{ lineHeight: '1.6' }}>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '22.12px', 
            fontFamily: 'Inter', 
            fontWeight: 500, 
            lineHeight: '36px', 
            color: 'black',
            marginBottom: '16px'
          }}>
            Noch weitere Fragen?
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
            In einem kostenlosen 15-minütigen Gespräch klären wir alle deine individuellen Fragen
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
              <Phone style={{ width: '20px', height: '20px', color: 'white' }} />
              <span style={{ 
                color: 'white', 
                fontSize: '14px', 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                lineHeight: '22.40px' 
              }}>
                Kostenlose Beratung buchen
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
            Keine Verkaufsgespräche • Ehrliche Einschätzung • Sofort Klarheit
          </p>
        </div>
      </div>
    </section>;
};