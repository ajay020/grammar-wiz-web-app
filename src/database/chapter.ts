const chapters = [
  {
    id: "1",
    title: "Part Of Speech",
    lessons: [
      {
        id: "1",
        title: "Noun",
        sublessons: [
          {
            id: "110",
            title: "Introduction",
            articlePath: "/data/PartOfSpeech/01nouns/introduction/article.md",
            quizId: "q1",
          },
          {
            id: "112",
            title: "Types of Nouns",
            articlePath: "/data/PartOfSpeech/01nouns/types/article.md",
            quizId: "q2",
          },
          {
            id: "123",
            title: "Abstract and Concrete",
            articlePath: "/articles/chapter1/lesson1.1/sublesson1.1.2.md",
          },
          {
            id: "124",
            title: "Countable and Uncountable",
            articlePath: "/articles/chapter1/lesson1.1/sublesson1.1.2.md",
          },
          {
            id: "125",
            title: "Singular and Plural",
            articlePath: "/articles/chapter1/lesson1.1/sublesson1.1.2.md",
          },
        ],
        quizzes: [
          {
            id: "q1",
            questions: [
              {
                id: "q1_1",
                text: "What is a noun?",
                correctOptionId: "1",
                explanation: "A noun is a word that describes something.",
                options: [
                  {
                    id: "1",
                    text: "A noun is a word that describes something.",
                    isCorrect: true,
                  },
                  {
                    id: "2",
                    text: "A noun is a word that doesn't describes something.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: "q1_2",
                text: "What is noun in this sentence: 'He goes to school' ?",
                correctOptionId: "1",
                explanation: "A noun is a word that describes something.",
                options: [
                  {
                    id: "1",
                    text: "He",
                    isCorrect: false,
                  },
                  {
                    id: "2",
                    text: "goes",
                    isCorrect: false,
                  },
                  {
                    id: "3",
                    text: "School",
                    isCorrect: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "Verb",
        sublessons: [
          {
            id: "1003",
            title: "Sublesson 1.2.1",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.1.md",
          },
          {
            id: "1004",
            title: "Sublesson 1.2.2",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.2.md",
          },
        ],
      },
      {
        id: "3",
        title: "Adjective",
        sublessons: [
          {
            id: "1003",
            title: "Sublesson 1.2.1",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.1.md",
          },
          {
            id: "1004",
            title: "Sublesson 1.2.2",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.2.md",
          },
        ],
      },
      {
        id: "4",
        title: "Adverb",
        sublessons: [
          {
            id: "1003",
            title: "Sublesson 1.2.1",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.1.md",
          },
          {
            id: "1004",
            title: "Sublesson 1.2.2",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.2.md",
          },
        ],
      },
      {
        id: "5",
        title: "Pronoun",
        sublessons: [
          {
            id: "1003",
            title: "Sublesson 1.2.1",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.1.md",
          },
          {
            id: "1004",
            title: "Sublesson 1.2.2",
            articlePath: "/articles/chapter1/lesson1.2/sublesson1.2.2.md",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Passive Voice",
    lessons: [
      {
        id: " 201",
        title: "Lesson1",
        sublessons: [
          {
            id: "2001",
            title: "Sublesson 2.1.1",
            articlePath: "/articles/chapter2/lesson2.1/sublesson2.1.1.md",
          },
          {
            id: "2002",
            title: "Sublesson 2.1.2",
            articlePath: "/articles/chapter2/lesson2.1/sublesson2.1.2.md",
          },
        ],
      },
      {
        id: "202",
        title: "Lesson2",
        sublessons: [
          {
            id: "2003",
            title: "Sublesson 2.2.1",
            articlePath: "/articles/chapter2/lesson2.2/sublesson2.2.1.md",
          },
          {
            id: "2004",
            title: "Sublesson 2.2.2",
            articlePath: "/articles/chapter2/lesson2.2/sublesson2.2.2.md",
          },
        ],
      },
    ],
  },
];

export default chapters;
