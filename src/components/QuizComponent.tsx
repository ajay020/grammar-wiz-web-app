import React, { useState } from "react";
import { Option, Quiz as QuizType } from "../types";
import { useTheme } from "../theme/ThemeContext";

interface QuizComponentProps {
  quizId: string;
  quizzes: QuizType[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quizId, quizzes }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);

  const { isDarkMode } = useTheme();

  // Filter the questions for the specified quizId
  const currentQuiz = quizzes.find((quiz) => quiz.id === quizId);
  const currentQuestions = currentQuiz?.questions ?? [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  if (!currentQuiz) {
    return null;
  }
  const handleOptionClick = (questionId: string, optionId: string) => {
    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setCompletedQuestions(completedQuestions + 1);

    if (optionId === currentQuestion?.correctOptionId) {
      setScore(score + 1);
    }
  };

  const getStyleForOption = (option: Option) => {
    if (selectedOptionId === option.id) {
      return option.isCorrect ? "border-green-600" : "border-red-600";
    } else if (isAnswered && option.isCorrect) {
      return "border-green-600";
    } else {
      return "";
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptionId(null); // Clear selected option state
    setIsAnswered(false); // Reset question answered state
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= currentQuiz.questions.length) {
      return (
        <div className="text-white text-center">
          <h2 className="text-2xl"> Quiz Completed!</h2>
          <p>
            Your score is: {score} / {quizzes[0].questions.length}
          </p>
          {/* <p>
            Progress: {completedQuestions}/{currentQuestions.length}
          </p> */}
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <h2
          className={`text-black text-md mb-4 ${
            isDarkMode ? "dark:text-slate-200" : ""
          }`}
        >
          {currentQuestion.text}
        </h2>
        <ul className="flex flex-col gap-3">
          {currentQuestion.options.map((option) => (
            <li
              className={`text-black p-2
               border border-gray-400 rounded
               hover:cursor-pointer 
               ${isDarkMode ? "dark:text-slate-200" : ""}
             ${getStyleForOption(option)}
            `}
              key={option.id}
            >
              <button
                className=" hover:text-blue-800 text-left w-full"
                disabled={isAnswered}
                onClick={() => handleOptionClick(currentQuestion.id, option.id)}
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-center
           hover:bg-blue-700 text-white
            font-bold py-2 px-4 rounded mt-4"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className={`bg-gray-100 ${isDarkMode ? "bg-gray-800" : ""}  p-4 mb-8`}>
      {renderQuestion()}
    </div>
  );
};
export default QuizComponent;
