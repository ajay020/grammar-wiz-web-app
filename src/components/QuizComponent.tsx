import React, { useState } from "react";
import { Option, Quiz as QuizType } from "../types";

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
      return option.isCorrect ? "bg-green-600" : "bg-red-600";
    } else if (isAnswered && option.isCorrect) {
      return "bg-green-600";
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
      <div className="flex flex-col p-4 ">
        <h2 className="text-white text-md mb-4">{currentQuestion.text}</h2>
        <ul className="flex flex-col gap-3">
          {currentQuestion.options.map((option) => (
            <li
              className={`text-white p-2
               border border-gray-400 rounded
              hover:cursor-pointer
             ${getStyleForOption(option)}
            `}
              key={option.id}
            >
              <button
                className=" hover:text-blue-100 text-left w-full"
                disabled={isAnswered}
                onClick={() => handleOptionClick(currentQuestion.id, option.id)}
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-left hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    );
  };

  return <div className=" mb-8">{renderQuestion()}</div>;
};
export default QuizComponent;
