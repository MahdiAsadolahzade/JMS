import React from "react";
import { useAppStore } from "../../appStore";
import JMSLogo from "../../../public/Logo/JMS.svg";

const Hero = () => {
  const { darkMode, language } = useAppStore();

  return (
    <section
      className={`hero h-[90vh] ${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
      } py-24`}
    >
      <div className="container mx-auto text-center">
        <img src={JMSLogo} alt="JMS Logo" className="w-64 h-64 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-4">
          {language === "Farsi" ? "به JMS خوش آمدید" : "Welcome to JMS"}
        </h1>
        <p className="text-lg mb-8">
          {language === "Farsi"
            ? "سیستم مدیریت ژورنال شما"
            : "Your Journal Management System"}
        </p>
        <a
          href="/search"
          className="btn btn-primary text-white bg-teal-500 hover:bg-teal-600 py-3 px-8 rounded-full uppercase text-sm font-semibold"
        >
          {language === "Farsi" ? "شروع کنید" : "Get Started"}
        </a>
      </div>
    </section>
  );
};

export default Hero;
