import { BuiltOnExcellence } from "@/components/built-on-excellence";
import { CallToAction } from "@/components/call-to-action";
import { ContactFooter } from "@/components/contact-footer";
import { Faq } from "@/components/faq";
import { HeroSection } from "@/components/hero-section";
import { ItalianExcellence } from "@/components/italian-excellence";
import { ProductFeatures } from "@/components/product-features";
import { Testimonials } from "@/components/testimonials";
import { TheInnovation } from "@/components/the-innovation";
import { WhyChooseInnovantissimo } from "@/components/why-choose-innovantissimo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <HeroSection />
      <TheInnovation />
      <BuiltOnExcellence />
      <ItalianExcellence />
      <WhyChooseInnovantissimo />
      <ProductFeatures />
      <Testimonials />
      <Faq />
      <CallToAction />
      <ContactFooter />
    </main>
  );
}
