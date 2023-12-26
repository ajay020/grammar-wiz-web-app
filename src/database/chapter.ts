const chapters = [
  {
    id: "0",
    title: "Introduction",
    articlePath: "/data/0overview/article.md",
    lessons: [
      {
        id: " 201",
        title: "Introduction",
        sublessons: [
          {
            id: "2001",
            title: "Introduction",
            articlePath: "/data/0introduction/article.md",
          },
        ],
      },
    ],
  },
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
          },
          {
            id: "113",
            title: "Abstract and Concrete",
            articlePath:
              "/data/PartOfSpeech/01nouns/abstractConcrete/article.md",
          },
          {
            id: "114",
            title: "Proper and Common noun",
            articlePath: "/data/PartOfSpeech/01nouns/properCommon/article.md",
          },

          {
            id: "115",
            title: "Singular and plural noun",
            articlePath: "/data/PartOfSpeech/01nouns/singularPlural/article.md",
          },
        ],
        quizzes: [
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
                correctOptionId: "1",
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
        ],
      },
      {
        id: "2",
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
      {
        id: "3",
        title: "Verb",
        sublessons: [
          {
            id: "20",
            title: "Introducton",
            articlePath: "/data/PartOfSpeech/02verbs/0intro/article.md",
          },
          {
            id: "21",
            title: "Types of verbs",
            articlePath: "/data/PartOfSpeech/02verbs/typesOfVerb.md",
          },
          {
            id: "22",
            title: "Verb tenses",
            articlePath: "/data/PartOfSpeech/02verbs/verbTenses.md",
          },
          {
            id: "23",
            title: "Subject-Verb Agreement",
            articlePath: "/data/PartOfSpeech/02verbs/subjectVerbAgreement.md",
          },
          {
            id: "24",
            title: "Irregular Verbs",
            articlePath: "/data/PartOfSpeech/02verbs/irregularVerb/article.md",
          },
        ],
      },
      {
        id: "4",
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
        id: "5",
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
        id: "6",
        title: "Preposition",
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
        id: "7",
        title: "Conjunction",
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
        id: "8",
        title: "Interjection",
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
    title: "Sentence Structure",
    lessons: [
      {
        id: "100",
        title: "Introduction",
        articlePath: "/data/SentenceStructure/0intro/article.md",
      },
      {
        id: "101",
        title: "Basic Sentence Elements",
        articlePath: "/data/SentenceStructure/basicElements.md",
      },
      {
        id: "102",
        title: "Types of Sentences",
        articlePath: "/data/SentenceStructure/sentenceTypes.md",
      },
      {
        id: "103",
        title: "Sentence Fragments",
        articlePath: "/data/SentenceStructure/sentenceFragments.md",
      },
      {
        id: "104",
        title: "Run-on Sentences",
        articlePath: "/data/SentenceStructure/runOnSentences.md",
      },
    ],
    quizzes: [
      {
        id: "q4",
        questions: [
          {
            id: "q4_1",
            text: "What is a complete sentence?",
            correctOptionId: "1",
            explanation:
              "A complete sentence has a subject and a predicate, expressing a complete thought.",
            options: [
              {
                id: "1",
                text: "A sentence with a subject and a predicate",
                isCorrect: true,
              },
              {
                id: "2",
                text: "Any group of words",
                isCorrect: false,
              },
            ],
          },
          {
            id: "q4_2",
            text: "Which of the following is a type of sentence?",
            correctOptionId: "3",
            explanation:
              "There are four types of sentences: declarative, interrogative, imperative, and exclamatory.",
            options: [
              {
                id: "1",
                text: "A group of words",
                isCorrect: false,
              },
              {
                id: "2",
                text: "A paragraph",
                isCorrect: false,
              },
              {
                id: "3",
                text: "Declarative, interrogative, imperative, and exclamatory",
                isCorrect: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Tenses",
    lessons: [
      {
        id: "130",
        title: "Introduction",
        articlePath: "/data/Tenses/00intro/article.md",
      },
      {
        id: "131",
        title: "Present Tense",
        articlePath: "/data/Tenses/presentTense.md",
      },
      {
        id: "132",
        title: "Past Tense",
        articlePath: "/data/Tenses/pastTense.md",
      },
      {
        id: "133",
        title: "Future Tense",
        articlePath: "/data/Tenses/futureTense.md",
      },
      {
        id: "134",
        title: "Continuous Tenses",
        articlePath: "/data/Tenses/continuousTenses.md",
      },
      {
        id: "135",
        title: "Perfect Tenses",
        articlePath: "/data/Tenses/perfectTenses.md",
      },
    ],
    quizzes: [
      {
        id: "q7",
        questions: [
          {
            id: "q7_1",
            text: "What is the correct present tense of 'eat'?",
            correctOptionId: "3",
            explanation: "The present tense of 'eat' is 'eats.'",
            options: [
              {
                id: "1",
                text: "ate",
                isCorrect: false,
              },
              {
                id: "2",
                text: "eating",
                isCorrect: false,
              },
              {
                id: "3",
                text: "eats",
                isCorrect: true,
              },
            ],
          },
          {
            id: "q7_2",
            text: "Which sentence uses the future tense correctly?",
            correctOptionId: "2",
            explanation: "In the future tense, 'run' becomes 'will run.'",
            options: [
              {
                id: "1",
                text: "She runs to the store every day.",
                isCorrect: false,
              },
              {
                id: "2",
                text: "She will run to the store tomorrow.",
                isCorrect: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Punctuation",
    lessons: [
      {
        id: "110",
        title: "Introduction",
        articlePath: "/data/Punctuation/00intro/article.md",
      },
      {
        id: "111",
        title: "Period (.)",
        articlePath: "/data/Punctuation/period.md",
      },
      {
        id: "112",
        title: "Comma (,)",
        articlePath: "/data/Punctuation/comma.md",
      },
      {
        id: "113",
        title: "Question Mark (?)",
        articlePath: "/data/Punctuation/questionMark.md",
      },
      {
        id: "114",
        title: "Exclamation Mark (!)",
        articlePath: "/data/Punctuation/exclamationMark.md",
      },
      {
        id: "115",
        title: "Colon (:)",
        articlePath: "/data/Punctuation/colon.md",
      },
    ],
    quizzes: [
      {
        id: "q5",
        questions: [
          {
            id: "q5_1",
            text: "What does a period (.) indicate in a sentence?",
            correctOptionId: "1",
            explanation:
              "A period indicates the end of a declarative or imperative sentence.",
            options: [
              {
                id: "1",
                text: "End of a sentence",
                isCorrect: true,
              },
              {
                id: "2",
                text: "Pause in a sentence",
                isCorrect: false,
              },
            ],
          },
          {
            id: "q5_2",
            text: "When is a comma (,) typically used?",
            correctOptionId: "3",
            explanation:
              "A comma is used to separate items in a list or to set off introductory elements.",
            options: [
              {
                id: "1",
                text: "End of a sentence",
                isCorrect: false,
              },
              {
                id: "2",
                text: "Between every word",
                isCorrect: false,
              },
              {
                id: "3",
                text: "Separating items in a list or setting off introductory elements",
                isCorrect: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Common Grammar Mistakes",
    lessons: [
      {
        id: "120",
        title: "Introduction",
        articlePath: "/data/CommonGrammarMistakes/00intro/article.md",
      },
      {
        id: "121",
        title: "Subject-Verb Agreement",
        articlePath: "/data/CommonGrammarMistakes/subjectVerbAgreement.md",
      },
      {
        id: "122",
        title: "Misplaced and Dangling Modifiers",
        articlePath: "/data/CommonGrammarMistakes/modifiers.md",
      },
      {
        id: "123",
        title: "Double Negatives",
        articlePath: "/data/CommonGrammarMistakes/doubleNegatives.md",
      },
      {
        id: "124",
        title: "Apostrophe Misuse",
        articlePath: "/data/CommonGrammarMistakes/apostrophe.md",
      },
      {
        id: "125",
        title: "Effect vs. Affect",
        articlePath: "/data/CommonGrammarMistakes/effectAffect.md",
      },
    ],
    quizzes: [
      {
        id: "q6",
        questions: [
          {
            id: "q6_1",
            text: "What is the correct use of an apostrophe?",
            correctOptionId: "2",
            explanation:
              "Apostrophes are used to indicate possession or to form contractions.",
            options: [
              {
                id: "1",
                text: "Before every 's'",
                isCorrect: false,
              },
              {
                id: "2",
                text: "To indicate possession or form contractions",
                isCorrect: true,
              },
            ],
          },
          {
            id: "q6_2",
            text: "When do you use 'effect' instead of 'affect'?",
            correctOptionId: "1",
            explanation:
              "'Effect' is typically used as a noun, while 'affect' is a verb.",
            options: [
              {
                id: "1",
                text: "To indicate a result or impact",
                isCorrect: true,
              },
              {
                id: "2",
                text: "To express emotion",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Subject-Verb Agreement",
    lessons: [
      {
        id: "140",
        title: "Introduction",
        articlePath: "/data/SubjectVerbAgreement/00intro/article.md",
      },
      {
        id: "141",
        title: "Singular Subjects and Verbs",
        articlePath: "/data/SubjectVerbAgreement/singularSubjectsVerbs.md",
      },
      {
        id: "142",
        title: "Plural Subjects and Verbs",
        articlePath: "/data/SubjectVerbAgreement/pluralSubjectsVerbs.md",
      },
      {
        id: "143",
        title: "Indefinite Pronouns",
        articlePath: "/data/SubjectVerbAgreement/indefinitePronouns.md",
      },
      {
        id: "144",
        title: "Collective Nouns",
        articlePath: "/data/SubjectVerbAgreement/collectiveNouns.md",
      },
      {
        id: "145",
        title: "Compound Subjects",
        articlePath: "/data/SubjectVerbAgreement/compoundSubjects.md",
      },
    ],
    quizzes: [
      {
        id: "q8",
        questions: [
          {
            id: "q8_1",
            text: "Which of the following sentences has a correct subject-verb agreement?",
            correctOptionId: "3",
            explanation:
              "In this sentence, the singular subject 'dog' correctly takes the singular verb 'barks.'",
            options: [
              {
                id: "1",
                text: "The dogs barks in the park.",
                isCorrect: false,
              },
              {
                id: "2",
                text: "A group of birds is flying in the sky.",
                isCorrect: false,
              },
              {
                id: "3",
                text: "The dog barks in the park.",
                isCorrect: true,
              },
            ],
          },
          {
            id: "q8_2",
            text: "How should you conjugate the verb for the plural subject 'students'?",
            correctOptionId: "2",
            explanation:
              "For plural subjects like 'students,' use the base form of the verb without 's.'",
            options: [
              {
                id: "1",
                text: "Students is studying for the exam.",
                isCorrect: false,
              },
              {
                id: "2",
                text: "Students are studying for the exam.",
                isCorrect: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default chapters;
