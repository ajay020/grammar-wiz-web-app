export interface SubLesson {
  id: string;
  title: string;
  articlePath: string;
}

export interface Lesson {
  id: string;
  title: string;
  sublessons: SubLesson[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChaptersData {
  chapters: Chapter[];
}
