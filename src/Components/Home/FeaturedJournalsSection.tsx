import React, { useState } from "react";
import { useAppStore } from "../../appStore";
import FeaturedJournalsIcon from "../../assets/FeaturedJournalsIcon";
import { useAllJournals } from "../../hooks/useStatistics";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./page.css"

const LatestJournalsSection = () => {
  const { darkMode, language } = useAppStore();
  const journalsQuery = useAllJournals();
  const [pageNumber, setPageNumber] = useState(0);
  
  const journalsPerPage = 3; // تعداد ژورنال‌ها در هر صفحه
  const maxJournalsToShow = 15; 

  
  const pagesVisited = pageNumber * journalsPerPage;

  const pageCount = Math.ceil(
    Math.min(journalsQuery.data?.length || 0, maxJournalsToShow) / journalsPerPage
  );

  const startIndex = Math.min(pageNumber * journalsPerPage, maxJournalsToShow);
  const endIndex = Math.min(startIndex + journalsPerPage, maxJournalsToShow);

  

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const containerClasses = `h-auto min-h-screen custom-overflow ${
    darkMode ? "bg-gray-800 dark" : "bg-teal-100"
  } text-${darkMode ? "white" : "gray-800"} py-16`;

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
    <section id="latest-journals-section" className={containerClasses}>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="my-auto">
          <FeaturedJournalsIcon />
        </div>
        <div className="my-auto">
          <div className="container mx-auto text-center">
            <h2 className={headingClasses}>
              {language === "Farsi" ? "آخرین ژورنال‌ها" : "Latest Journals"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {journalsQuery.isLoading ? (
                <p>Loading...</p>
              ) : journalsQuery.isError ? (
                <p>Error loading data</p>
              ) : (
                journalsQuery.data
                .slice(startIndex, endIndex)
                  .map((journal) => (
                    <div key={journal.ID} className={cardClasses}>
                      <div className={cardHeaderClasses}>
                        <h3 className="text-xl font-semibold">
                          {journal.Name}
                        </h3>
                        <div>
                          <Link
                            to={`/journal/${journal.ID}`}
                            className="btn btn-secondary text-teal-500"
                          >
                            {language === "Farsi" ? "اطلاعات بیشتر" : "More Detail"}
                          </Link>
                        </div>
                      </div>
                      <p className="mb-4">{journal.Description}</p>
                      <div className={cardFooterClasses}>
                      </div>
                    </div>
                  ))
              )}
            </div>
            <div>
              
            </div>
         <div dir="ltr">
         <ReactPaginate
              previousLabel={`${  language === "Farsi" ? "← صفحه قبل " : "← Previous" }`}
              nextLabel={` ${language === "Farsi" ? "صفحه بعد →" : "Next →"} `}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
         </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJournalsSection;
