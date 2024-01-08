import React from "react";
import { useAppStore } from "../../appStore";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import ir from "../../SVG/Country/ir.svg"
import us from "../../SVG/Country/us.svg";

const LanguageSelect: React.FC = () => {
  const { language, setLanguage, darkMode } = useAppStore();

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="relative inline-block">
      <div className="group">
        <button
          className="flex items-center cursor-pointer  text-white py-2 px-3 rounded"
          onClick={() =>
            setLanguage(language === "English" ? "Farsi" : "English")
          }
        >
          <div
            className="w-[25px] h-[25px] m-1 rounded-full"
            style={{
              backgroundImage: `url(${language === "English" ? us : ir})`,
              backgroundSize: "cover",
            }}
          ></div>
          {/* {language} */}
          <FaChevronDown className="ml-1" />
        </button>
        <div
          className={`hidden group-hover:block absolute top-full left-0 w-24 py-2 ${
            darkMode
              ? "bg-gray-800 border-gray-600"
              : "bg-teal-800 border-teal-300"
          } text-white border  rounded z-10`}
        >
          <div
            className={`flex items-center justify-center px-2 py-1 ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-[#6CC0B9]"
            }  cursor-pointer`}
            onClick={() => handleLanguageChange("English")}
          >
            
            English
          </div>
          <div
            className={`flex items-center justify-center px-2 py-1 ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-[#6CC0B9]"
            } cursor-pointer`}
            onClick={() => handleLanguageChange("Farsi")}
          >
           
            فارسی
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
