
import { useAppStore } from "../../appStore";
import StaticsIcon from "../../assets/StaticsIcon";
import { FaUser } from "react-icons/fa";

import { BsJournals } from "react-icons/bs";
import { useUserCount, useJournalCount } from "../../hooks/useStatistics";

const StatisticsSection = () => {
  const { darkMode, language } = useAppStore();
  const userCountQuery = useUserCount();
  const journalCountQuery = useJournalCount();

  const sectionClasses = `h-auto min-h-[90vh] py-48 ${
    darkMode ? "bg-gray-600" : "bg-white"
  } text-${darkMode ? "white" : "gray-800"} py-16`;
  const cardClasses = `rounded-full flex flex-col justify-center items-center min-w-[200px] min-h-[200px] my-auto p-4 custom-card ${
    darkMode ? "bg-gray-500 text-gray-200" : "bg-teal-300 text-gray-700"
  } `;
  const headingClasses =
    "text-xl font-semibold flex justify-center items-center mb-2";
  const valueClasses = "text-3xl font-bold";

  return (
    <section id="statistics-section" className={sectionClasses}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          {language === "Farsi" ? "آمار کلیدی" : "Key Statistics"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center flex-wrap gap-6 ">
            <div className={cardClasses}>
              <h3 className={headingClasses}>
                <FaUser />
                {language === "Farsi" ? "کاربران" : "Users"}
              </h3>
              {userCountQuery.isLoading ? (
                <p>Loading...</p>
              ) : userCountQuery.isError ? (
                <p>Error loading data</p>
              ) : (
                <p className={valueClasses}>{userCountQuery.data.userCount}</p>
              )}
            </div>

            <div className={cardClasses} dir="ltr">
              <h3 className={headingClasses}>
                <BsJournals />
                {language === "Farsi" ? "ژورنال‌ها" : "Journals"}
              </h3>
              {journalCountQuery.isLoading ? (
                <p>Loading...</p>
              ) : journalCountQuery.isError ? (
                <p>Error loading data</p>
              ) : (
                <p className={valueClasses}>
                  {journalCountQuery.data.journalCount}
                </p>
              )}
            </div>
          </div>

          <div className="w-[85%] mx-auto">
            <StaticsIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
