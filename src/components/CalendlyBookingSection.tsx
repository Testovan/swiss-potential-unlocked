import { motion } from "framer-motion";

export const CalendlyBookingSection = () => {
  return (
    <section id="calendly-booking" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="studio-card"
        >
          <div className="text-center mb-8">
            <h2 className="studio-heading text-3xl md:text-4xl text-foreground mb-4">
              Kostenlose Beratung
            </h2>
            <p className="studio-body text-lg text-muted-foreground">
              30-minütiges Gespräch mit unseren Swiss-Experten
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted border border-border">
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