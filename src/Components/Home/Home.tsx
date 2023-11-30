import React, { useState, useEffect } from "react";
import { useAppStore } from "../../appStore";
import LoadingAnimation from "../Loading Animation/LoadingAnimation";
import Hero from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSection from "./TestimonialsSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturedJournalsSection from "./FeaturedJournalsSection";
import SearchAndGetStartedSection from "./SearchAndGetStartedSection";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useAppStore();
  const [loading, setLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    const scrollContainer = document.querySelector(".custom-overflow");
    if (scrollContainer) {
      const scrollTop = scrollContainer.scrollTop;
      setShowScrollToTop(scrollTop > 500);
    }
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".custom-overflow");
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`custom-overflow  h-[90vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
      onScroll={handleScroll}
    >
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <>
          <Hero />
          <FeaturesSection />
          <StatisticsSection />
          <TestimonialsSection />
          <HowItWorksSection />
          <FeaturedJournalsSection />
          <SearchAndGetStartedSection />
        </>
      )}

      {showScrollToTop && (
        <button
          className={`fixed left-4 bottom-4 p-4 text-xl bg-teal-500 hover:bg-gradient-to-tl from-teal-600 to-violet-500 text-white rounded-full transition-opacity`}
          onClick={scrollToTop}
        >
          <FaRegArrowAltCircleUp />
        </button>
      )}
    </div>
  );
};

export default Home;
