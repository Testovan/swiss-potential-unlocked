import { motion } from "framer-motion";

export const CalendlyBookingSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl shadow-md p-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Kostenlose Beratung buchen
            </h2>
            <p className="text-muted-foreground">
              30-minütiges Gespräch mit unseren Swiss-Experten
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://calendly.com/swisspats/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Booking"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};