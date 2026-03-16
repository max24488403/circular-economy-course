/*
  DESIGN: Clean Presentation Style — 簡報風格
  Home: Main landing page assembling all sections
  White/light gray backgrounds, no background images
  Color: Deep green + Amber + Terracotta accents on white
  Typography: Noto Sans TC
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
    <div className="min-h-screen bg-white">
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
