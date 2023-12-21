export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}
export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
  quizId?: string;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface SubLesson {
  id: string;
  title: string;
  articlePath: string;
  quizId?: string;
}

export interface Lesson {
  id: string;
  title: string;
  sublessons: SubLesson[];
  quizzes?: Quiz[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChaptersData {
  chapters: Chapter[];
}
