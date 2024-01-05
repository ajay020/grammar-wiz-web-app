import React from "react";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onTryAgain: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  onTryAgain,
}) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="mb-4">
          You answered {score} out of {totalQuestions} questions correctly.
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{percentage.toFixed(2)}%</p>
          <div className="flex items-center">
            <svg
              className={`w-6 h-6 text-green-500 mr-2 ${
                percentage >= 70 ? "animate-spin" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">
              {percentage >= 70 ? "Great job!" : "Keep practicing!"}
            </p>
          </div>
        </div>
        <button
          onClick={onTryAgain}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
