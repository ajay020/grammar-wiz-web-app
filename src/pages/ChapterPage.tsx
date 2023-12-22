// components/ChapterPage.js
import React, { useState } from "react";

import { createSlug } from "../utils/utils";
import chapters from "../database/chapter";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { FaBars } from "react-icons/fa6";

interface ChapterPageProps {
  //   chapters: ChaptersData["chapters"];
}

const ChapterPage: React.FC<ChapterPageProps> = () => {
  const [showLeftPanel, setShowLeftPanel] = useState(true);

  const { isDarkMode } = useTheme();

  const toggleChapterListVisibility = () => {
    setShowLeftPanel((prev) => !prev);
  };

  return (
    <div className="flex">
      <div
        className={`bg-gray-100 relative  h-screen pl-8 transition-all duration-300  ${
          showLeftPanel ? "w-1/5" : "w-0 pl-0"
        } ${isDarkMode ? "dark:bg-slate-800" : ""}`}
      >
        <h2 className={`text-gray-500 text-sm mb-4 pt-8 overflow-hidden`}>
          Chapters
        </h2>
        <button
          className="
          absolute left-full top-8 w-12 h-12 
           bottom-4 bg-slate-700
            text-white px-4 py-2 rounded"
          onClick={toggleChapterListVisibility}
        >
          <FaBars />
        </button>
        <ul className={`mt-4 overflow-hidden`}>
          {chapters.map((chapter) => (
            <li className="cursor-pointer mb-2" key={chapter.id}>
              <Link
                to={`${createSlug(chapter.title)}`}
                className={`text-black hover:text-blue-500 hover:underline ${
                  isDarkMode ? "dark:text-slate-200" : ""
                }`}
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Toggle sidebar button*/}
      </div>

      <div
        className={` h-screen  bg-white w-full ${showLeftPanel ? "" : ""} ${
          isDarkMode ? "dark:bg-slate-900" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ChapterPage;
