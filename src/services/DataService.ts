import chapters from "../database/chapter";
import { Chapter, Lesson, Quiz, SubLesson } from "../types";

export const fetchChapterByTitle = (chapterTitle: string): Chapter => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  return chapter || ({} as Chapter);
};

export const fetchQuizzesForLessonTitle = (
  chapterTitle: string,
  lessonTitle: string
) => {
  const chapter: Chapter | undefined = chapters.find(
    (chapter) => chapter.title === chapterTitle
  );
  const lesson = chapter?.lessons?.find(
    (lesson) => lesson.title === lessonTitle
  );

  if (!lesson) return [] as Quiz[];
  return lesson?.quizzes || ([] as Quiz[]);
};

export const fetchLessonsForTitle = (chapterTitle: string): Lesson[] => {
  const chapter = chapters.find((chapter) => chapter.title === chapterTitle);
  return chapter?.lessons || [];
};

export const fetchLessonForTitle = (
  chapterTitle: string,
  lessonTitle: string
) => {
  const chapter: Chapter | undefined = chapters.find(
    (chapter) => chapter.title === chapterTitle
  );
  const lesson = chapter?.lessons?.find(
    (lesson) => lesson.title === lessonTitle
  );
  return lesson;
};

export const fetchSublessonsByLessonTitle = (
  chapterTitle: string,
  lessonTitle: string
): SubLesson[] => {
  const foundLesson = fetchChapterByTitle(chapterTitle)?.lessons?.find(
    (lesson) => lesson.title === lessonTitle
  );

  return foundLesson?.sublessons || [];
};
