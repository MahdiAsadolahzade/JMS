import { useAppStore } from "../../appStore";
import { FiSearch, FiEdit, FiCheckCircle } from "react-icons/fi";
import HowItWorksIcon from "../../assets/HowItWorksIcon"; // Import icons

const HowItWorksSection = () => {
  const { darkMode, language } = useAppStore();

  const containerClasses = `h-auto min-h-screen  ${
    darkMode ? "bg-gray-600 dark" : "bg-white"
  } text-${darkMode ? "white" : "gray-800"} py-16`;

  const headingClasses = "text-4xl font-bold mb-8";

  const stepClasses = `p-4  min-w-[200px] min-h-[200px]  rounded-full custom-card ${
    darkMode ? "bg-gray-700" : "bg-teal-100"
  } text-${darkMode ? "white" : "gray-800"}  shadow-md`;

  return (
    <section id="how-it-works-section " className={containerClasses}>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6">
        <div className="container mx-auto my-auto  text-center">
          <h2 className={headingClasses}>
            {language === "Farsi" ? "چگونگی عملکرد" : "How It Works"}
          </h2>
          <div className="flex justify-center items-center flex-wrap  gap-6">
            <div className={stepClasses}>
              <FiSearch className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === "Farsi" ? "مرحله 1 " : "Step 1"}
              </h3>
              <p>
                {language === "Farsi"
                  ? "جستجو در مقالات"
                  : "Search for articles"}
              </p>
            </div>

            <div className={stepClasses}>
              <FiEdit className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === "Farsi" ? "مرحله 2 " : "Step 2"}
              </h3>
              <p>{language === "Farsi" ? "ویرایش مقالات" : "Edit articles"}</p>
            </div>

            <div className={stepClasses}>
              <FiCheckCircle className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === "Farsi" ? "مرحله 3 " : "Step 3"}
              </h3>
              <p>
                {language === "Farsi" ? "تأیید و انتشار" : "Review and publish"}
              </p>
            </div>
          </div>
        </div>

        <div className="my-auto">
          <HowItWorksIcon />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
