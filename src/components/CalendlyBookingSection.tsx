import { motion } from "framer-motion";

export const CalendlyBookingSection = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#FFFFFF',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Buche dein kostenloses Beratungsgespräch
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Wähle direkt einen passenden Termin in meinem Kalender – unkompliziert und verbindlich.
          </p>
        </div>

        {/* Calendly Embed */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}>
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="630"
            frameBorder="0"
            title="Terminbuchung"
            style={{
              minWidth: '320px',
              height: '630px'
            }}
          />
        </div>
      </div>
    </section>
  );
};