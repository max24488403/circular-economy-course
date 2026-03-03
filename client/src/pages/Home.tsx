/*
  DESIGN: Terra Narrativa — 大地敘事
  Home: Main landing page assembling all sections
  Wabi-Sabi meets Nordic Minimalism
  Color: Deep charcoal + Ivory + Forest Green + Terracotta
  Typography: Cormorant Garamond (display) + Noto Sans TC (body)
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import MythsSection from "@/components/MythsSection";
import TrilogySection from "@/components/TrilogySection";
import ModulesSection from "@/components/ModulesSection";
import ComparisonSection from "@/components/ComparisonSection";
import InstructorsSection from "@/components/InstructorsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <MythsSection />
      <TrilogySection />
      <ModulesSection />
      <ComparisonSection />
      <InstructorsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
