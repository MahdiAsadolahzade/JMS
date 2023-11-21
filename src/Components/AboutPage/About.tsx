import { useState, useEffect } from "react";
import { useAppStore } from "../../appStore";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import "../Scrollbar.css";
import LoadingAnimation from "../Loading Animation/LoadingAnimation.tsx";

const About = () => {
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
          <AboutSection1></AboutSection1>

          <AboutSection2></AboutSection2>
        </>
      )}
    </div>
  );
};

export default About;
