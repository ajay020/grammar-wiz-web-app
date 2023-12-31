import React from "react";
import { useTheme } from "../theme/ThemeContext";
import Game from "../components/game/Game";

const PlayPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center  h-screen bg-white ${
        isDarkMode ? "dark:bg-slate-900" : ""
      }`}
    >
      <h1
        className={`text-black text-lg mt-4 ${
          isDarkMode ? "dark:text-slate-200" : ""
        }`}
      >
        Word Scramble
      </h1>
      <div className="mt-5 w-full">
        <Game />
      </div>
    </div>
  );
};

export default PlayPage;
