
import { useAppStore } from "../../appStore";
import { FaShare, FaHeart, FaStar, FaComment } from "react-icons/fa";
import FeaturedJournalsIcon from "../../assets/FeaturedJournalsIcon"; // Import icons

const FeaturedJournalsSection = () => {
  const { darkMode, language } = useAppStore();

  const containerClasses = `h-auto min-h-screen custom-overflow ${darkMode ? "bg-gray-800 dark" : "bg-teal-100"} text-${
    darkMode ? "white" : "gray-800"
  } py-16`;

  const headingClasses = "text-4xl font-bold mb-8";

  const cardClasses = `p-4 ${
    darkMode
      ? "bg-gray-700 hover:bg-gray-600"
      : "bg-white hover:bg-gray-100"
  } rounded-lg shadow-md mb-4`;

  const cardHeaderClasses = `flex justify-between items-center ${
    darkMode ? "text-gray-300" : "text-gray-700"
  }`;

  const cardFooterClasses = `flex items-center mt-4 ${
    darkMode ? "text-gray-300" : "text-gray-700"
  }`;

  const iconClasses = `mr-2 ${darkMode ? "text-gray-200" : "text-gray-600"}`;

  return (
    <section id="featured-journals-section" className={containerClasses}>
    <div className="grid grid-cols-1 md:grid-cols-2 px-4">
      
    <div className="my-auto">
        <FeaturedJournalsIcon/>
      </div>
    <div className="my-auto">
     <div className="container mx-auto text-center">
        <h2 className={headingClasses}>
          {language === "Farsi" ? "مقالات ویژه" : "Featured Journals"}
        </h2>
        <div className="grid grid-cols-1  gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={cardClasses}>
              <div className={cardHeaderClasses}>
                <h3 className="text-xl font-semibold">
                  {language === "Farsi"
                    ? "عنوان مقاله"
                    : "Article Title"}
                </h3>
                <div>
                  <button className="btn btn-secondary text-teal-500">
                    {language === "Farsi" ? "خواندن" : "Read"}
                  </button>
                </div>
              </div>
              <p className="mb-4">
                {language === "Farsi"
                  ? "توضیحات مختصری از مقاله."
                  : "A brief description of the article."}
              </p>
              <div className={cardFooterClasses}>
                <div className="flex items-center">
                  <FaShare className={iconClasses} />
                  {language === "Farsi" ? "اشتراک‌گذاری" : "Share"}
                </div>
                <div className="flex items-center ml-4">
                  <FaHeart className={iconClasses} />
                  {language === "Farsi" ? "پسندیدن" : "Like"}
                </div>
                <div className="flex items-center ml-4">
                  <FaStar className={iconClasses} />
                  {language === "Farsi" ? "رتبه‌بندی" : "Rating"}
                </div>
                <div className="flex items-center ml-4">
                  <FaComment className={iconClasses} />
                  {language === "Farsi" ? "نظرات" : "Comments"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="btn btn-primary">
          {language === "Farsi" ? "نمایش بیشتر" : "Show More"}
        </button>
      </div>
     </div>

    </div>
    </section>
  );
};

export default FeaturedJournalsSection;
