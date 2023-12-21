import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import { decodeSlug } from "../utils/utils";
import {
  fetchQuizzesForLessonTitle,
  fetchSublessonsByLessonTitle,
} from "../services/DataService";
import { Lesson, Quiz, SubLesson } from "../types";
import SubLessonDetail from "./SubLessonDetail";

const LessonPage = () => {
  const { chapterTitle, lessonTitle } = useParams<{
    chapterTitle: string;
    lessonTitle: string;
  }>();

  let subLessons: SubLesson[] = [];
  let quizzes: Quiz[] = [];

  if (chapterTitle && lessonTitle) {
    const originalChapterTitle = decodeSlug(chapterTitle);
    const originalLessonTitle = decodeSlug(lessonTitle);
    subLessons =
      fetchSublessonsByLessonTitle(originalChapterTitle, originalLessonTitle) ||
      [];
    quizzes = fetchQuizzesForLessonTitle(
      originalChapterTitle,
      originalLessonTitle
    );
  }

  const [selectedSubLesson, setSelectedSubLesson] = useState<SubLesson>(
    subLessons[0]
  );

  const handleSubLessonSelect = (subLesson: SubLesson) => {
    setSelectedSubLesson(subLesson);
  };

  return (
    <div className="flex bg-slate-900 h-screen">
      {/* Left side - SubLessonList */}
      <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
        <h2 className="text-sm font-bold mb-4 text-gray-400"> SubLesson</h2>
        <ul>
          {subLessons.map((subLesson) => (
            <li
              className="cursor-pointer text-white hover:text-blue-500 mb-2"
              key={subLesson.id}
              onClick={() => handleSubLessonSelect(subLesson)}
            >
              {subLesson.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - SubLessonDetail */}
      <div className="w-3/4 overflow-y-auto bg-slate-900">
        {selectedSubLesson && (
          <SubLessonDetail
            subLessonData={selectedSubLesson}
            quizzes={quizzes}
          />
        )}
      </div>
    </div>
  );
};

export default LessonPage;
