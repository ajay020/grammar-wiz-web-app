import chapters from "../database/chapter";
import { Chapter, Lesson, SubLesson } from "../types";

export const fetchChapterByTitle = (chapterTitle: string): Chapter => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  console.log({ chapter, chapterTitle });
  return chapter!;
};

export const fetchLessonForTitle = (chapterTitle: string): Lesson[] => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  return chapter?.lessons || [];
};

export const fetchSublessonsByLessonTitle = (
  chapterTitle: string,
  lessonTitle: string
): SubLesson[] => {
  const foundLesson = fetchChapterByTitle(chapterTitle)?.lessons.find(
    (lesson) => lesson.title === lessonTitle
  );

  console.log({ foundLesson });

  return foundLesson?.sublessons || [];
};
