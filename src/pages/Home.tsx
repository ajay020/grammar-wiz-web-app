import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ChaptersData } from "../types"; // Adjust the import path

import chapters from "../database/chapter";
import { createSlug } from "../utils/utils";

interface HomePageProps {
  //   chapters: ChaptersData["chapters"];
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="bg-slate-900 w-3/4 mx-auto p-4 h-screen">
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapter.id} className="">
          <Link to={`c/${createSlug(chapter.title)}`}>
            <h2 className="hover:underline text-white ">{chapter.title}</h2>
          </Link>
          <ul className="bg-gray-900 mt-2 flex flex-col flex-wrap">
            {chapter.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id} className="mb-2">
                <div className="">
                  <span className="text-white pr-2 text-sm">{`${
                    chapterIndex + 1
                  }.${lessonIndex + 1}`}</span>
                  <Link
                    className="text-blue-400 hover:underline hover:text-white"
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
  );
};

export default HomePage;
