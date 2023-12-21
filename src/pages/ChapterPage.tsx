// components/ChapterPage.js
import React, { useState } from "react";

import { createSlug, decodeSlug } from "../utils/utils";
import ChapterDetail from "../components/ChapterDetail";
import { Chapter } from "../types";
import chapters from "../database/chapter";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchLessonForTitle } from "../services/DataService";

interface ChapterPageProps {
  //   chapters: ChaptersData["chapters"];
}

const ChapterPage: React.FC<ChapterPageProps> = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | undefined>();

  const handleChapterSelect = (chapterId: string) => {
    const chapter: any = chapters.find((c) => String(c.id) === chapterId);
    if (chapter) {
      setSelectedChapter(chapter);
    }
  };

  return (
    <div className=" flex bg-slate-900  ">
      <div className="bg-gray-800 w-1/5 h-screen pl-6 pt-5">
        <h2 className="text-gray-500 text-sm ">Chapters</h2>
        <ul className="mt-4">
          {chapters.map((chapter) => (
            <li className="cursor-pointer mb-2" key={chapter.id}>
              <Link
                to={`${createSlug(chapter.title)}`}
                className="text-white hover:text-blue-500 hover:underline"
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/5 h-screen mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default ChapterPage;
