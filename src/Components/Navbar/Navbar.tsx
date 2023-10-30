import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import Theme from "../Theme/Theme";
import LanguageSelect from "../Language/LanguageSelect";
import SearchBar from "./SearchBar";
import { FaSearch } from "react-icons/fa";
import JMSBar from "./JMSBar";
import HomeBar from "./HomeBar";
import AboutBar from "./AboutBar";
import ContactBar from "./ContactBar";
import DashboardBar from "./DashboardBar";
import SignoutBar from "./SignoutBar";
import LoginBar from "./LoginBar";

const Navbar: React.FC = () => {
  const { user, signOut } = useUserStore();
  const { darkMode } = useAppStore();
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

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900" : "bg-blue-500"
      } p-4 text-white relative`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <JMSBar></JMSBar>
        </Link>
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
              <div className={`absolute top-2 left-2 `}>
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              darkMode={darkMode}
            ></SearchBar>
            <div
              className={`absolute top-3 left-2 ${
                darkMode ? "" : "text-gray-600"
              }`}
            >
              <FaSearch></FaSearch>
            </div>
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
            <Link to="/" onClick={closeMenu} >
              <HomeBar></HomeBar>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              <AboutBar></AboutBar>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              <ContactBar></ContactBar>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard" onClick={closeMenu}>
                  <DashboardBar></DashboardBar>
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
                  <SignoutBar></SignoutBar>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  <LoginBar></LoginBar>
                </Link>
              </li>
            </>
          )}
        </ul>
        {searchOpen && (
          <div className="md:hidden">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              darkMode={darkMode}
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
