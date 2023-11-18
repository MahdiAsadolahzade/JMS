import React from 'react';
import JournalList from './JournalList';
import UserProfile from './UserProfile';
import CreateJournalForm from './CreateJournalForm';
import { useAppStore } from '../../appStore';

const Dashboard: React.FC = () => {
  const { darkMode, language } = useAppStore();

  return (
    <div className={`container mx-auto mt-8 ${darkMode ? 'dark' : 'light'}`}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
        <div className="md:col-span-1 lg:col-span-1">
          <UserProfile />
          {/* Edit Profile Button */}
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-teal-600 w-full">
            {language === 'Farsi' ? 'ویرایش پروفایل' : 'Edit Profile'}
          </button>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              {/* Create Journal Form */}
              <CreateJournalForm />
            </div>
            <div>
              {/* Journal List */}
              <JournalList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
