import LandingPage from "@/components/Home/FinalCallToActionSection/LandingPage";
import FAQSection from "@/components/Home/FrequentlyAskedQuestionsSection/FAQSection";
import Hero from "@/components/Home/HeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProductDisplaySection from "@/components/Home/ProductDisplaySection/ProductDisplay";
import MarketingStats from "@/components/Home/TestimonialsSection/MarketingStats";
import VideoIntroduction from "@/components/Home/VideoIntroduction/VideoIntroduction";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductDisplaySection />
      <MarketingStats />
      <FAQSection />
      <VideoIntroduction />
      <LandingPage />
    </main>
  );
}