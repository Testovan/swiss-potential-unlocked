import { useState } from 'react';
import { CheckCircle, Phone, AlertTriangle, FileText, Clock, Users, Home, Banknote, Car, Globe, Menu, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const InfoSchweiz = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'intro', title: 'Einführung' },
    { id: 'aufenthalt', title: 'Aufenthalt & Bewilligungen' },
    { id: 'registrierung', title: 'Registrierung & Meldepflicht' },
    { id: 'krankenversicherung', title: 'Krankenversicherung' },
    { id: 'steuern', title: 'Steuern & Quellensteuer' },
    { id: 'gehalt', title: 'Gehalt & Löhne' },
    { id: 'lebenshaltungskosten', title: 'Lebenshaltungskosten' },
    { id: 'wohnen', title: 'Wohnen & Wohnungssuche' },
    { id: 'bank', title: 'Bank & Finanzen' },
    { id: 'mobilitaet', title: 'Mobilität & ÖV' },
    { id: 'arbeitsmarkt', title: 'Arbeitsmarkt & Kultur' },
    { id: 'sprachen', title: 'Sprachen & Integration' },
    { id: 'notfall', title: 'Wichtige Nummern & Notfall' },
    { id: 'timeline', title: 'Timeline / Checkliste' },
    { id: 'faq', title: 'FAQ' },
    { id: 'cta', title: 'Beratung' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta tags would be handled by React Helmet or similar */}
      
      {/* Mobile Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 md:hidden">
        <Collapsible open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-4">
              <span>Inhaltsverzeichnis</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="flex">
        {/* Desktop Sidebar Navigation */}
        <nav className="hidden md:block sticky top-16 w-64 h-screen overflow-y-auto bg-white border-r border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Inhaltsverzeichnis</h3>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-sm text-gray-600 hover:text-gray-900 py-1 transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 md:px-8 max-w-4xl">
          
          {/* 1. Intro */}
          <section id="intro" className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Info Schweiz für Expats aus Deutschland</h1>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-4">
                  Umfassender Leitfaden für deutsche Fachkräfte, die in die Schweiz ziehen möchten. 
                  Hier finden Sie alle wichtigen Informationen zu Bewilligungen, Kosten, Formalitäten und praktischen Tipps.
                </p>
                <p className="text-gray-600">
                  Von der Aufenthaltsbewilligung bis zur Krankenversicherung – alles was Sie für einen erfolgreichen Start brauchen.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* 2. Aufenthalt & Bewilligungen */}
          <section id="aufenthalt" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Aufenthalt & Bewilligungen</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">Bewilligung</th>
                        <th className="text-left py-3 px-4">Gültigkeit</th>
                        <th className="text-left py-3 px-4">Besonderheiten</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><Badge>B-Bewilligung</Badge></td>
                        <td className="py-3 px-4">5 Jahre</td>
                        <td className="py-3 px-4">Arbeitsvertrag erforderlich</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4"><Badge>L-Bewilligung</Badge></td>
                        <td className="py-3 px-4">12 Monate</td>
                        <td className="py-3 px-4">Befristete Verträge</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><Badge>C-Bewilligung</Badge></td>
                        <td className="py-3 px-4">Unbefristet</td>
                        <td className="py-3 px-4">Nach 5 Jahren Aufenthalt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Arbeitgeber meldet die Anstellung den Behörden</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>EU/EFTA-Bürger haben Anspruch auf Aufenthaltsbewilligung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Verlängerung erfolgt meist automatisch bei fortbestehendem Arbeitsverhältnis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* 3. Registrierung & Meldepflicht */}
          <section id="registrierung" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Registrierung & Meldepflicht</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <Badge variant="destructive" className="mb-4">Frist: 14 Tage</Badge>
                  <p className="text-gray-700">Anmeldung bei der Einwohnerkontrolle der Wohngemeinde innerhalb von 14 Tagen nach Einzug.</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="documents">
                    <AccordionTrigger>Erforderliche Unterlagen</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                          <span>Gültiger Reisepass oder Personalausweis</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                          <span>Mietvertrag oder Wohnungsnachweis</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                          <span>Arbeitsvertrag</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                          <span>Passfoto</span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                          <span>Geburtsurkunde (bei Bedarf)</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* 4. Krankenversicherung */}
          <section id="krankenversicherung" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krankenversicherung</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    Abschlussfrist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="destructive" className="mb-4">3 Monate</Badge>
                  <p className="text-gray-700">
                    Krankenversicherung muss innerhalb von 3 Monaten nach Einreise abgeschlossen werden. 
                    Rückwirkende Deckung ab Einreisedatum.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>KVG-Grundversicherung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">Obligatorische Grundversicherung für alle Einwohner</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Franchise: CHF 300 - 2'500</li>
                    <li>• Selbstbehalt: 10% bis max. CHF 700</li>
                    <li>• Zusatzversicherungen optional</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5. Steuern & Quellensteuer */}
          <section id="steuern" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Steuern & Quellensteuer</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Quellensteuer (B/L-Bewilligung)</h4>
                    <div className="space-y-2">
                      <Badge className="bg-blue-100 text-blue-800">Automatischer Abzug</Badge>
                      <p className="text-sm text-gray-600">
                        Steuern werden direkt vom Lohn abgezogen. Sätze variieren je nach Kanton und Einkommen.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Ordentliche Besteuerung (C-Bewilligung)</h4>
                    <div className="space-y-2">
                      <Badge className="bg-green-100 text-green-800">Steuererklärung</Badge>
                      <p className="text-sm text-gray-600">
                        Jährliche Steuererklärung erforderlich. Mehr Abzugsmöglichkeiten verfügbar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Hinweis:</strong> Doppelbesteuerungsabkommen zwischen Deutschland und der Schweiz verhindert Doppelbesteuerung. 
                    Kirchensteuer wird in der Schweiz nicht erhoben.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 6. Gehalt & Löhne */}
          <section id="gehalt" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gehalt & Löhne</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">Branche</th>
                        <th className="text-left py-3 px-4">Median (CHF/Jahr)</th>
                        <th className="text-left py-3 px-4">Spanne</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">IT/Software</td>
                        <td className="py-3 px-4">95'000</td>
                        <td className="py-3 px-4">70'000 - 140'000</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Ingenieurwesen</td>
                        <td className="py-3 px-4">85'000</td>
                        <td className="py-3 px-4">65'000 - 120'000</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Finanzen</td>
                        <td className="py-3 px-4">100'000</td>
                        <td className="py-3 px-4">75'000 - 150'000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Gesundheitswesen</td>
                        <td className="py-3 px-4">78'000</td>
                        <td className="py-3 px-4">60'000 - 110'000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">13. Monatslohn</h4>
                    <p className="text-sm text-green-700">Zusätzlicher Monatslohn meist im November/Dezember</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Kaufkraft</h4>
                    <p className="text-sm text-blue-700">Höhere Löhne bei höheren Lebenshaltungskosten</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 7. Lebenshaltungskosten */}
          <section id="lebenshaltungskosten" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lebenshaltungskosten</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">Kategorie</th>
                        <th className="text-left py-3 px-4">Kosten (CHF/Monat)</th>
                        <th className="text-left py-3 px-4">Bemerkung</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Miete (1-Zi)</td>
                        <td className="py-3 px-4">1'200 - 2'000</td>
                        <td className="py-3 px-4">Je nach Lage und Stadt</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Miete (2-Zi)</td>
                        <td className="py-3 px-4">1'500 - 2'800</td>
                        <td className="py-3 px-4">Zentral teurer</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">ÖV-Abo</td>
                        <td className="py-3 px-4">80 - 120</td>
                        <td className="py-3 px-4">Zonensystem</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Krankenversicherung</td>
                        <td className="py-3 px-4">300 - 500</td>
                        <td className="py-3 px-4">Je nach Franchise</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Lebensmittel</td>
                        <td className="py-3 px-4">600 - 900</td>
                        <td className="py-3 px-4">Einzelperson</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Internet/Handy</td>
                        <td className="py-3 px-4">80 - 120</td>
                        <td className="py-3 px-4">Kombi-Angebote</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 8. Wohnen & Wohnungssuche */}
          <section id="wohnen" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wohnen & Wohnungssuche</h2>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4">Bewerbungsmappe erforderlich:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Bewerbungsschreiben</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Kopie Ausweis/Pass</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Arbeitsvertrag oder Lohnausweis</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Betreibungsauszug (Schufa-Äquivalent)</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Referenzen früherer Vermieter</span>
                  </li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Kaution</h4>
                    <p className="text-sm text-yellow-700">1-3 Monatsmieten, meist auf Sperrkonto</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Tipp</h4>
                    <p className="text-sm text-blue-700">Betreibungsauszug vorab beantragen (online möglich)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 9. Bank & Finanzen */}
          <section id="bank" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank & Finanzen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Banknote className="w-5 h-5 text-green-600 mr-2" />
                    Kontoeröffnung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Aufenthaltsbewilligung erforderlich</li>
                    <li>• Arbeitsvertrag als Nachweis</li>
                    <li>• IBAN/SEPA-kompatibel</li>
                    <li>• Online-Banking Standard</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Säule 3a (Altersvorsorge)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-2">
                    Private Altersvorsorge mit Steuervorteil
                  </p>
                  <Badge className="bg-green-100 text-green-800">Max. CHF 7'056/Jahr (2024)</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 10. Mobilität & ÖV */}
          <section id="mobilitaet" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobilität & ÖV</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Öffentlicher Verkehr</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>GA (Generalabonnement):</strong> CHF 3'995/Jahr</li>
                    <li>• <strong>Halbtax:</strong> CHF 185/Jahr (50% Rabatt)</li>
                    <li>• Sehr gut ausgebautes Netz</li>
                    <li>• Pünktlichkeit ist Standard</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="w-5 h-5 text-blue-600 mr-2" />
                    Auto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium">Führerschein-Umschreibung:</h5>
                      <ol className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>1. Antrag bei Strassenverkehrsamt</li>
                        <li>2. Sehtest & Nothelferkurs</li>
                        <li>3. Innerhalb 12 Monaten</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-medium">Fahrzeugimport:</h5>
                      <p className="text-sm text-gray-600">MFKS-Formular & Zollabfertigung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 11. Arbeitsmarkt & Kultur */}
          <section id="arbeitsmarkt" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Arbeitsmarkt & Kultur</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Arbeitsrecht</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Probezeit:</strong> 1-3 Monate üblich</li>
                      <li>• <strong>Kündigungsfrist:</strong> 1-3 Monate je nach Anstellung</li>
                      <li>• 4 Wochen Mindestferien</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Arbeitskultur</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pünktlichkeit ist essentiell</li>
                      <li>• "Sie" bis explizite Du-Einladung</li>
                      <li>• Meetings beginnen pünktlich</li>
                      <li>• Konsensorientierte Entscheidungen</li>
                      <li>• Work-Life-Balance geschätzt</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 12. Sprachen & Integration */}
          <section id="sprachen" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sprachen & Integration</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deutsch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Hochdeutsch + Schweizerdeutsch (Dialekt) im Alltag
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Französisch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Westschweiz (Romandie), wichtig für landesweite Karriere
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Italienisch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Tessin und Teile Graubünden
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4">Sprachkurse & Integration</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Volkshochschulen bieten günstige Deutschkurse</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Schweizerdeutsch-Kurse für den Alltag empfohlen</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    <span>Firmen bieten oft Sprachkurse an</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* 13. Wichtige Nummern & Notfall */}
          <section id="notfall" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wichtige Nummern & Notfall</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl text-red-600">117</h3>
                  <p className="text-sm text-gray-600">Polizei</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl text-red-600">118</h3>
                  <p className="text-sm text-gray-600">Feuerwehr</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl text-red-600">144</h3>
                  <p className="text-sm text-gray-600">Sanitätsnotruf</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-xl text-blue-600">143</h3>
                  <p className="text-sm text-gray-600">Dargebotene Hand</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4">Weitere wichtige Nummern</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Medgate (24h Ärztehotline):</strong> 0844 124 365</p>
                    <p><strong>Toxikologisches Zentrum:</strong> 145</p>
                  </div>
                  <div>
                    <p><strong>Störungsdienst Strom:</strong> Kantonal unterschiedlich</p>
                    <p><strong>Pannenhilfe TCS:</strong> 140</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 14. Timeline / Checkliste */}
          <section id="timeline" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline / Checkliste (0-90 Tage)</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tag 1-14: Ankunft & Anmeldung</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Einwohnerkontrolle besuchen</li>
                        <li>• Aufenthaltsbewilligung beantragen</li>
                        <li>• Wohnsitz registrieren</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tag 15-30: Versicherungen & Bank</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Krankenversicherung abschließen</li>
                        <li>• Bankkonto eröffnen</li>
                        <li>• Haftpflichtversicherung</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full mr-4 mt-1">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tag 31-60: Infrastruktur</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Handy-/Internetvertrag</li>
                        <li>• ÖV-Abonnement</li>
                        <li>• Führerschein umschreiben</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full mr-4 mt-1">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Tag 61-90: Integration & Optimierung</h4>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1">
                        <li>• Säule 3a einrichten</li>
                        <li>• Sprachkurs beginnen</li>
                        <li>• Steuersituation klären</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 15. FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen (FAQ)</h2>
            
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Wie lange dauert die Bearbeitung der Aufenthaltsbewilligung?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Die Bearbeitung dauert in der Regel 2-6 Wochen, abhängig vom Kanton und der Vollständigkeit der Unterlagen."
                    }
                  }
                ]
              })}
            </script>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="bewilligung-dauer">
                <AccordionTrigger>Wie lange dauert die Bearbeitung der Aufenthaltsbewilligung?</AccordionTrigger>
                <AccordionContent>
                  Die Bearbeitung dauert in der Regel 2-6 Wochen, abhängig vom Kanton und der Vollständigkeit der Unterlagen. 
                  In der Zwischenzeit erhalten Sie eine Bestätigung, die als vorläufige Bewilligung gilt.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="miete-kaution">
                <AccordionTrigger>Wie hoch ist die Kaution bei Mietwohnungen?</AccordionTrigger>
                <AccordionContent>
                  Die Kaution beträgt meist 1-3 Monatsmieten und wird auf einem Sperrkonto hinterlegt. 
                  Die Zinsen gehören dem Mieter. Alternativ kann eine Kautionsversicherung abgeschlossen werden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="steuern-unterschied">
                <AccordionTrigger>Was ist der Unterschied zwischen Quellensteuer und ordentlicher Besteuerung?</AccordionTrigger>
                <AccordionContent>
                  Quellensteuer (B/L-Bewilligung): Automatischer Abzug vom Lohn, weniger Abzugsmöglichkeiten.
                  Ordentliche Besteuerung (C-Bewilligung): Jährliche Steuererklärung mit mehr Gestaltungsmöglichkeiten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="krankenversicherung-wechsel">
                <AccordionTrigger>Kann ich die Krankenversicherung wechseln?</AccordionTrigger>
                <AccordionContent>
                  Ja, die Grundversicherung kann jährlich bis 30. November mit 3-monatiger Kündigungsfrist gewechselt werden. 
                  Zusatzversicherungen haben oft längere Kündigungsfristen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="grenzgaenger">
                <AccordionTrigger>Was gilt für Grenzgänger?</AccordionTrigger>
                <AccordionContent>
                  Grenzgänger benötigen eine G-Bewilligung, müssen täglich/wöchentlich nach Deutschland zurückkehren 
                  und können sich bei der deutschen oder schweizerischen Krankenversicherung versichern.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="arbeitslosigkeit">
                <AccordionTrigger>Was passiert bei Arbeitslosigkeit?</AccordionTrigger>
                <AccordionContent>
                  Arbeitslosengeld gibt es nach 12 Monaten Beitragszahlung. Die Aufenthaltsbewilligung bleibt 
                  während der Arbeitssuche gültig, wird aber nicht verlängert ohne neuen Arbeitsplatz.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="wohnung-finden">
                <AccordionTrigger>Wie finde ich eine Wohnung in der Schweiz?</AccordionTrigger>
                <AccordionContent>
                  Hauptplattformen sind homegate.ch, immoscout24.ch und comparis.ch. Eine vollständige 
                  Bewerbungsmappe und schnelle Reaktion sind entscheidend für den Erfolg.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="saule-3a">
                <AccordionTrigger>Lohnt sich die Säule 3a für Deutsche?</AccordionTrigger>
                <AccordionContent>
                  Ja, die Säule 3a bietet Steuervorteile und ist bei Wegzug aus der Schweiz auszahlbar. 
                  Besonders vorteilhaft bei höheren Einkommen und längerfristigem Aufenthalt.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="handy-vertrag">
                <AccordionTrigger>Welcher Handy-/Internetanbieter ist empfehlenswert?</AccordionTrigger>
                <AccordionContent>
                  Swisscom (bestes Netz, teurer), Salt und Sunrise sind die Hauptanbieter. 
                  Vergleichen Sie Kombi-Angebote für Internet + Handy. Digitec Connect und andere 
                  Discount-Anbieter sind günstiger.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="deutsch-schweizerdeutsch">
                <AccordionTrigger>Muss ich Schweizerdeutsch lernen?</AccordionTrigger>
                <AccordionContent>
                  Hochdeutsch reicht für den beruflichen Alltag. Schweizerdeutsch-Kenntnisse erleichtern 
                  aber die soziale Integration und sind in manchen Branchen/Regionen vorteilhaft.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="auto-oder-oev">
                <AccordionTrigger>Brauche ich ein Auto in der Schweiz?</AccordionTrigger>
                <AccordionContent>
                  In Städten meist nicht nötig dank exzellentem ÖV. Auf dem Land oder bei speziellen 
                  Arbeitszeiten kann ein Auto sinnvoll sein. Bedenken Sie hohe Kosten für Parkplätze und Benzin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rueckkehr-deutschland">
                <AccordionTrigger>Was muss ich bei einer Rückkehr nach Deutschland beachten?</AccordionTrigger>
                <AccordionContent>
                  Abmeldung bei Schweizer Behörden, Säule 2 und 3a können unter Umständen ausgezahlt werden, 
                  Krankenversicherung kündigen, deutsche Krankenversicherung reaktivieren. 
                  Steuerliche Aspekte beachten (Wegzugsbesteuerung).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* 16. CTA */}
          <section id="cta" className="mb-16">
            <div className="text-center">
              <Card>
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit für Ihren Schweiz-Move?</h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Lassen Sie sich von unseren Experten beraten und starten Sie optimal vorbereitet in Ihr neues Leben in der Schweiz.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                      Kostenlose Beratung sichern
                    </Button>
                    <Button variant="outline" size="lg" className="px-8">
                      Swiss Readiness Quick-Check starten
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    ✓ Unverbindlich ✓ Kostenlos ✓ Schweizer Experten
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default InfoSchweiz;