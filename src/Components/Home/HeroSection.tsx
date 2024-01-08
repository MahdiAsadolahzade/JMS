import { useAppStore } from "../../appStore";
import JMSLogo from "../../SVG/Logo/JMS.svg"
import HeroSectionIcon from "../../assets/HeroSectionIcon";

const Hero = () => {
  const { darkMode, language } = useAppStore();

  const handleScrollToBottom = () => {
    const scrollContainer = document.querySelector(".custom-overflow");
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`hero   min-h-screen ${
        darkMode ? "bg-gray-600 text-white" : "bg-white text-gray-800"
      } `}
    >
      <div className="grid grid-cols-1 h-full md:grid-cols-2 ">
        <div className="container col-span-1 my-auto mx-auto text-center">
          <img
            src={JMSLogo}
            alt="JMS Logo"
            className={`w-64 h-64 mx-auto mb-8 `}
          />
          <h1 className="text-4xl font-bold mb-4">
            {language === "Farsi" ? "به JMS خوش آمدید" : "Welcome to JMS"}
          </h1>
          <p className="text-lg mb-8">
            {language === "Farsi"
              ? "سیستم مدیریت ژورنال شما"
              : "Your Journal Management System"}
          </p>
          <button
            className="btn btn-primary text-white bg-teal-500 hover:bg-gradient-to-tl from-teal-600 to-violet-500 py-3 px-8 rounded-full uppercase text-sm font-semibold"
            onClick={handleScrollToBottom}
          >
            {language === "Farsi" ? "شروع کنید" : "Get Started"}
          </button>
        </div>
        <div className=" mx-auto w-full  my-auto col-span-1">
          <HeroSectionIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;