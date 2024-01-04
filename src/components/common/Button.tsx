import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-sm hover:bg-blue-900 text-white py-1 px-2 md:py-2 md:px-4 rounded ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
