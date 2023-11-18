import React from 'react';
import { useUserStore } from '../../userStore';
import { useAppStore } from '../../appStore';

const JournalList: React.FC = () => {
  const { user } = useUserStore();
  const { darkMode, language } = useAppStore();
  const journals = user?.journals || [];

  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'white'} p-6 rounded-lg shadow-md text-${darkMode ? 'gray-100' : 'gray-600'}`}>
      {user ? (
        <>
          <h2 className="text-xl font-bold mb-4">{language === 'Farsi' ? 'دفترچه یادداشت‌های شما' : 'Your Journals'}</h2>
          {journals.length > 0 ? (
            journals.map((journal) => (
              <div key={journal.id} className="border-b py-4">
                <h3 className="text-lg font-semibold">{journal.title}</h3>
                <p>{journal.content}</p>
              </div>
            ))
          ) : (
            <p>{language === 'Farsi' ? 'هنوز دفترچه‌ی یادداشتی ندارید.' : 'No journals yet.'}</p>
          )}
        </>
      ) : (
        <p>{language === 'Farsi' ? 'لطفاً وارد شوید تا دفترچه‌ی یادداشت‌های خود را مشاهده کنید.' : 'Please log in to view your journals.'}</p>
      )}
    </div>
  );
};

export default JournalList;
