import React, { useState } from "react";

import { Quiz, SubLesson } from "../types";
import MarkdownRenderer from "../components/MarkDownRenderer";
import QuizComponent from "../components/QuizComponent";

type PropType = {
  subLessonData: SubLesson;
  quizzes: Quiz[];
};

const SubLessonDetail: React.FC<PropType> = ({ subLessonData, quizzes }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto  bg-slate-900 mb-8">
      <h1 className="text-white text-2xl mt-2 mb-4">{subLessonData.title}</h1>
      <MarkdownRenderer articlePath={subLessonData.articlePath} />
      <div className="w-full bg-slate-400 mt-5 h-px"></div>

      {subLessonData?.quizId && (
        <>
          <button
            onClick={toggleQuiz}
            className="mt-4 w-1/5  my-6 bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
          >
            Quiz
          </button>
          {showQuiz && (
            <div className=" w-3/4  bg-slate-800 rounded">
              <QuizComponent quizId={subLessonData?.quizId} quizzes={quizzes} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SubLessonDetail;
