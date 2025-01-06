import LandingPage from "@/app/components/Home/FinalCallToActionSection/LandingPage";
import FAQSection from "@/app/components/Home/FrequentlyAskedQuestionsSection/FAQSection";
import Hero from "@/app/components/Home/HeroSection/Hero";
import MarketingStats from "@/app/components/Home/TestimonialsSection/MarketingStats";
import VideoIntroduction from "@/app/components/Home/VideoIntroductionSection/VideoIntroduction";

export default function Home() {
  return (
    <main>
      <Hero/>
      <MarketingStats/>
      <FAQSection/>
      {/* <VideoIntroduction/> */}
      <LandingPage/>
    </main>
  );
}
