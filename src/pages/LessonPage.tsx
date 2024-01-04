import { useState } from "react";
import { useParams } from "react-router-dom";

import { decodeSlug } from "../utils/utils";
import {
  fetchLessonForTitle,
  fetchQuizzesForLessonTitle,
  fetchSublessonsByLessonTitle,
} from "../services/DataService";
import { Lesson, Quiz, SubLesson } from "../types";
import SubLessonDetail from "./SubLessonDetail";
import { useTheme } from "../theme/ThemeContext";
import ToggleablePanel from "../components/ToggableLeftPanel";
import LessonDetails from "../components/lessons/LessonDetails";

const LessonPage = () => {
  const { chapterTitle, lessonTitle } = useParams<{
    chapterTitle: string;
    lessonTitle: string;
  }>();
  const { isDarkMode } = useTheme();

  let subLessons: SubLesson[] = [];
  let quizzes: Quiz[] = [];
  let lesson: Lesson | undefined = {} as Lesson;

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
    lesson = fetchLessonForTitle(originalChapterTitle, originalLessonTitle);
    console.log({ lesson }, originalChapterTitle, originalLessonTitle);
  }

  const [selectedSubLesson, setSelectedSubLesson] = useState<SubLesson>(
    subLessons[0]
  );

  const handleSubLessonSelect = (subLesson: SubLesson) => {
    setSelectedSubLesson(subLesson);
  };

  //   console.log({ lesson });

  if (!subLessons || subLessons.length === 0) {
    return (
      <div className="flex">
        <div
          className={`w-full bg-white ${isDarkMode ? "dark:bg-slate-900" : ""}`}
        >
          <h1
            className={`text-black text-2xl mt-4 mb-4 ${
              isDarkMode ? "text-slate-200" : ""
            }`}
          >
            {lesson && <LessonDetails lesson={lesson} />}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-800 ">
      <ToggleablePanel>
        <h2
          className={` text-sm mb-4 text-gray-400 ${
            isDarkMode ? "dark:text-gray-500" : ""
          }`}
        >
          Lesson navigation
        </h2>
        <ul>
          {subLessons.map((subLesson) => (
            <li
              className={` cursor-pointer text-black hover:text-blue-500 mb-1 md:mb-2 text-sm md:text-md hover:underline ${
                isDarkMode ? "dark:text-slate-100" : ""
              }`}
              key={subLesson.id}
              onClick={() => handleSubLessonSelect(subLesson)}
            >
              {subLesson.title}
            </li>
          ))}
        </ul>
      </ToggleablePanel>
      {/* Right side - SubLessonDetail */}
      <div
        className={`w-full overflow-y-auto h-screen bg-white ${
          isDarkMode ? "dark:bg-slate-900" : ""
        }`}
      >
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
