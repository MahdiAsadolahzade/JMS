import React from "react";
import { NavLink } from "react-router-dom";
import { useAppStore } from "../../appStore";
import { useUserStore } from "../../userStore";
import { BsJournalPlus } from "react-icons/bs";

const Dashboard: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();

  return (
    <div
      className={`bg-${
        darkMode ? "gray-900" : "white"
      } p-6 rounded-lg shadow-md text-${
        darkMode ? "gray-100" : "gray-600"
      } h-[20vh] border-2 ${darkMode ? "border-teal-500" : "border-gray-500"}`}
    >
      <h2 className="text-2xl flex justify-start items-center  font-bold mb-4">
        <div className="px-2">
          <BsJournalPlus />
        </div>
        <div>
          {language === "Farsi"
            ? "ژورنال جدیدی بسازید"
            : "Create A New Journal"}
        </div>
      </h2>
      {user ? (
        <NavLink to={`/dashboard/createjournal`}>
          <div className="flex justify-center items-center">
            <button className="bg-teal-500  hover:bg-teal-700 text-white font-bold py-3 px-5 rounded">
              {language === "Farsi" ? "از این جا شروع کنید" : "Start From Here"}
            </button>
          </div>
        </NavLink>
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

export default Dashboard;
