import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyArthavaSection } from "@/components/landing/WhyArthavaSection";
import { StrategySection } from "@/components/landing/StrategySection";
import { ResearchSection } from "@/components/landing/ResearchSection";
import { WorkspacesSection } from "@/components/landing/WorkspacesSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyArthavaSection />
        <StrategySection />
        <ResearchSection />
        <WorkspacesSection />
        <SecuritySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
