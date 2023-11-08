import React from "react";
import { useAppStore } from "../../appStore";

const SearchAndGetStartedSection = () => {
  const { darkMode, language } = useAppStore();

  const containerClasses = `h-[90vh] bg-${darkMode ? "gray-800" : "white"} text-${
    darkMode ? "white" : "gray-800"
  } py-16`;

  const headingClasses = "text-4xl font-bold mb-8";

  const searchContainerClasses = "relative flex items-center justify-center mb-12";

  const searchInputClasses = `w-full p-3 ${
    darkMode ? "bg-gray-700" : "bg-gray-100"
  } text-gray-800 rounded-lg focus:outline-none focus:ring focus:border-teal-500 placeholder-gray-400`;

  return (
    <section id="search-section" className={containerClasses}>
      <div className="container mx-auto text-center">
        <h2 className={headingClasses}>
          {language === "Farsi" ? "جستجو کنید" : "Search and Get Started"}
        </h2>

        <div className={searchContainerClasses}>
          <input
            type="text"
            placeholder={
              language === "Farsi"
                ? "متن جستجو را وارد کنید"
                : "Enter search text"
            }
            className={searchInputClasses}
          />
          <button
            className={`absolute right-0 mr-3 focus:outline-none text-gray-600 hover:text-teal-500`}
          >
            Search
          </button>
        </div>

        <p className="text-lg mb-8">
          {language === "Farsi"
            ? "شروع به جستجو کنید یا ما را دنبال کنید"
            : "Start searching or follow us"}
        </p>
        <a href="/follow" className="btn btn-primary">
          {language === "Farsi" ? "دنبال کنید" : "Follow Us"}
        </a>
      </div>
    </section>
  );
};

export default SearchAndGetStartedSection;
