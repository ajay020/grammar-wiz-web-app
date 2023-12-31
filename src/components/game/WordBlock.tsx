import React from "react";

interface WordBlockProps {
  word: string;
  onClick?: () => void;
}

const WordBlock: React.FC<WordBlockProps> = ({ word, onClick }) => {
  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      onClick={onClick}
      className={`${getRandomColor()} mr-4 p-3 font-bold text-lg rounded cursor-pointer text-white`}
    >
      {word}
    </div>
  );
};
export default WordBlock;
