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
      <div className="bg-slate-700 w-1/5 h-screen p-4">
        <h2>Chapters</h2>
        <ul className="">
          {chapters.map((chapter) => (
            <li className="cursor-pointer mb-2" key={chapter.id}>
              <Link
                to={`${createSlug(chapter.title)}`}
                className="hover:text-white hover:underline"
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
