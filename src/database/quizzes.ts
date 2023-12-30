import { Quiz } from "../types";

export const quizzes = [
  {
    id: "q1",
    questions: [
      {
        id: "q1_1",
        text: "They ___ the piano for two years.",
        correctOptionId: "2",
        explanation: "",
        options: [
          {
            id: "1",
            text: "are playing",
            isCorrect: false,
          },
          {
            id: "2",
            text: "have been playing",
            isCorrect: true,
          },
          {
            id: "3",
            text: "has been playing",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q1_2",
        text: "Last night, I __ the funniest movie ever! ",
        correctOptionId: "1",
        explanation: "The past form of verb 'watch' is 'watched'.",
        options: [
          {
            id: "1",
            text: "watched",
            isCorrect: true,
          },
          {
            id: "2",
            text: "watch",
            isCorrect: false,
          },
          {
            id: "3",
            text: "watching",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q1_3",
        text: "What ___ you do yesterday?",
        correctOptionId: "3",
        explanation: "'did' is used for past tense.",
        options: [
          {
            id: "1",
            text: "do",
            isCorrect: false,
          },
          {
            id: "2",
            text: "does",
            isCorrect: false,
          },
          {
            id: "3",
            text: "did",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q1_4",
        text: "Choose the correct adverb to complete the sentence: She danced __ during the performance.",
        correctOptionId: "3",
        explanation:
          "The correct adverb in this context is 'gracefully' as it describes how she danced.",
        options: [
          {
            id: "1",
            text: "quick",
            isCorrect: false,
          },
          {
            id: "2",
            text: "happy",
            isCorrect: false,
          },
          {
            id: "3",
            text: "gracefully",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q1_5",
        text: "Identify the adverb in the following sentence: The sun sets daily.",
        correctOptionId: "1",
        explanation:
          "The adverb in this sentence is 'daily' as it provides information about the frequency of the action.",
        options: [
          {
            id: "1",
            text: "daily",
            isCorrect: true,
          },
          {
            id: "2",
            text: "sets",
            isCorrect: false,
          },
          {
            id: "3",
            text: "sun",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];

export const getQuizForId = (quizId: string) => {
  return quizzes.find((quiz) => quizId === quiz.id) ?? [];
};
