import React, { useState } from "react";
import { Lesson } from "../../types";
import { useTheme } from "../../theme/ThemeContext";
import MarkdownRenderer from "../MarkDownRenderer";

type PropType = {
  lesson: Lesson;
};

const LessonDetails: React.FC<PropType> = ({ lesson }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <div
      className={`flex flex-col w-3/4 mx-auto bg-white mb-8 ${
        isDarkMode ? "dark:bg-slate-900" : ""
      }`}
    >
      <h1 className={`text-black my-4  ${isDarkMode ? "text-red-100" : ""}`}>
        {lesson?.title}
      </h1>
      {lesson.articlePath && (
        <MarkdownRenderer articlePath={lesson.articlePath} />
      )}
      <div className="w-full bg-slate-400 mt-5 h-px"></div>

      {lesson?.quizzes && (
        <>
          <button
            onClick={toggleQuiz}
            className="mt-4 w-1/5  my-6 bg-blue-500 hover:bg-blue-700 
             text-white font-bold py-2 px-4 rounded"
          >
            Quiz
          </button>
          {showQuiz && (
            <div className=" w-3/4 rounded">
              {/* <QuizComponent quizId={lesson?.quizId} quizzes={quizzes} /> */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LessonDetails;
