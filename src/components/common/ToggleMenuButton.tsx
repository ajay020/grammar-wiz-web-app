import React from "react";
import { FaBars } from "react-icons/fa6";

interface ToggleMenuButtonProps {
  onClick: () => void;
}

const ToggleMenuButton: React.FC<ToggleMenuButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="
           w-12 h-12 mt-8 flex items-center justify-center
           bottom-4 bg-slate-700
            text-white px-2 py-2 rounded"
        onClick={onClick}
      >
        <FaBars size={22} />
      </button>
    </div>
  );
};

export default ToggleMenuButton;
