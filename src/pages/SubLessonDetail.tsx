import React, { useState } from "react";

import { Quiz, SubLesson } from "../types";
import MarkdownRenderer from "../components/MarkDownRenderer";
import { useTheme } from "../theme/ThemeContext";

type PropType = {
  subLessonData: SubLesson;
  quizzes: Quiz[];
};

const SubLessonDetail: React.FC<PropType> = ({ subLessonData, quizzes }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <div
      className={`flex overflow-auto flex-col w-3/4 mx-auto bg-white mb-8 ${
        isDarkMode ? "dark:bg-slate-900" : ""
      }`}
    >
      <h1 className={`text-black  my-4 ${isDarkMode ? "text-slate-200" : ""}`}>
        {/* {subLessonData.title} */}
      </h1>
      <MarkdownRenderer articlePath={subLessonData.articlePath} />
      <div className="w-full bg-slate-400 mt-5 h-px"></div>

      {subLessonData?.quizId && (
        <>
          <button
            onClick={toggleQuiz}
            className="mt-4 w-1/5  my-6 bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
          >
            Quiz
          </button>
          {showQuiz && (
            <div className=" w-3/4 rounded">
              {/* <QuizComponent quizId={subLessonData?.quizId} quizzes={quizzes} /> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SubLessonDetail;
