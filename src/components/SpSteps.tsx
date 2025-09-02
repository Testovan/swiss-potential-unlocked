import { Check } from "lucide-react";
import { spSteps } from "@/data/swisspats/sections";
import { FadeInUp } from "@/components/animations/ScrollAnimations";

const SpSteps = () => {
  return (
    <section className="py-24 px-6" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}>
              So bekommen Sie GARANTIERT einen JOB, WOHNUNG und Ihre BEWILLIGUNG in der Schweiz
            </h2>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {spSteps.map((step, index) => (
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
                  {/* Large Number */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                    style={{ 
                      background: '#F5F5F5',
                      boxShadow: '0px 3px 1px white inset',
                      color: 'black'
                    }}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1">
                    {/* Check Icon */}
                    <div className="mb-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'black' }}
                      >
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-semibold mb-4"
                      style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.title}
                    </h3>

                    {/* Items */}
                    <ul className="space-y-3" role="list">
                      {step.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-sm leading-relaxed"
                          style={{ color: 'black', fontFamily: 'Inter, sans-serif' }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
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

export default SpSteps;