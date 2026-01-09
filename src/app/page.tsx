import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhyArthavaSection } from "@/components/landing/WhyArthavaSection";
import { InsightsSection } from "@/components/landing/InsightsSection";
import { WorkspacesSection } from "@/components/landing/WorkspacesSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyArthavaSection />
        <InsightsSection />
        <WorkspacesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
