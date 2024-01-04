import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "../theme/ThemeContext";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const { isDarkMode, toggleTheme } = useTheme();

  const linkTextStyles = `text-slate-900 text-sm md:text-md lg:text-lg hover:text-blue-500 hover:underline ${
    isDarkMode ? "dark:text-slate-200 " : ""
  }`;

  return (
    <div>
      <nav
        className={`sticky top-0 bg-white border-gray-900 ${
          isDarkMode ? "dark:bg-gray-900 dark:border-gray-700 " : ""
        } p-4 border-b-2`}
      >
        <div className="container mx-auto flex justify-around  items-center ">
          {/* Logo or Site Name */}
          <Link
            to="/"
            className={`text-black text-sm md:text-md lg:text-lg font-bold ${
              isDarkMode ? "dark:text-slate-200" : ""
            }`}
          >
            English Grammar Wiz
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-4">
            <li
              className={`${linkTextStyles} ${
                activeLink === "/" &&
                "underline text-blue-600 dark:text-blue-300 font-bold"
              }`}
              onClick={() => setActiveLink("/")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${linkTextStyles} ${
                activeLink === "/quiz" &&
                "underline text-blue-600 dark:text-blue-300 font-bold"
              }`}
              onClick={() => setActiveLink("/quiz")}
            >
              <Link to="/quiz">Quiz</Link>
            </li>
            <li
              className={`${linkTextStyles} ${
                activeLink === "/play" &&
                "underline text-blue-600 dark:text-blue-300 font-bold"
              }`}
              onClick={() => setActiveLink("/play")}
            >
              <Link to="/play">Play</Link>
            </li>
          </ul>
          <div>
            <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDarkMode ? (
                <FaSun size={24} className="text-yellow-500" />
              ) : (
                <FaMoon size={24} className=" text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
