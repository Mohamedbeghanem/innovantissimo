import { AboutUs } from "@/components/about-us";
import { ContactFooter } from "@/components/contact-footer";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ProductShowcase />
      <AboutUs />
      <ContactFooter />
    </main>
  );
}
