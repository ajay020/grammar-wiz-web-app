import React from "react";
import { useParams } from "react-router-dom";

import { SubLesson } from "../types";
import MarkdownRenderer from "../components/MarkDownRenderer";

type PropType = {
  subLessonData: SubLesson;
};

const SubLessonDetail: React.FC<PropType> = ({ subLessonData }) => {
  return (
    <div className=" flex flex-col items-start bg-green-800 h-screen">
      <h1>{subLessonData.title}</h1>
      <MarkdownRenderer articlePath={subLessonData.articlePath} />
    </div>
  );
};

export default SubLessonDetail;
