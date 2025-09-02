import { X } from "lucide-react";
import { spReality } from "@/data/swisspats/sections";
import { FadeInUp } from "@/components/animations/ScrollAnimations";

const SpReality = () => {
  return (
    <section className="py-24 px-6" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                background: '#F5F5F5',
                boxShadow: '0px 3px 1px white inset',
                border: '1px solid #F5F5F5'
              }}
            >
              <span 
                className="text-xs font-medium tracking-wider"
                style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
              >
                DIE HARTE REALITÄT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}>
              Warum 89% der Deutschen beim Schweiz-Umzug scheitern
            </h2>

            {/* Subhead */}
            <p 
              className="text-lg opacity-80 leading-relaxed"
              style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
            >
              Diese 4 kritischen Fehler kosten Sie Jahre und tausende Franken. Unsere Kunden umgehen sie komplett.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {spReality.map((reality, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <article 
                className="p-8 bg-white rounded-3xl relative"
                style={{ 
                  boxShadow: '0px 3px 1px white inset',
                  border: '1px solid #E5E7EB'
                }}
                role="listitem"
              >
                <div className="flex items-start gap-6">
                  {/* Large X Marker */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold"
                    style={{ 
                      background: '#F5F5F5',
                      boxShadow: '0px 3px 1px white inset',
                      color: 'black'
                    }}
                  >
                    {reality.marker}
                  </div>

                  <div className="flex-1">
                    {/* X Icon */}
                    <div className="mb-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'black' }}
                      >
                        <X className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-semibold mb-3"
                      style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
                    >
                      {reality.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-sm mb-4 leading-relaxed opacity-80"
                      style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
                    >
                      {reality.description}
                    </p>

                    {/* Statistic */}
                    <div 
                      className="text-sm font-medium"
                      style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
                    >
                      {reality.statistic}
                    </div>
                  </div>
                </div>
              </article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpReality;