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
    <div
      className={`bg-white h-screen ${isDarkMode ? "dark:bg-slate-900" : ""}`}
    >
      <div
        className={`bg-white w-2/3 mx-auto p-4 h-screen ${
          isDarkMode ? "dark:bg-slate-900" : ""
        }`}
      >
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapter.id} className="">
            <Link to={`c/${createSlug(chapter.title)}`}>
              <h2
                className={`hover:underline text-black text-lg my-2 ${
                  isDarkMode ? "dark:text-slate-200" : ""
                }`}
              >
                {chapter.title}
              </h2>
            </Link>
            <ul className=" mt-2 flex flex-col flex-wrap">
              {chapter?.lessons?.map((lesson, lessonIndex) => (
                <li key={lesson.id} className="mb-2">
                  <div className="">
                    <span className="text-white pr-2 text-sm">{`${
                      chapterIndex + 1
                    }.${lessonIndex + 1}`}</span>
                    <Link
                      className={`text-blue-700 hover:underline hover:text-blue-900 ${
                        isDarkMode ? "dark:text-blue-600 hover:text-white" : ""
                      }`}
                      to={`/v/${createSlug(chapter.title)}/${createSlug(
                        lesson.title
                      )}`}
                    >
                      {lesson.title}
                    </Link>
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
