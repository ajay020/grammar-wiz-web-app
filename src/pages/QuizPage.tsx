import React from "react";
import { useTheme } from "../theme/ThemeContext";
import QuizComponent from "../components/QuizComponent";
import { getQuizForId } from "../database/quizzes";
import { Quiz } from "../types";

const QuizPage = () => {
  const { isDarkMode } = useTheme();

  const quiz = getQuizForId("q1") as Quiz;

  return (
    <div
      className={`flex flex-col items-center h-screen bg-white ${
        isDarkMode ? "dark:bg-slate-900" : ""
      }`}
    >
      <h2
        className={`text-black my-4 ${isDarkMode ? "dark:text-slate-200" : ""}`}
      >
        Quiz
      </h2>
      <div className="w-1/2 mx-auto">
        <QuizComponent quiz={quiz} />
      </div>
    </div>
  );
};

export default QuizPage;
