import React, { useState } from "react";
import ToggleMenuButton from "./common/ToggleMenuButton";
import { useTheme } from "../theme/ThemeContext";

interface ToggleablePanelProps {
  children: React.ReactNode;
}

const ToggleablePanel: React.FC<ToggleablePanelProps> = ({ children }) => {
  const [showPanel, setShowPanel] = useState(true);

  const { isDarkMode } = useTheme();

  const togglePanel = () => {
    setShowPanel((prev) => !prev);
  };

  return (
    <>
      <div
        className={` bg-gray-100 h-screen transition-all duration-300  ${
          showPanel ? "w-1/4 pl-8 pr-4" : "w-0 pl-0"
        } ${isDarkMode ? "dark:bg-slate-800" : ""}`}
      >
        {/* Content of the panel */}
        {children}
      </div>
      {/* Your toggle button */}
      <div className={`bg-white pl-5 ${isDarkMode ? "dark:bg-slate-900" : ""}`}>
        <ToggleMenuButton onClick={togglePanel} />
      </div>
    </>
  );
};

export default ToggleablePanel;
