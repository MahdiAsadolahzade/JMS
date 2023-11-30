
import { useAppStore } from "../../appStore";
import { FaSearch } from "react-icons/fa";
import GetStartedIcon from "../../assets/GetStartedIcon";

const SearchAndGetStartedSection = () => {
  const { darkMode, language } = useAppStore();

  return (
    <section
      id="search-section"
      className={`h-[90vh] bg-${darkMode ? "gray-600" : "white"} text-${
        darkMode ? "white" : "gray-800"
      } pt-16`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          {language === "Farsi" ? "جستجو کنید" : "Search and Get Started"}
        </h2>

        <div className="relative flex items-center justify-center mb-12">
          <input
            type="text"
            placeholder={
              language === "Farsi"
                ? "متن جستجو را وارد کنید"
                : "Enter search text"
            }
            className={`w-full text-center p-3 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            } text-gray-800 rounded-lg focus:outline-none focus:ring focus:border-teal-500 placeholder-gray-400`}
          />
          <button className="absolute right-0 mr-3 focus:outline-none text-gray-600 hover:text-teal-500">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="w-[30%] mx-auto">
        <GetStartedIcon/>
      </div>
    </section>
  );
};

export default SearchAndGetStartedSection;
