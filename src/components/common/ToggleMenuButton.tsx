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
        className={` w-8 h-8 md:w-10 md:h-10 mt-8 flex items-center justify-center  text-white
           bottom-4 bg-slate-200 ${isDarkMode ? "dark:bg-slate-800" : ""}
            text-white px-2 py-2 rounded`}
        onClick={onClick}
      >
        <FaBars
          className="w-4 h-4 md:w-6 md:h-6"
          size={22}
          color={isDarkMode ? "white" : "black"}
        />
      </button>
    </div>
  );
};

export default ToggleMenuButton;
