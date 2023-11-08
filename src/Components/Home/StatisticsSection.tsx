import React from "react";
import { useAppStore } from "../../appStore";
import {TbUsers} from "react-icons/tb"

const StatisticsSection = () => {
  const { darkMode, language } = useAppStore();

  const sectionClasses = ` h-[90vh] py-48 ${
    darkMode ? "bg-gray-600" : "bg-white"
  } text-${darkMode ? "white" : "gray-800"} py-16`;
  const cardClasses = `p-4 custom-card ${
    darkMode ? "bg-gray-500 text-gray-200" : "bg-teal-300 text-gray-700"
  } rounded-lg`;
  const headingClasses = "text-xl font-semibold mb-2";
  const valueClasses = "text-3xl font-bold";

  return (
    <section id="statistics-section" className={sectionClasses}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          {language === "Farsi" ? "آمار کلیدی" : "Key Statistics"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className={cardClasses}>
            
            <h3 className={headingClasses}>
              {language === "Farsi" ? "کاربران" : "Users"}
            </h3>
            <p className={valueClasses}>10,000</p>
          </div>
          <div className={cardClasses}>
            <h3 className={headingClasses}>
              {language === "Farsi" ? "مقالات" : "Articles"}
            </h3>
            <p className={valueClasses}>5,000</p>
          </div>
          <div className={cardClasses}>
            <h3 className={headingClasses}>
                
              {language === "Farsi" ? "ژورنال‌ها" : "Journals"}
            </h3>
            <p className={valueClasses}>2,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
