import React, { useState, useEffect } from "react";

import Button from "../common/Button";
import { useTheme } from "../../theme/ThemeContext";

const sentences = [
  { id: "2", text: "The sky is blue today" },
  { id: "3", text: "The moon is full and bright" },
  { id: "4", text: "The sun is shining in the sky" },
  { id: "1", text: "If it was not raining I would go outside" },
];

type ScrambledWordsProps = {
  scrambledWords: string[];
  onWordClick: (index: number) => void;
};

const ScrambledWords: React.FC<ScrambledWordsProps> = ({
  scrambledWords,
  onWordClick,
}) => {
  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-purple-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [wordColors] = useState<string[]>(() =>
    scrambledWords.map(() => getRandomColor())
  );

  return (
    <div
      className="mt-10 md:mt-12 flex items-center 
    gap-2 md:gap-2 lg:gap-4 justify-center flex-wrap"
    >
      {scrambledWords.map((word, index) => (
        <div
          key={index}
          onClick={() => onWordClick(index)}
          className={`${wordColors[index]} p-1 md:p-1 lg:p-4 font-bold md:text-lg 
          rounded cursor-pointer text-white`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

type SentenceDisplayProps = {
  userSentence: string[];
};

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({ userSentence }) => (
  <div
    className="flex flex-wrap items-center w-full px-2  
   bg-gray-700 justify-start rounded-md py-8"
  >
    {userSentence.map((word, index) => (
      <div key={index} className="rounded px-1 md:px-2">
        <span className={`text-white${word !== "" ? "" : ""}`}>{word}</span>
      </div>
    ))}
  </div>
);

const ScrambleGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]); // Shuffled word order
  const [userSentence, setUserSentence] = useState<string[]>([]); // User's current arrangement
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Fetch a new sentence and shuffle its words
    const sentence = sentences[currentIndex].text;
    const shuffledWords = sentence.split(" ").sort(() => Math.random() - 0.5);
    setScrambledWords(shuffledWords);
    setUserSentence(Array.from({ length: shuffledWords.length }, () => ""));
    setFeedback(null);
  }, [currentIndex]);

  const wordClickHandler = (index: number) => {
    const word = scrambledWords[index];
    const newSentence = [...userSentence];

    const emptyIndex = newSentence.findIndex((w) => w === "");
    newSentence[emptyIndex] = word;

    let userInput = newSentence
      .filter((w) => w !== "")
      .join("")
      .substring(0);

    if (
      sentences[currentIndex].text
        .split(" ")
        .join("")
        .substring(0, userInput.length) !== userInput
    ) {
      setFeedback("That's not the correct word. Try again!");
      setTimeout(() => {
        setFeedback("");
      }, 1000);
      return;
    }

    setScrambledWords(scrambledWords.filter((w) => w !== word));
    setUserSentence(newSentence);

    if (newSentence.join(" ") === sentences[currentIndex].text) {
      setScore(score + 1);
      setIsCorrect(true);
    }
  };

  const nextSentence = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    setUserSentence(
      Array.from<string>({ length: scrambledWords.length }).fill("")
    );
    setIsCorrect(false);
    setScrambledWords(scrambledWords.sort(() => Math.random() - 0.5));
  };

  const handleButtonClick = () => {
    nextSentence();
  };

  const displayResult = () => {
    if (scrambledWords.length === 0) {
      return (
        <div className="container bg-white p-4 w-[400px] shadow-md rounded-md">
          <div className="mt-3">
            <h1 className="text-gray-800 mb-3">
              {sentences[currentIndex].text}
            </h1>
            <p className="mb-3">Amazing! You got it right!</p>
            <p className="mb-3">Score: {score}</p>

            <Button onClick={handleButtonClick}>Next Sentence</Button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
      {scrambledWords.length > 0 && (
        <div
          className={`container  bg-white shadow-md p-4 ${
            isDarkMode ? "dark:bg-slate-800" : ""
          }`}
        >
          {feedback && <p className="text-red-500 ">{feedback}</p>}
          <div className="pt-4 w-full transition-all">
            <SentenceDisplay userSentence={userSentence} />
            <ScrambledWords
              scrambledWords={scrambledWords}
              onWordClick={(index) => wordClickHandler(index)}
            />
          </div>
        </div>
      )}
      {displayResult()}
    </div>
  );
};

export default ScrambleGame;
