import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { decodeSlug } from "../utils/utils";

import { fetchSublessonsByLessonTitle } from "../services/DataService";
import { SubLesson } from "../types";
import { Link } from "react-router-dom";
import SubLessonDetail from "./SubLessonDetail";

const LessonPage = () => {
  const { chapterTitle, lessonTitle } = useParams<{
    chapterTitle: string;
    lessonTitle: string;
  }>();

  let subLessons: SubLesson[] = [];

  if (chapterTitle && lessonTitle) {
    const originalChapterTitle = decodeSlug(chapterTitle);
    const originalLessonTitle = decodeSlug(lessonTitle);
    subLessons =
      fetchSublessonsByLessonTitle(originalChapterTitle, originalLessonTitle) ||
      [];
  }

  const [selectedSubLesson, setSelectedSubLesson] = useState<SubLesson>(
    subLessons[0]
  );

  const handleSubLessonSelect = (subLesson: SubLesson) => {
    setSelectedSubLesson(subLesson);
  };

  return (
    <div className="flex">
      {/* Left side - SubLessonList */}
      <div className="w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4">Sublessons</h2>
        <ul>
          {subLessons.map((subLesson) => (
            <li
              className="cursor-pointer"
              key={subLesson.id}
              onClick={() => handleSubLessonSelect(subLesson)}
            >
              {subLesson.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - SubLessonDetail */}
      <div className="w-3/4 p-4">
        {selectedSubLesson && (
          <SubLessonDetail subLessonData={selectedSubLesson} />
        )}
      </div>
    </div>
  );
};

export default LessonPage;
