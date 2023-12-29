import React from "react";

import { ProgressQuestionType } from "../types";

interface QuizProgressProps {
  takenQuestions: ProgressQuestionType[];
}

const QuizProgress: React.FC<QuizProgressProps> = ({ takenQuestions }) => {
  const getBg = (question: ProgressQuestionType) => {
    let bgColor = "bg-gray-500";

    if (question.isSolved) {
      if (question.isCorrect) {
        bgColor = "bg-green-500";
      } else {
        bgColor = "bg-red-500";
      }
    }
    return bgColor;
  };

  const circles = takenQuestions.map((question, index) => (
    <div key={index} className="flex items-center justify-center">
      <div key={index} className={`w-4 h-4 rounded-full ${getBg(question)}`} />
      {/* {index < takenQuestions.length - 1 && (
        <div className={`h-1 w-12 bg-gray-200`} />
      )} */}
    </div>
  ));

  return (
    <div className="flex items-center justify-center gap-4 w-full bg-slate-800 py-2">
      {circles}
    </div>
  );
};

export default QuizProgress;
