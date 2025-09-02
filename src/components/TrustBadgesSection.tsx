import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Award, Users, CheckCircle2, Star, FileCheck, Globe, Handshake, TrendingUp } from "lucide-react";
const trustBadges = [{
  icon: <Shield className="w-8 h-8" />,
  title: "100% DSGVO Konform",
  description: "Alle Daten werden verschlüsselt und DSGVO-konform verarbeitet",
  color: "alpine-green"
}, {
  icon: <Lock className="w-8 h-8" />,
  title: "SSL Verschlüsselung",
  description: "Höchste Sicherheitsstandards für deine persönlichen Daten",
  color: "alpine-green"
}, {
  icon: <Award className="w-8 h-8" />,
  title: "Zertifizierte Berater",
  description: "Unsere Experten sind zertifizierte Karriere- und Relocation-Berater",
  color: "burgundy"
}, {
  icon: <FileCheck className="w-8 h-8" />,
  title: "Geprüfte Referenzen",
  description: "Alle Erfolgsgeschichten sind verifiziert und dokumentiert",
  color: "burgundy"
}];
const partnerLogos = [{
  name: "SRF Schweizer Radio und Fernsehen",
  logo: "/placeholder.svg",
  url: "#"
}, {
  name: "Swiss Business Association",
  logo: "/placeholder.svg",
  url: "#"
}, {
  name: "Xing",
  logo: "/placeholder.svg",
  url: "#"
}, {
  name: "LinkedIn",
  logo: "/placeholder.svg",
  url: "#"
}, {
  name: "Trustpilot",
  logo: "/placeholder.svg",
  url: "#"
}, {
  name: "Swiss Career Forum",
  logo: "/placeholder.svg",
  url: "#"
}];
const certifications = [{
  title: "ISO 27001 Zertifiziert",
  description: "Internationaler Standard für Informationssicherheit",
  badge: "ISO 27001"
}, {
  title: "Karriereberatung Zertifikat",
  description: "Zertifizierte Ausbildung in professioneller Karriereberatung",
  badge: "Certified"
}, {
  title: "Swiss Quality Standards",
  description: "Erfüllt alle Schweizer Qualitätsstandards für Beratungsdienstleistungen",
  badge: "Swiss Quality"
}];
const guarantees = [{
  icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
  text: "100% Geld-zurück-Garantie bei Nicht-Erfolg"
}, {
  icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
  text: "Kostenlose Nachbetreuung für 12 Monate"
}, {
  icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
  text: "Transparente Preisgestaltung ohne versteckte Kosten"
}, {
  icon: <CheckCircle2 className="w-6 h-6 text-alpine-green" />,
  text: "Persönlicher Ansprechpartner während des gesamten Prozesses"
}];
export const TrustBadgesSection = () => {
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
            <Shield style={{ width: '16px', height: '20px', color: 'rgba(0, 0, 0, 0.40)' }} />
            <span style={{ 
              color: 'black', 
              fontSize: '11.44px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '14.40px' 
            }}>
              SICHERHEIT & VERTRAUEN
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
            Deine Sicherheit ist unsere Priorität
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
            Höchste Standards bei Datenschutz, Sicherheit und Beratungsqualität
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          marginBottom: '44px' 
        }}>
          {trustBadges.map((badge, index) => 
            <div key={index} style={{ 
              padding: '32px', 
              background: '#F5F5F5', 
              boxShadow: '0px 3px 1px white inset', 
              borderRadius: '16px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                padding: '16px', 
                background: badge.color === 'alpine-green' ? 'rgba(46, 125, 50, 0.20)' : 'rgba(128, 0, 32, 0.20)', 
                borderRadius: '12px',
                display: 'inline-flex',
                marginBottom: '16px',
                color: badge.color === 'alpine-green' ? '#2E7D32' : '#800020'
              }}>
                {badge.icon}
              </div>
              <h3 style={{ 
                fontSize: '16px', 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                color: 'black',
                marginBottom: '8px'
              }}>
                {badge.title}
              </h3>
              <p style={{ 
                fontSize: '14px', 
                fontFamily: 'Inter', 
                fontWeight: 400, 
                lineHeight: '22px', 
                color: 'black',
                opacity: 0.7
              }}>
                {badge.description}
              </p>
            </div>
          )}
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
            Bereit für deinen sicheren Schweiz-Wechsel?
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
            Vertraue auf unsere Expertise und starte deine Schweiz-Karriere mit absoluter Sicherheit
          </p>
          
          <button style={{ 
            padding: '11px 24px', 
            background: 'black', 
            boxShadow: '0px 30px 30px -3.5px rgba(0, 0, 0, 0.15)', 
            borderRadius: '10px',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <Shield style={{ width: '20px', height: '20px', color: 'white' }} />
            <span style={{ 
              color: 'white', 
              fontSize: '14px', 
              fontFamily: 'Inter', 
              fontWeight: 500, 
              lineHeight: '22.40px' 
            }}>
              Sichere Beratung starten
            </span>
          </button>
          
          <p style={{ 
            fontSize: '14px', 
            fontFamily: 'Inter', 
            fontWeight: 400, 
            lineHeight: '24px', 
            color: 'black',
            opacity: 0.8,
            marginTop: '16px'
          }}>
            100% DSGVO-konform • SSL-verschlüsselt • Zertifizierte Beratung
          </p>
        </div>
      </div>
    </section>;
};