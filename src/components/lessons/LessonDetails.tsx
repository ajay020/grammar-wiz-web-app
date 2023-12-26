import React, { useState } from "react";
import { Lesson } from "../../types";
import { useTheme } from "../../theme/ThemeContext";
import MarkdownRenderer from "../MarkDownRenderer";
import QuizComponent from "../QuizComponent";

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
      <h1
        className={`text-black text-2xl mt-4 mb-4 ${
          isDarkMode ? "text-slate-200" : ""
        }`}
      >
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
            className="mt-4 w-1/5  my-6 bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
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
