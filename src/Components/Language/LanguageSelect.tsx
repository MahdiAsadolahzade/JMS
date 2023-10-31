import React from 'react';
import { useAppStore } from '../../appStore';
import { FaGlobe, FaChevronDown } from 'react-icons/fa'; 

const LanguageSelect: React.FC = () => {
  const { language, setLanguage } = useAppStore();

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="relative inline-block">
      <div className="group">
        <button
          className="flex items-center cursor-pointer bg-gray-800 text-white py-2 px-4 rounded"
          onClick={() => setLanguage(language === 'English' ? 'Farsi' : 'English')}
        >
          <FaGlobe className="mr-1" />
          {language}
          <FaChevronDown className="ml-1" />
        </button>
        <div className="hidden group-hover:block absolute top-full left-0 w-24 py-2 bg-gray-800 text-white border border-gray-600 rounded z-10">
          <div
            className="flex items-center px-2 py-1 hover:bg-gray-600 cursor-pointer"
            onClick={() => handleLanguageChange('English')}
          >
            <span role="img" aria-label="USA Flag" className="mr-1">
              🇺🇸
            </span>
            English
          </div>
          <div
            className="flex items-center px-2 py-1 hover:bg-gray-600 cursor-pointer"
            onClick={() => handleLanguageChange('Farsi')}
          >
            <span role="img" aria-label="Iran Flag" className="mr-1">
              🇮🇷
            </span>
            فارسی
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
