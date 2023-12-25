import React from "react";

import { FaBars } from "react-icons/fa6";
import { useTheme } from "../../theme/ThemeContext";

interface ToggleMenuButtonProps {
  onClick: () => void;
}

const ToggleMenuButton: React.FC<ToggleMenuButtonProps> = ({ onClick }) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <button
        className={` w-12 h-12 mt-8 flex items-center justify-center
           bottom-4 bg-slate-200 ${isDarkMode ? "dark:bg-slate-800" : ""}
            text-white px-2 py-2 rounded`}
        onClick={onClick}
      >
        <FaBars
          size={22}
          className={`text-gray-800 ${isDarkMode ? "text-gray-200" : ""}`}
        />
      </button>
    </div>
  );
};

export default ToggleMenuButton;
