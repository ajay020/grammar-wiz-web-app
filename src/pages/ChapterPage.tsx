// components/ChapterPage.js
import React, { useState } from "react";

import { createSlug } from "../utils/utils";
import chapters from "../database/chapter";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { FaBars } from "react-icons/fa6";
import ToggleMenuButton from "../components/common/ToggleMenuButton";
import ToggleablePanel from "../components/ToggableLeftPanel";

interface ChapterPageProps {
  //   chapters: ChaptersData["chapters"];
}

const ChapterPage: React.FC<ChapterPageProps> = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex">
      <ToggleablePanel>
        <h2 className={`text-gray-500 text-sm mb-4 pt-8 `}>Chapters</h2>

        <ul className={`mt-4`}>
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
      </ToggleablePanel>
      <div
        className={` h-screen  bg-white w-full overflow-y-auto ${
          isDarkMode ? "dark:bg-slate-900" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ChapterPage;
