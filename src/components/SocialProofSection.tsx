import { SwissButton } from "./SwissButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play, TrendingUp, ExternalLink, Users, Award, CheckCircle2, ArrowUpRight } from "lucide-react";
const successStories = [{
  name: "Marco Weber",
  profession: "Software Engineer",
  location: "München → Zürich",
  salaryBefore: "€65.000",
  salaryAfter: "CHF 95.000",
  increase: "+€27.400",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "SwissPats hat mir den Weg in die Schweiz geebnet. Vom ersten Gespräch bis zur Vertragsunterzeichnung - alles war professionell begleitet.",
  timeframe: "4 Monate"
}, {
  name: "Sarah Fischer",
  profession: "Marketing Manager",
  location: "Berlin → Basel",
  salaryBefore: "€55.000",
  salaryAfter: "CHF 85.000",
  increase: "+€23.100",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Ohne SwissPats hätte ich die vielen Hürden nie alleine gemeistert. Heute verdiene ich 40% mehr und lebe in der Schweiz.",
  timeframe: "3 Monate"
}, {
  name: "Thomas Müller",
  profession: "Mechanical Engineer",
  location: "Hamburg → Bern",
  salaryBefore: "€72.000",
  salaryAfter: "CHF 105.000",
  increase: "+€29.800",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Die Beratung war Gold wert. Heute arbeite ich bei einem Top-Unternehmen in Bern und verdiene deutlich mehr.",
  timeframe: "5 Monate"
}, {
  name: "Anna Schneider",
  profession: "UX Designer",
  location: "Köln → Geneva",
  salaryBefore: "€58.000",
  salaryAfter: "CHF 88.000",
  increase: "+€24.600",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "SwissPats kannte alle Insider-Tipps. Ohne sie hätte ich viele Chancen verpasst.",
  timeframe: "2 Monate"
}, {
  name: "Michael Wagner",
  profession: "Product Manager",
  location: "Frankfurt → Luzern",
  salaryBefore: "€68.000",
  salaryAfter: "CHF 98.000",
  increase: "+€26.200",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Professionelle Begleitung von A bis Z. Heute bin ich in der Schweiz angekommen und sehr zufrieden.",
  timeframe: "4 Monate"
}, {
  name: "Lisa Hoffmann",
  profession: "Data Scientist",
  location: "Stuttgart → Winterthur",
  salaryBefore: "€62.000",
  salaryAfter: "CHF 92.000",
  increase: "+€25.400",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "SwissPats hat mir geholfen, meine Karriere auf das nächste Level zu heben. Jetzt verdiene ich 35% mehr.",
  timeframe: "3 Monate"
}];
const trustpilotStats = {
  rating: 4.8,
  reviews: 847,
  excellentPercentage: 89
};
const srfVideoChapters = [{
  title: "SwissPats Erfolgsgeschichte",
  time: "0:00",
  duration: "2:34"
}, {
  title: "Deutsche in der Schweiz",
  time: "2:34",
  duration: "4:12"
}, {
  title: "Gehaltsvergleich D-CH",
  time: "6:46",
  duration: "3:28"
}, {
  title: "Experteninterview",
  time: "10:14",
  duration: "5:16"
}];
export const SocialProofSection = () => {
  return <section className="py-20 bg-gradient-to-br from-charcoal-black to-swiss-navy-dark text-off-white bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-alpine-green/20 text-alpine-green border-alpine-green/30">
            <Users className="w-4 h-4 mr-2" />
            847+ Erfolgreiche Schweiz-Wechsel
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Echte Menschen,
            <span className="text-alpine-green"> echte Erfolge</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Entdecke, wie andere Deutsche mit SwissPats ihre Karriere in der Schweiz vorangebracht haben
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {successStories.map((story, index) => <Card key={index} className="bg-off-white/5 backdrop-blur-sm border border-off-white/10 p-6 hover:bg-off-white/10 transition-all duration-300 group">
              <div className="relative mb-4">
                <div className="aspect-video bg-gradient-to-br from-charcoal-black to-swiss-navy-dark rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Play className="w-12 h-12 text-alpine-green opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-off-white border-0 text-xs bg-gray-950">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verifiziert
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-off-white">{story.name}</h3>
                  <a href={story.linkedinUrl} className="text-alpine-green hover:text-alpine-green-light">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-off-white/70 mb-2">{story.profession}</p>
                <p className="text-xs text-off-white/60 mb-3">{story.location}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-off-white/70">Vorher:</span>
                  <span className="text-off-white">{story.salaryBefore}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-off-white/70">Nachher:</span>
                  <span className="text-alpine-green font-semibold text-slate-50">{story.salaryAfter}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-off-white/10 pt-2">
                  <span className="text-off-white/70">Mehr-Verdienst:</span>
                  <span className="font-bold text-green-600">{story.increase}</span>
                </div>
              </div>

              <p className="text-sm text-off-white/80 mb-3 italic">"{story.testimonial}"</p>
              
              <div className="flex justify-between items-center text-xs text-off-white/60">
                <span>Dauer: {story.timeframe}</span>
                <div className="flex items-center gap-1 bg-transparent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-burgundy text-burgundy bg-transparent" />)}
                </div>
              </div>
            </Card>)}
        </div>

        {/* Trustpilot & SRF Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Trustpilot */}
          <Card className="bg-off-white/5 backdrop-blur-sm border border-off-white/10 p-8">
            <div className="text-center">
              <div className="mb-4">
                <img src="/placeholder.svg" alt="Trustpilot" className="h-8 mx-auto mb-4 opacity-80" />
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-6 h-6 ${i < Math.floor(trustpilotStats.rating) ? 'fill-alpine-green text-alpine-green' : 'text-off-white/30'}`} />)}
                  <span className="ml-2 text-2xl font-bold text-off-white">{trustpilotStats.rating}</span>
                </div>
                <p className="text-off-white/70 mb-4">{trustpilotStats.reviews} Bewertungen</p>
              </div>
              
              <div className="bg-alpine-green/10 rounded-lg p-4 mb-4">
                <div className="text-3xl font-black text-alpine-green mb-1">{trustpilotStats.excellentPercentage}%</div>
                <div className="text-sm text-off-white/70">bewerten uns als "Ausgezeichnet"</div>
              </div>
              
              <SwissButton variant="outline" size="sm" className="w-full">
                Alle Bewertungen ansehen
              </SwissButton>
            </div>
          </Card>

          {/* SRF Video */}
          <Card className="bg-off-white/5 backdrop-blur-sm border border-off-white/10 p-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4 bg-burgundy/20 text-burgundy border-burgundy/30">
                <Award className="w-4 h-4 mr-2" />
                SRF Schweizer Fernsehen
              </Badge>
              <h3 className="text-xl font-bold mb-2">Wie Deutsche in der Schweiz erfolgreich werden</h3>
              <p className="text-off-white/70 text-sm">Exklusive Reportage über SwissPats</p>
            </div>

            <div className="space-y-2 mb-6">
              {srfVideoChapters.map((chapter, index) => <div key={index} className="flex items-center justify-between p-2 bg-off-white/5 rounded hover:bg-off-white/10 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <Play className="w-4 h-4 text-alpine-green" />
                    <span className="text-sm">{chapter.title}</span>
                  </div>
                  <div className="text-xs text-off-white/60">{chapter.duration}</div>
                </div>)}
            </div>
            
            <SwissButton variant="burgundy" size="sm" className="w-full">
              <Play className="w-4 h-4" />
              Reportage ansehen
            </SwissButton>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Werde auch du Teil der Erfolgsgeschichten</h3>
            <p className="text-off-white/70 mb-6">
              Über 847 Deutsche haben bereits den Sprung in die Schweiz gewagt. 
              Du könntest der nächste sein.
            </p>
          </div>
          
          <SwissButton variant="burgundy" size="xl" className="mb-4">
            <TrendingUp className="w-5 h-5" />
            Meine Schweiz-Analyse starten
          </SwissButton>
          
          <p className="text-sm text-off-white/60">
            Kostenlose Erstberatung • Unverbindlich • In nur 15 Minuten
          </p>
        </div>
      </div>
    </section>;
};