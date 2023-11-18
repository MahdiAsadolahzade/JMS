import React, { useState } from 'react';
import { useUserStore } from '../../userStore';
import { useAppStore } from '../../appStore';

const CreateJournalForm: React.FC = () => {
  const { user, updateUser } = useUserStore();
  const { darkMode, language } = useAppStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateJournal = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newJournal = {
        id: user?.journals.length || 1,
        title,
        content,
      };
      updateUser({
        ...user!,
        journals: [...(user?.journals || []), newJournal],
      });
      setTitle('');
      setContent('');
      // Logic to create a journal on the server/API call
      console.log('Creating journal:', newJournal);
    }
  };

  return (
    <div className={`bg-${darkMode ? 'gray-900' : 'white'} p-6 rounded-lg shadow-md text-${darkMode ? 'gray-100' : 'gray-600'}`}>
      {user ? (
        <>
          <h2 className="text-xl font-bold mb-4">{language === 'Farsi' ? 'ایجاد یک یادداشت جدید' : 'Create New Journal'}</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
            placeholder={language === 'Farsi' ? 'عنوان یادداشت خود را وارد کنید' : 'Enter the title of your journal'}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4"
            rows={4}
            placeholder={language === 'Farsi' ? 'محتوای یادداشت خود را وارد کنید' : 'Write your journal content here'}
          />
          <button
            onClick={handleCreateJournal}
            className={`bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600`}
          >
            {language === 'Farsi' ? 'ایجاد یادداشت' : 'Create Journal'}
          </button>
        </>
      ) : (
        <p>{language === 'Farsi' ? 'لطفاً وارد شوید تا یک یادداشت جدید ایجاد کنید.' : 'Please log in to create a new journal.'}</p>
      )}
    </div>
  );
};

export default CreateJournalForm;
