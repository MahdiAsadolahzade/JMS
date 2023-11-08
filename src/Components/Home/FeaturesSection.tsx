import React from "react";
import { useAppStore } from "../../appStore";

const FeaturesSection = () => {
  const { darkMode, language } = useAppStore();

  const featureItems = [
    {
      icon: "🚀",
      title: language === "Farsi" ? "عملکرد سریع" : "Fast Performance",
      description: language === "Farsi" ? "با سرعت به کارها بپردازید" : "Get things done quickly.",
    },
    {
      icon: "🎨",
      title: language === "Farsi" ? "طراحی زیبا" : "Beautiful Design",
      description: language === "Farsi" ? "تجربه‌ای زیبا و جذاب" : "A beautiful and engaging experience.",
    },
    {
      icon: "🌐",
      title: language === "Farsi" ? "پشتیبانی از چند زبانه" : "Multi-language Support",
      description: language === "Farsi" ? "به چند زبان مختلف دسترسی داشته باشید" : "Access in multiple languages.",
    },
  ];

  return (
    <section
      className={`${darkMode ? "bg-gray-800" : "bg-teal-100"} h-[90vh]  text-${
        darkMode ? "white" : "gray-800"
      } pt-48`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {language === "Farsi" ? "ویژگی‌ها" : "Features"}
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div
              key={index}
              className={`p-4 ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800"
              } rounded-lg shadow-lg custom-card`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
