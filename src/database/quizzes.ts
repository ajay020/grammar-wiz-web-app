import { Quiz } from "../types";

export const quizzes = [
  {
    id: "q1",
    questions: [
      {
        id: "q1_1",
        text: "What are nouns in this sentence: 'Peter play in the garden.' ?",
        correctOptionId: "1",
        explanation: "A noun is a word that describes something.",
        options: [
          {
            id: "1",
            text: "Peter, garden",
            isCorrect: true,
          },
          {
            id: "2",
            text: "play, garden",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q1_2",
        text: "What are nouns in this sentence: 'The phone is on the table.' ?",
        correctOptionId: "3",
        explanation: "A noun is a word that describes something.",
        options: [
          {
            id: "1",
            text: "Phone, on",
            isCorrect: false,
          },
          {
            id: "2",
            text: "on, table",
            isCorrect: false,
          },
          {
            id: "3",
            text: "phone, table",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q1_3",
        text: "What are nouns in this sentence: 'The phone is on the table.' ?",
        correctOptionId: "3",
        explanation: "A noun is a word that describes something.",
        options: [
          {
            id: "1",
            text: "Phone, on",
            isCorrect: false,
          },
          {
            id: "2",
            text: "on, table",
            isCorrect: false,
          },
          {
            id: "3",
            text: "phone, table",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];

export const getQuizForId = (quizId: string) => {
  return quizzes.find((quiz) => quizId === quiz.id) ?? [];
};
