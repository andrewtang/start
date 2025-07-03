import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import StrategyShowcase from "@/components/StrategyShowcase";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SecuritySection from "@/components/SecuritySection";
import FeeCalculatorSection from "@/components/FeeCalculatorSection";
import ComparisonTableSection from "@/components/ComparisonTableSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <HeroSection />
          <FeatureSection />
          <StrategyShowcase />
          <TestimonialCarousel />
          <SecuritySection />
          <FeeCalculatorSection />
          <ComparisonTableSection />
          <FAQSection />
        </main>
      </div>
    </>
  );
}
