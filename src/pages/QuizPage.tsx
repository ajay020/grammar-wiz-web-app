import React from "react";
import { useTheme } from "../theme/ThemeContext";

const QuizPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex justify-center items-center h-screen bg-white ${
        isDarkMode ? "dark:bg-slate-900" : ""
      }`}
    >
      <h2 className={`text-black ${isDarkMode ? "dark:text-slate-200" : ""}`}>
        Coming soon...
      </h2>
    </div>
  );
};

export default QuizPage;
