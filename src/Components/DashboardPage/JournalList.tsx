import React from "react";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import { BsJournalBookmarkFill } from "react-icons/bs";

const JournalList: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();
  const journals = user?.journals || [];

  return (
    <div
      className={`bg-${
        darkMode ? "gray-900" : "white"
      } p-6 rounded-lg h-[60vh]  custom-overflow shadow-md text-${
        darkMode ? "gray-100" : "gray-600"
      } h-[60vh] border-2 ${darkMode ? "border-teal-500" : "border-gray-500"}`}
    >
      {user ? (
        <>
         <h2 className="text-2xl flex justify-start items-center  font-bold mb-4">
              <div className="px-2"><BsJournalBookmarkFill/></div>
              <div>{language === "Farsi" ? "ژورنال های شما" : "Your Journals"}</div>
            </h2>
          {journals.length > 0 ? (
            journals.map((journal) => (
              <div key={journal.id} className="border-b py-4">
                <h3 className="text-lg font-semibold">{journal.title}</h3>
                <p>{journal.content}</p>
              </div>
            ))
          ) : (
            <p>
              {language === "Farsi"
                ? "هنوز  ژورنالی ندارید."
                : "No journals yet."}
            </p>
          )}
        </>
      ) : (
        <p>
          {language === "Farsi"
            ? "لطفاً وارد شوید تا  ژورنال خود را مشاهده کنید."
            : "Please log in to view your journals."}
        </p>
      )}
    </div>
  );
};

export default JournalList;
