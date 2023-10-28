import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <nav className={`bg-${isDarkMode ? 'gray-900' : 'blue-500'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-white text-2xl font-bold`}>JMS</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className={`text-white`}>Home</a>
          <a href="#" className={`text-white`}>About</a>
          <a href="#" className={`text-white`}>Contact</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button onClick={toggleDarkMode} className="text-white">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="text-white bg-transparent border-b-2 border-white focus:outline-none"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className={`block text-white p-2`}>Home</a>
          <a href="#" className={`block text-white p-2`}>About</a>
          <a href="#" className={`block text-white p-2`}>Contact</a>
          <button onClick={toggleDarkMode} className="block text-white p-2">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="block text-white bg-transparent border-b-2 border-white focus:outline-none p-2"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
