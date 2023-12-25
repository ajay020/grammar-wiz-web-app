// components/ChapterDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Chapter, Lesson } from "../types"; // Adjust the import path
import { createSlug, decodeSlug } from "../utils/utils";
import {
  fetchChapterByTitle,
  fetchLessonForTitle,
} from "../services/DataService";
import { useTheme } from "../theme/ThemeContext";
import MarkdownRenderer from "./MarkDownRenderer";

interface ChapterDetailProps {
  //   chapter: Chapter;
}

const ChapterDetail: React.FC<ChapterDetailProps> = () => {
  const { chapterTitle } = useParams<{ chapterTitle: string }>();
  const { isDarkMode } = useTheme();

  let lessons: Lesson[] = [];
  let chapter: Chapter | null = null;

  if (chapterTitle) {
    lessons = fetchLessonForTitle(decodeSlug(chapterTitle));
    chapter = fetchChapterByTitle(decodeSlug(chapterTitle));
  }

  return (
    <div className="mx-auto w-1/2 ">
      {chapterTitle && (
        <h1
          className={`text-black text-xl mt-8 " ${
            isDarkMode ? "dark:text-slate-200" : ""
          }`}
        >
          {decodeSlug(chapterTitle)}
        </h1>
      )}
      <div className="">
        <ul className="mt-4 p-2 ">
          {lessons?.map((lesson, index) => (
            <li key={lesson.id} className="mb-4">
              <div className="flex">
                <span className=" pr-2 text-sm text-gray-400">{`${
                  index + 1
                }.`}</span>
                <Link
                  to={`/v/${chapterTitle}/${createSlug(lesson.title)}`}
                  className="hover:text-white hover:underline text-blue-500"
                >
                  {lesson.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChapterDetail;
