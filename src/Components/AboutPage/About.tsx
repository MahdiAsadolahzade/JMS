import { useAppStore } from "../../appStore";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import "../Scrollbar.css";

const About = () => {
  const { darkMode } = useAppStore();

  return (
    <div
      className={`custom-overflow h-[89.5vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <AboutSection1></AboutSection1>

      <AboutSection2></AboutSection2>
    </div>
  );
};

export default About;
