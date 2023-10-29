import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../userStore";
import { useAppStore } from "../appStore";
import Theme from "./Theme/Theme";
import LanguageSelect from "./Language/LanguageSelect";

const Navbar: React.FC = () => {
  const { user, signOut } = useUserStore();
  const { darkMode, toggleDarkMode, language, setLanguage } = useAppStore();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900" : "bg-blue-500"
      } p-4 text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="/">JMS</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-4 md:space-x-8`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={signOut}
                  className="hover:underline text-blue-400"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <li>
            <Theme></Theme>
          </li>
          <li>
            <LanguageSelect />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
