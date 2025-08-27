import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

export const VideoPlaceholder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-6 md:p-6 sm:p-4">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Background pattern for a more professional look */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center text-center z-10">
                {/* Play button icon */}
                <div className="mb-4 p-4 bg-white rounded-full shadow-sm border border-gray-200 opacity-60">
                  <Play className="w-8 h-8 text-gray-400 fill-gray-300" />
                </div>
                
                {/* Text */}
                <p className="text-gray-600 font-medium text-lg">
                  📺 Video wird hier eingefügt
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Platzhalter für Premium-Video-Inhalt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};