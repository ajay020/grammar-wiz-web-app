import chapters from "../database/chapter";
import { Chapter, Lesson, SubLesson } from "../types";

export const fetchChapterByTitle = (chapterTitle: string): Chapter => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  return chapter!;
};

export const fetchQuizzesForLessonTitle = (
  chapterTitle: string,
  lessonTitle: string
) => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  const lesson = chapter?.lessons.find(
    (lesson) => lesson.title === lessonTitle
  );
  return lesson?.quizzes || [];
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

  return foundLesson?.sublessons || [];
};
