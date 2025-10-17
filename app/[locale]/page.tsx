import { Applications } from "@/components/applications";
import { BuiltOnExcellence } from "@/components/built-on-excellence";
import { CompleteImagingSolution } from "@/components/complete-imaging-solution";
import { CompetitiveAdvantage } from "@/components/competitive-advantage";
import { ContactFooter } from "@/components/contact-footer";
import { HeroSection } from "@/components/hero-section";
import { JoinTheRevolution } from "@/components/join-the-revolution";
import { MarketOpportunity } from "@/components/market-opportunity";
import { PatentedAndCertified } from "@/components/patented-and-certified";
import { TheInnovation } from "@/components/the-innovation";
import { WhyChooseInnovantissimo } from "@/components/why-choose-innovantissimo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <HeroSection />
      <TheInnovation />
      <BuiltOnExcellence />
      <WhyChooseInnovantissimo />
      <Applications />
      <MarketOpportunity />
      <PatentedAndCertified />
      <CompetitiveAdvantage />
      <CompleteImagingSolution />
      <JoinTheRevolution />
      <ContactFooter />
    </main>
  );
}
