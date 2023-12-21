// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "../theme/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  console.log(isDarkMode);

  return (
    <div>
      <nav
        className={` bg-gray-100 border-gray-900 ${
          isDarkMode ? "dark:bg-gray-900 dark:border-gray-100 " : ""
        } p-4 border-b-2`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Site Name */}
          <Link to="/" className="text-white text-xl font-bold">
            English Grammar Wiz
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <button
                className="text-white bg-gray-600 px-4 py-2 rounded"
                onClick={toggleTheme}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li className="text-white">
              <Link to="/grammar">Grammar Home</Link>
            </li>
            <li className="text-white">
              <Link to="/about">About Us</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
