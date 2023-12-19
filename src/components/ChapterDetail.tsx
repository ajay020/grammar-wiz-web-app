// components/ChapterDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Chapter, Lesson } from "../types"; // Adjust the import path
import { createSlug, decodeSlug } from "../utils/utils";
import { fetchLessonForTitle } from "../services/DataService";

interface ChapterDetailProps {
  //   chapter: Chapter;
}

const ChapterDetail: React.FC<ChapterDetailProps> = () => {
  const { chapterTitle } = useParams<{ chapterTitle: string }>();

  let lessons: Lesson[] = [];

  if (chapterTitle) {
    lessons = fetchLessonForTitle(decodeSlug(chapterTitle));
  }

  return (
    <div className="bg-slate-800 border border-gray-600 p-4 mt-5">
      <div className="mx-auto">
        <h3>{chapterTitle}</h3>
        <ul className="mt-4">
          {lessons?.map((lesson, index) => (
            <li key={lesson.id} className="mb-2">
              <div className="flex">
                <span className=" pr-2 text-sm text-gray-400">{`${
                  index + 1
                }.`}</span>
                <Link
                  to={`/v/${chapterTitle}/${createSlug(lesson.title)}`}
                  className="hover:text-white hover:underline"
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
