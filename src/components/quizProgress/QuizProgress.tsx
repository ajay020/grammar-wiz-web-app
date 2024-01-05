import React from "react";

import { ProgressQuestionType } from "../../types";

interface QuizProgressProps {
  takenQuestions: ProgressQuestionType[];
}

const QuizProgress: React.FC<QuizProgressProps> = ({ takenQuestions }) => {
  const getBg = (question: ProgressQuestionType) => {
    let borderColor = "border-slate-600";

    if (question.isSolved) {
      if (question.isCorrect) {
        borderColor = "border-green-500";
      } else {
        borderColor = "border-red-500";
      }
    }
    return borderColor;
  };

  const circles = takenQuestions.map((question, index) => (
    <div key={index} className="flex items-center justify-center">
      <div
        data-testid="quiz-progress-circle"
        key={index}
        className={`w-2 h-2 md:w-4 md:h-4 border rounded-full ${getBg(
          question
        )}`}
      />
      {/* {index < takenQuestions.length - 1 && (
        <div className={`h-1 w-12 bg-gray-200`} />
      )} */}
    </div>
  ));

  return (
    <div
      data-testid="quiz-progress"
      className="flex items-center justify-center gap-2 md:gap-4 w-full py-2"
    >
      {circles}
    </div>
  );
};

export default QuizProgress;
