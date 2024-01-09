import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUserStore } from "../../userStore";
import { useAppStore } from "../../appStore";
import Theme from "../Theme/Theme";
import LanguageSelect from "../Language/LanguageSelect";

import JMSBar from "./JMSBar";
import HomeBar from "./HomeBar";
import AboutBar from "./AboutBar";
import ContactBar from "./ContactBar";
import DashboardBar from "./DashboardBar";
import SignoutBar from "./SignoutBar";
import LoginBar from "./LoginBar";
import { useAuth } from "../../hooks/useAuth";

import "./NavBar.css";

const Navbar: React.FC = () => {
  const { user, signOut } = useUserStore();
  const { darkMode } = useAppStore();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout} =useAuth();


  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };




  

  
  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900" : "bg-teal-500 "
      } p-2 h-[10vh] text-white relative`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className={location.pathname === "/" ? "nav-link-active" : ""}
        >
          <JMSBar></JMSBar>
        </NavLink>
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
     
      
        <ul
          className={`md:flex md:max-h-[5vh] flex-col md:flex-row space-y-4 md:space-x-8 ${
            menuOpen ? "flex justify-center items-center w-full " : "hidden"
          } md:space-y-0 absolute top-full left-0 mt-2 md:relative ${
            darkMode ? "bg-gray-900" : "bg-teal-500"
          } `}
        >
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={`${
                location.pathname === "/"
                  ? `${darkMode ? " nav-link-active-dark" : "nav-link-active"}`
                  : ""
              } hover:animate-pulse`}
            >
              <HomeBar></HomeBar>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={`${
                location.pathname === "/about"
                  ? `${darkMode ? "nav-link-active-dark" : "nav-link-active"}`
                  : ""
              } hover:animate-pulse`}
            >
              <AboutBar></AboutBar>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={`${
                location.pathname === "/contact"
                  ? `${darkMode ? "nav-link-active-dark" : "nav-link-active"}`
                  : ""
              } hover:animate-pulse`}
            >
              <ContactBar></ContactBar>
            </NavLink>
          </li>
          {user  ?(
            <>
              <li>
                <NavLink
                  to={`/dashboard`}
                  onClick={closeMenu}
                  className={`${
                    location.pathname === `/dashboard`
                      ? `${
                          darkMode ? "nav-link-active-dark" : "nav-link-active"
                        }`
                      : ""
                  } hover:animate-pulse`}
                >
                  <DashboardBar></DashboardBar>
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    
                    logout();
                    closeMenu();
                  }}
                  className={` hover:animate-pulse font-bold ${
                    darkMode ? "text-orange-600" : "text-pink-700"
                  }`}
                >
                  <SignoutBar></SignoutBar>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={`${
                    location.pathname === "/login"
                      ? `${
                          darkMode ? "nav-link-active-dark" : "nav-link-active"
                        }`
                      : ""
                  } hover:animate-pulse`}
                >
                  <LoginBar></LoginBar>
                </NavLink>
              </li>
            </>
          )}
        </ul>
       
        <div
          className={`flex items-center space-x-3`}
        >
          <LanguageSelect />
          <Theme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
