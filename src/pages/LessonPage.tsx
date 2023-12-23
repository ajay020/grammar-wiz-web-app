import { useState } from "react";
import { useParams } from "react-router-dom";

import { decodeSlug } from "../utils/utils";
import {
  fetchQuizzesForLessonTitle,
  fetchSublessonsByLessonTitle,
} from "../services/DataService";
import { Quiz, SubLesson } from "../types";
import SubLessonDetail from "./SubLessonDetail";
import { useTheme } from "../theme/ThemeContext";
import ToggleablePanel from "../components/ToggableLeftPanel";

const LessonPage = () => {
  const { chapterTitle, lessonTitle } = useParams<{
    chapterTitle: string;
    lessonTitle: string;
  }>();
  const { isDarkMode } = useTheme();

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
    <div className="flex h-screen">
      <ToggleablePanel>
        <h2
          className={` text-sm  mb-4 text-gray-500 ${
            isDarkMode ? "dark:text-gray-500" : ""
          }`}
        >
          Lesson navigation
        </h2>
        <ul>
          {subLessons.map((subLesson) => (
            <li
              className={` cursor-pointer text-black hover:text-blue-500 mb-2 text-sm hover:underline ${
                isDarkMode
                  ? "dark:text-slate-200 hover:text-blue-500 hover:underline"
                  : ""
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
        className={`w-full overflow-y-auto bg-white ${
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
