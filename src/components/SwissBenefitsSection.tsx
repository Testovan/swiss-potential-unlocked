import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SwissBenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Gauge animations
    gsap.to(".gauge", { y: -4, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(".needle", { rotation: 18, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1, transformOrigin: "left center" });

    // Bar animations
    const barHeights = [80, 140, 110, 90];
    gsap.timeline({ defaults: { duration: 0.9, ease: "power2.out" }, delay: 0.2 })
      .to(".bar.b1", { height: barHeights[0] })
      .to(".bar.b2", { height: barHeights[1] }, "-=0.6")
      .to(".bar.b3", { height: barHeights[2] }, "-=0.5")
      .to(".bar.b4", { height: barHeights[3] }, "-=0.4");

    // Orbit animation
    gsap.to(".orbit", { rotate: 360, duration: 16, ease: "none", repeat: -1, transformOrigin: "50% 50%" });

    // Card entrance animation
    gsap.from(".card", { opacity: 0, y: 18, duration: 0.8, ease: "power2.out", stagger: 0.12 });
  }, []);

  return (
    <section ref={sectionRef} id="swisspats-benefits" className="benefits py-20 bg-background">
      <div className="wrap max-w-7xl mx-auto px-4">
        {/* Badge */}
        <div className="badge text-center mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            VORTEILE
          </span>
        </div>

        {/* Heading */}
        <div className="head text-center flex flex-col mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Warum <span className="brand text-primary">SwissPats</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Der smarte Weg für deutsche Fachkräfte in die Schweiz – einfach, klar und effizient.
          </p>
            <div className="pill pill-cost w-[80%] md:w-[auto] self-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              50% weniger Hürden
            </div>
            <div className="pill pill-top w-[80%] md:w-[auto] self-center bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
              +67'400 CHF Ø-Mehrverdienst
            </div>
        </div>

        {/* 3 Cards */}
        <div className="cards grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Gauge */}
          <div className="card bg-card rounded-2xl p-8 text-center shadow-lg">
            <div className="gauge mb-6 flex justify-center">
              <div className="gauge-face relative w-24 h-24">
                <span className="dot d1 absolute w-2 h-2 bg-primary rounded-full" style={{ top: '10%', left: '20%' }}></span>
                <span className="dot d2 absolute w-2 h-2 bg-primary rounded-full" style={{ top: '20%', right: '15%' }}></span>
                <span className="dot d3 absolute w-2 h-2 bg-primary rounded-full" style={{ bottom: '15%', left: '50%', transform: 'translateX(-50%)' }}></span>
                <span className="pivot absolute w-3 h-3 bg-primary rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></span>
                <div className="needle absolute w-10 h-0.5 bg-primary top-1/2 left-1/2 origin-left" style={{ transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Schneller Start</h3>
            <p className="text-muted-foreground">Mit SwissPats erreichen Sie in Rekordzeit Ihre erste Anstellung in der Schweiz.</p>
          </div>

          {/* Card 2: Bars */}
          <div className="card card-bars bg-card rounded-2xl p-8 text-center shadow-lg relative">
            <span className="side-label absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground font-semibold">
              MIT SWISSPATS
            </span>
            <div className="bars flex justify-center items-end gap-2 h-32 mb-6 mt-8">
              <div className="bar b1 w-6 bg-primary rounded-t" style={{ height: '20px' }}></div>
              <div className="bar b2 w-6 bg-primary rounded-t" style={{ height: '20px' }}></div>
              <div className="bar b3 w-6 bg-primary rounded-t" style={{ height: '20px' }}></div>
              <div className="bar b4 w-6 bg-primary rounded-t" style={{ height: '20px' }}></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Mehr Einkommen</h3>
            <p className="text-muted-foreground">Wir zeigen Ihnen, wie Sie in der Schweiz deutlich mehr verdienen können.</p>
          </div>

          {/* Card 3: Orbit */}
          <div className="card bg-card rounded-2xl p-8 text-center shadow-lg">
            <div className="orbit-wrap mb-6 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="orbit-bg absolute inset-0 border-2 border-primary/20 rounded-full"></div>
                <div className="orbit absolute inset-0">
                  <div className="orbit-dot od1 absolute w-3 h-3 -top-1.5 left-1/2 transform -translate-x-1/2">
                    <div className="dot-inner w-full h-full bg-primary rounded-full"></div>
                  </div>
                  <div className="orbit-dot od2 absolute w-3 h-3 top-1/2 -right-1.5 transform -translate-y-1/2">
                    <div className="dot-inner w-full h-full bg-primary rounded-full"></div>
                  </div>
                  <div className="orbit-dot od3 absolute w-3 h-3 -bottom-1.5 left-1/2 transform -translate-x-1/2">
                    <div className="dot-inner w-full h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="center-badge absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-sm bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                    SP
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Starkes Netzwerk</h3>
            <p className="text-muted-foreground">Profitieren Sie von Kontakten, die Ihren Einstieg leichter machen.</p>
          </div>
        </div>

        {/* Chips Row */}
        <div className="chips flex flex-wrap justify-center gap-4">
          <span className="chip bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🇨🇭 Beratung für Fachkräfte
          </span>
          <span className="chip bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            📑 Hilfe bei Bürokratie
          </span>
          <span className="chip bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            💰 Mehr Gehalt
          </span>
          <span className="chip bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🏡 Leichter Umzug
          </span>
          <span className="chip bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🤝 Lokale Kontakte
          </span>
        </div>
      </div>
    </section>
  );
};

export default SwissBenefitsSection;