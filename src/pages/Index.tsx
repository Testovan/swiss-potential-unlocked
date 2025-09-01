import { HeroSection } from "@/components/HeroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { CalendlyBookingSection } from "@/components/CalendlyBookingSection";
import { AssessmentSection } from "@/components/AssessmentSection";

import { SocialProofSection } from "@/components/SocialProofSection";

import { CombinedAssessment } from "@/components/CombinedAssessment";
import { UrgencySection } from "@/components/UrgencySection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBadgesSection } from "@/components/TrustBadgesSection";
import { FloatingOrbs } from "@/components/animations/FloatingOrbs";
import { FadeInUp } from "@/components/animations/ScrollAnimations";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Floating Orbs Background */}
      <FloatingOrbs />
      
      <HeroSection />
      
      <FadeInUp>
        <VideoPlaceholder />
      </FadeInUp>
      
      <FadeInUp>
        <CalendlyBookingSection />
      </FadeInUp>
      
      
      <FadeInUp>
        <AssessmentSection />
      </FadeInUp>
      
      <FadeInUp>
        <SocialProofSection />
      </FadeInUp>
      
      
      <FadeInUp>
        <CombinedAssessment />
      </FadeInUp>
      
      <FadeInUp>
        <UrgencySection />
      </FadeInUp>
      
      <FadeInUp>
        <FAQSection />
      </FadeInUp>
      
      <FadeInUp>
        <TrustBadgesSection />
      </FadeInUp>
    </main>
  );
};

export default Index;