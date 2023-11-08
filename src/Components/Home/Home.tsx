import { useState, useEffect } from "react";
import { useAppStore } from "../../appStore";
import LoadingAnimation from "../Loading Animation/LoadingAnimation";
import Hero from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSection from "./TestimonialsSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturedJournalsSection from "./FeaturedJournalsSection";
import SearchAndGetStartedSection from "./SearchAndGetStartedSection";

const Home = () => {
  const { darkMode } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`custom-overflow  h-[90vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <>
          <Hero />
          <FeaturesSection />
          <StatisticsSection/>
          <TestimonialsSection/>
          <HowItWorksSection/>
          <FeaturedJournalsSection/>
          <SearchAndGetStartedSection/>

        </>
      )}
    </div>
  );
};

export default Home;
