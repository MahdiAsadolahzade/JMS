import React from "react";
import JournalList from "./JournalList";
import UserProfile from "./UserProfile";
import CreateJournalForm from "./CreateJournalForm";
import { useAppStore } from "../../appStore";

const Dashboard: React.FC = () => {
  const { darkMode } = useAppStore();

  return (
    <div
      className={`custom-overflow h-[90vh] ${
        darkMode ? "dark bg-gray-600 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className={`container mx-auto mt-8 ${darkMode ? "dark" : "light"}`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="md:col-span-1 lg:col-span-2">
            <UserProfile />
          </div>
          <div className="md:col-span-1 lg:col-span-2 space-y-[2.5vh]">
            <CreateJournalForm />
            <JournalList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
