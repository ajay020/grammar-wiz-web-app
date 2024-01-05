import React, { useState } from "react";
import {
  Option,
  ProgressQuestionType,
  Question,
  Quiz as QuizType,
} from "../types";
import { useTheme } from "../theme/ThemeContext";
import QuizProgress from "./quizProgress/QuizProgress";
import Button from "./common/Button";
import QuizResult from "./quizResult/QuizResult";

interface QuizComponentProps {
  quiz: QuizType;
}

const initialize = (questions: Question[]) => {
  let arr = Array.from({ length: questions.length }).map((_, i) => {
    return {
      id: questions[i].id,
      isCorrect: false,
      isSolved: false,
    };
  });
  return arr;
};

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);

  const questions = quiz?.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];

  const [takenQuestions, setTakenQuestions] = useState<ProgressQuestionType[]>(
    () => initialize(questions)
  );

  const { isDarkMode } = useTheme();

  const handleOptionClick = (questionId: string, optionId: string) => {
    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setCompletedQuestions(completedQuestions + 1);

    const updatedQuestions = takenQuestions.map(
      (question: ProgressQuestionType) => {
        if (question.id === questionId) {
          const isCorrect = optionId === currentQuestion?.correctOptionId;
          return { ...question, isCorrect, isSolved: true };
        }
        return question;
      }
    );
    setTakenQuestions(updatedQuestions);

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

  const tryAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setCompletedQuestions(0);
    setTakenQuestions(initialize(questions));
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      return (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          onTryAgain={tryAgain}
        />
      );
    }

    return (
      <div
        className={`bg-gray-100 ${isDarkMode ? "bg-gray-800" : ""}  p-4 mb-8`}
      >
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
        <div className={`flex justify-end items-center mt-4`}>
          <div className="mr-2 md:mr-4">
            <QuizProgress takenQuestions={takenQuestions} />
          </div>

          <Button
            className="md:font-bold text-white p-1 shadow-sm"
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        </div>
      </div>
    );
  };

  return <div className={""}>{renderQuestion()}</div>;
};
export default QuizComponent;
