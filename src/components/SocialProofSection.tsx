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
}, {
  name: "Sebastian Frey",
  profession: "Polier",
  location: "Deutschland → Uznach",
  salaryBefore: "€58.600",
  salaryAfter: "CHF 85.000",
  increase: "+€26.400",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Nach 8 Monaten erfolglosem Suchen hatte ich fast aufgegeben. SwissPats hat mir in 4 Wochen zu meinen Traumjob bei W. Oertig verholfen. 45% mehr als in Deutschland!",
  timeframe: "4 Wochen"
}, {
  name: "Dennis Schlömer",
  profession: "Store Leader",
  location: "Deutschland → Zürich",
  salaryBefore: "€52.000",
  salaryAfter: "CHF 78.000",
  increase: "+€26.000",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Dank SwissPats habe ich nicht nur meinen Job gefunden, sondern auch ohne jegliche Arbeit das Behörden-Chaos gemeistert, was ich alleine neben meinem Beruf nicht geschafft hätte. Jeden Franken wert!",
  timeframe: "6 Wochen"
}, {
  name: "Siegfried Kuschill",
  profession: "Industriemechaniker",
  location: "Deutschland → Zürich",
  salaryBefore: "€48.000",
  salaryAfter: "CHF 90.000",
  increase: "+€42.000",
  linkedinUrl: "#",
  videoThumb: "/placeholder.svg",
  testimonial: "Als Familienvater mit 2 Kindern war der Umzug besonders komplex. SwissPats hat sogar meine Wohnung und meine Bewilligung organisiert! Heute verdiene ich CHF 7.500 im Monat und bereue keine Sekunde.",
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
            <Users style={{ width: '16px', height: '20px', color: 'rgba(0, 0, 0, 0.40)' }} />
            <span style={{ 
              color: 'black', 
              fontSize: '11.44px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '14.40px' 
            }}>
              847+ ERFOLGREICHE SCHWEIZ-WECHSEL
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
            Echte Menschen, echte Erfolge
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
            Entdecke, wie andere Deutsche mit SwissPats ihre Karriere in der Schweiz vorangebracht haben
          </p>
        </div>

        {/* Success Stories Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px', 
          marginBottom: '44px' 
        }}>
          {successStories.slice(0, 6).map((story, index) => 
            <div key={index} style={{ 
              padding: '32px', 
              background: '#F5F5F5', 
              boxShadow: '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)', 
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 6px 16px rgba(0,0,0,0.12)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ 
                  aspectRatio: '16/9',
                  background: '#F5F5F5',
                  boxShadow: '0px 3px 1px white inset',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  marginBottom: '12px'
                }}>
                  <Play style={{ width: '32px', height: '32px', color: 'rgba(0, 0, 0, 0.40)' }} />
                  <div style={{ 
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    padding: '4px 8px',
                    background: '#F5F5F5',
                    boxShadow: '0px 3px 1px white inset',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <CheckCircle2 style={{ width: '10px', height: '10px' }} />
                    Verifiziert
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontFamily: 'Inter', 
                    fontWeight: 500, 
                    color: 'black'
                  }}>
                    {story.name}
                  </h3>
                  <ExternalLink style={{ width: '16px', height: '16px', color: 'rgba(0, 0, 0, 0.40)' }} />
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  fontFamily: 'Inter', 
                  fontWeight: 400, 
                  color: 'black',
                  opacity: 0.7,
                  marginBottom: '4px'
                }}>
                  {story.profession}
                </p>
                <p style={{ 
                  fontSize: '12px', 
                  fontFamily: 'Inter', 
                  fontWeight: 400, 
                  color: 'black',
                  opacity: 0.6
                }}>
                  {story.location}
                </p>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
                  <span style={{ color: 'black', opacity: 0.7 }}>Vorher:</span>
                  <span style={{ color: 'black' }}>{story.salaryBefore}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
                  <span style={{ color: 'black', opacity: 0.7 }}>Nachher:</span>
                  <span style={{ color: 'black', fontWeight: 500 }}>{story.salaryAfter}</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '14px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <span style={{ color: 'black', opacity: 0.7 }}>Mehr-Verdienst:</span>
                  <span style={{ color: '#2E7D32', fontWeight: 600 }}>{story.increase}</span>
                </div>
              </div>

              <p style={{ 
                fontSize: '14px', 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                lineHeight: '22px', 
                color: 'black',
                opacity: 0.8,
                fontStyle: 'italic',
                marginBottom: '12px'
              }}>
                "{story.testimonial}"
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                <span style={{ color: 'black', opacity: 0.6 }}>Dauer: {story.timeframe}</span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => 
                    <Star key={i} style={{ width: '12px', height: '12px', color: '#800020', fill: '#800020' }} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trustpilot & SRF Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px', 
          marginBottom: '44px' 
        }}>
          {/* Trustpilot */}
          <div style={{ 
            padding: '32px', 
            background: '#F5F5F5', 
            boxShadow: '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)', 
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 6px 16px rgba(0,0,0,0.12)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ 
                height: '32px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontFamily: 'Inter',
                fontWeight: 500,
                color: 'black'
              }}>
                Trustpilot
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '8px' }}>
                {[...Array(5)].map((_, i) => 
                  <Star key={i} style={{ 
                    width: '20px', 
                    height: '20px', 
                    color: i < Math.floor(trustpilotStats.rating) ? '#2E7D32' : 'rgba(0, 0, 0, 0.3)',
                    fill: i < Math.floor(trustpilotStats.rating) ? '#2E7D32' : 'none'
                  }} />
                )}
                <span style={{ 
                  marginLeft: '8px',
                  fontSize: '24px',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  color: 'black'
                }}>
                  {trustpilotStats.rating}
                </span>
              </div>
              <p style={{ 
                fontSize: '14px',
                fontFamily: 'Inter',
                color: 'black',
                opacity: 0.7,
                marginBottom: '16px'
              }}>
                {trustpilotStats.reviews} Bewertungen
              </p>
            </div>
            
            <div style={{ 
              background: 'rgba(46, 125, 50, 0.1)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <div style={{ 
                fontSize: '28px',
                fontFamily: 'Inter',
                fontWeight: 600,
                color: '#2E7D32',
                marginBottom: '4px'
              }}>
                {trustpilotStats.excellentPercentage}%
              </div>
              <div style={{ 
                fontSize: '14px',
                fontFamily: 'Inter',
                color: 'black',
                opacity: 0.7
              }}>
                bewerten uns als "Ausgezeichnet"
              </div>
            </div>
            
            <button style={{ 
              width: '100%',
              padding: '11px 24px', 
              background: '#F5F5F5', 
              boxShadow: '0px 3px 1px white inset', 
              borderRadius: '10px',
              border: 'none',
              color: 'black', 
              fontSize: '14px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '22.40px',
              cursor: 'pointer'
            }}>
              Alle Bewertungen ansehen
            </button>
          </div>

          {/* SRF Video */}
          <div style={{ 
            padding: '32px', 
            background: '#F5F5F5', 
            boxShadow: '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)', 
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 6px 16px rgba(0,0,0,0.12)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0px 3px 1px white inset, 0 4px 12px rgba(0,0,0,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ 
                padding: '6px 12px', 
                background: 'rgba(128, 0, 32, 0.20)', 
                borderRadius: '60px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                marginBottom: '16px'
              }}>
                <Award style={{ width: '16px', height: '16px', color: '#800020' }} />
                <span style={{ 
                  color: '#800020', 
                  fontSize: '11.44px', 
                  fontFamily: 'Inter', 
                  fontWeight: 500, 
                  lineHeight: '14.40px' 
                }}>
                  SRF SCHWEIZER FERNSEHEN
                </span>
              </div>
              <h3 style={{ 
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: 500,
                color: 'black',
                marginBottom: '8px'
              }}>
                Wie Deutsche in der Schweiz erfolgreich werden
              </h3>
              <p style={{ 
                fontSize: '14px',
                fontFamily: 'Inter',
                color: 'black',
                opacity: 0.7
              }}>
                Exklusive Reportage über SwissPats
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              {srfVideoChapters.map((chapter, index) => 
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '12px', 
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Play style={{ width: '16px', height: '16px', color: '#2E7D32' }} />
                    <span style={{ 
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      color: 'black'
                    }}>
                      {chapter.title}
                    </span>
                  </div>
                  <div style={{ 
                    fontSize: '12px',
                    fontFamily: 'Inter',
                    color: 'black',
                    opacity: 0.6
                  }}>
                    {chapter.duration}
                  </div>
                </div>
              )}
            </div>
            
            <button style={{ 
              width: '100%',
              padding: '11px 24px', 
              background: 'black', 
              boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)', 
              borderRadius: '10px',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <Play style={{ width: '16px', height: '16px', color: 'white' }} />
              <span style={{ 
                color: 'white', 
                fontSize: '14px', 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                lineHeight: '22.40px' 
              }}>
                Reportage ansehen
              </span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            <h3 style={{ 
              fontSize: '22.12px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '36px', 
              color: 'black',
              marginBottom: '16px'
            }}>
              Werde auch du Teil der Erfolgsgeschichten
            </h3>
            <p style={{ 
              fontSize: '16px', 
              fontFamily: 'Inter', 
              fontWeight: 400, 
              lineHeight: '24px', 
              color: 'black',
              opacity: 0.7,
              marginBottom: '24px'
            }}>
              Über 847 Deutsche haben bereits den Sprung in die Schweiz gewagt. 
              Du könntest der nächste sein.
            </p>
          </div>
          
          <button style={{ 
            padding: '11px 24px', 
            background: 'black', 
            boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)', 
            borderRadius: '10px',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            marginBottom: '16px'
          }}>
            <TrendingUp style={{ width: '20px', height: '20px', color: 'white' }} />
            <span style={{ 
              color: 'white', 
              fontSize: '14px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '22.40px' 
            }}>
              Meine Schweiz-Analyse starten
            </span>
          </button>
          
          <p style={{ 
            fontSize: '14px', 
            fontFamily: 'Inter', 
            fontWeight: 400, 
            lineHeight: '24px', 
            color: 'black',
            opacity: 0.6
          }}>
            Kostenlose Erstberatung • Unverbindlich • In nur 15 Minuten
          </p>
        </div>
      </div>
    </section>;
};