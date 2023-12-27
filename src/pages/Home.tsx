import React from "react";
import { Link } from "react-router-dom";

import chapters from "../database/chapter";
import { createSlug } from "../utils/utils";
import { useTheme } from "../theme/ThemeContext";

interface HomePageProps {
  //   chapters: ChaptersData["chapters"];
}

const HomePage: React.FC<HomePageProps> = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`bg-white ${isDarkMode ? "dark:bg-slate-900" : ""}`}>
      <div
        className={`bg-white w-2/3 mx-auto p-4 ${
          isDarkMode ? "dark:bg-slate-900" : ""
        }`}
      >
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapter.id} className="">
            {chapterIndex < 3 ? (
              <Link to={`c/${createSlug(chapter.title)}`}>
                <h2
                  className={`hover:underline text-black font-bold text-lg my-2 ${
                    isDarkMode ? "dark:text-slate-200" : ""
                  }`}
                >
                  {chapter.title}
                </h2>
              </Link>
            ) : (
              <Link to={`#`}>
                <h2
                  className={`hover:underline text-gray-500 font-bold text-lg my-2 ${
                    isDarkMode ? "dark:text-slate-500" : ""
                  }`}
                >
                  {chapter.title}
                </h2>
              </Link>
            )}
            <ul className="mt-4 grid grid-cols-3 gap-1">
              {chapter?.lessons?.map((lesson, lessonIndex) => (
                <li key={lesson.id} className="mb-2">
                  <div className="">
                    <span
                      className={`pr-2 text-sm text-gray-500 ${
                        isDarkMode ? "dark:text-gray-100" : ""
                      }`}
                    >{`${chapterIndex + 1}.${lessonIndex + 1}`}</span>
                    {chapterIndex < 3 ? (
                      <Link
                        className={`text-blue-700 hover:underline hover:text-blue-900 ${
                          isDarkMode
                            ? "dark:text-blue-600 hover:text-white"
                            : ""
                        }`}
                        to={`/v/${createSlug(chapter.title)}/${createSlug(
                          lesson.title
                        )}`}
                      >
                        {lesson.title}
                      </Link>
                    ) : (
                      <Link
                        className={`text-gray-500 hover:cursor-not-allowed  ${
                          isDarkMode ? "dark:text-gray-500 " : ""
                        }`}
                        to={`#`}
                      >
                        {lesson.title}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
