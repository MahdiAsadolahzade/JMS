import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../userStore";
import { useAppStore } from "../appStore";
import Theme from "./Theme/Theme";
import LanguageSelect from "./Language/LanguageSelect";
import Icons from "../assets/Icons";

const Navbar: React.FC = () => {
  const { user, signOut } = useUserStore();
  const { darkMode, toggleDarkMode, language, setLanguage } = useAppStore();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900" : "bg-blue-500"
      } p-4 text-white relative`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`text-2xl font-bold cursor-pointer ${
            window.innerWidth < 768 ? "hidden" : ""
          }`}
        >
          <Link to="/">JMS</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleMenuClick}>
          <div className="w-10 h-10 flex flex-col justify-between">
            <div
              className={`h-1 w-6 bg-white transition-transform transform ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-white transition-transform transform ${
                menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleSearch}>
          <div className="w-10 h-10">
            <div className="relative">
              <div className={`absolute top-2 left-2 `}>{Icons.search}</div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              } p-2 pl-8 pr-2 rounded-full focus:outline-none`}
            />
            <div className="absolute top-2 left-2">{Icons.search}</div>
          </div>
        </div>
        <ul
          className={`md:flex flex-col md:flex-row space-y-4 md:space-x-8 ${
            menuOpen ? "flex justify-center items-center w-full" : "hidden"
          } md:space-y-0 absolute top-full left-0 mt-2 md:relative ${
            darkMode ? "bg-gray-900" : "bg-blue-500"
          } z-10`}
        >
          <li>
            <Link to="/" onClick={closeMenu}>
              <span className="flex flex-col justify-center items-center">
                {Icons.home}
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              <span className="flex flex-col justify-center items-center">
                {Icons.about}
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              <span className="flex flex-col justify-center items-center">
                {Icons.contact}
                Contact
              </span>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard" onClick={closeMenu}>
                  <span className="flex flex-col justify-center items-center">
                    {Icons.dashboard}
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                  className="hover:underline text-blue-400"
                >
                  <span className="flex flex-col justify-center items-center">
                    {Icons.signout}
                    Sign Out
                  </span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  <span className="flex flex-col justify-center items-center">
                    {Icons.login}
                    Login
                  </span>
                </Link>
              </li>
            </>
          )}
        </ul>
        {searchOpen && (
          <div className="md:hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              } p-2   rounded-full focus:outline-none`}
            />
          </div>
        )}
        <div
          className={`flex items-center space-x-3 ${
            searchOpen ? "hidden" : ""
          }`}
        >
          <LanguageSelect />
          <Theme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
