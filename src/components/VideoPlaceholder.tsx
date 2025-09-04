import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export const VideoPlaceholder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Bekannt aus dem Schweizer Fernsehen
        </h2>
        <div
          ref={ref}
          className={`bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-6 md:p-6 sm:p-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              src="https://player.vimeo.com/video/1109119687?h=0&autoplay=0&muted=1&controls=1&responsive=1"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              loading="lazy"
              title="SwissPats SRF Reportage - Deutsche in der Schweiz"
              className="w-full h-full"
            ></iframe>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};