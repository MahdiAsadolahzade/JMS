// SearchAndGetStartedSection.tsx
import React, { useState } from "react";
import { useAppStore } from "../../appStore";
import { FaSearch } from "react-icons/fa";
import GetStartedIcon from "../../assets/GetStartedIcon";
import { useSearchJournals } from "../../hooks/useStatistics";
import Loader from "../../custom/Loader";
import { useNavigate } from "react-router-dom";
import "../Scrollbar.css";

const SearchAndGetStartedSection = () => {
  const { darkMode, language } = useAppStore();
  const [searchText, setSearchText] = useState("");
  const [displayedResults, setDisplayedResults] = useState(5); // تعداد نتایج مورد نمایش
  const resultsPerPage = 5;
  const searchJournalsQuery = useSearchJournals(searchText);
  const navigate = useNavigate();
  const handleSearch = () => {
    searchJournalsQuery.refetch();
    setDisplayedResults(5);
  };

  const handleShowMore = () => {
    setDisplayedResults(displayedResults + resultsPerPage);
  };
  const handleShowLess = () => {
    // اضافه شده - کاهش تعداد نتایج مورد نمایش هر بار
    const newDisplayedResults = Math.max(displayedResults - resultsPerPage, 0);
    setDisplayedResults(newDisplayedResults);
  };
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
          />
          <button
            className="absolute right-0 mr-3 focus:outline-none text-gray-600 hover:text-teal-500"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className={`container max-h-[25vh] custom-overflow mx-auto`} dir="ltr">
        {searchJournalsQuery.isLoading && (
          <div className="flex flex-col justify-center items-center my-10">
            <Loader />
          </div>
        )}
        {searchJournalsQuery.isError && <p>Error loading data</p>}
        {searchJournalsQuery.isSuccess && (
          <div>
            {searchJournalsQuery.data
              .slice(0, displayedResults)
              .map((journal) => (
                <div
                  key={journal.ID}
                  onClick={() => navigate(`/journal/${journal.ID}`)}
                  className={`flex cursor-pointer flex-row justify-center items-center h-5 p-5 m-4 rounded-[25px] ${
                    darkMode
                      ? "bg-gray-500 border-2 border-teal-700 hover:bg-teal-500"
                      : "bg-gray-100 border-2 border-teal-500 hover:bg-teal-100"
                  } hover:scale-[1.02]`}
                >
                  <div>{journal.Name}</div>
                </div>
              ))}
          </div>
        )}
     <div className="flex flex-row justify-center items-center">
     {searchJournalsQuery?.data?.length > displayedResults && (
          <button
            onClick={handleShowMore}
            className="bg-teal-500 text-white py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline-teal hover:bg-teal-600"
          >
            {language === "Farsi" ? "نمایش بیشتر" : "Show more"}
          </button>
        )}

        {displayedResults > resultsPerPage && (
          <button
            onClick={handleShowLess}
            className="bg-gray-500 text-white py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline-gray hover:bg-gray-600"
          >
            {language === "Farsi" ? "نمایش کمتر" : "Show less"}
          </button>
        )}
     </div>
      </div>

      <div className="w-[40%] mx-auto">
        <GetStartedIcon />
      </div>
    </section>
  );
};

export default SearchAndGetStartedSection;
