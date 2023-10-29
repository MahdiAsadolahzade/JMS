import React from 'react';
import { useAppStore } from '../../appStore';

const LanguageSelect: React.FC = () => {
  const { language, setLanguage } = useAppStore();

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="cursor-pointer bg-gray-800 text-white group-hover:block z-10 transition duration-300"
      >
        <option value="English">English</option>
        <option value="Farsi">فارسی</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
