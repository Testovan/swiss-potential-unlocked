import { HeroSection } from "@/components/HeroSection";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { AssessmentSection } from "@/components/AssessmentSection";
import { QuickAssessment } from "@/components/QuickAssessment";
import { SocialProofSection } from "@/components/SocialProofSection";
import { DIYvsProComparison } from "@/components/DIYvsProComparison";
import { CombinedAssessment } from "@/components/CombinedAssessment";
import { UrgencySection } from "@/components/UrgencySection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBadgesSection } from "@/components/TrustBadgesSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoPlaceholder />
      <QuickAssessment />
      <AssessmentSection />
      <SocialProofSection />
      <DIYvsProComparison />
      <CombinedAssessment />
      <UrgencySection />
      <FAQSection />
      <TrustBadgesSection />
    </main>
  );
};

export default Index;