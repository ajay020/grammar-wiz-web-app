import React, { useState, useEffect } from "react";
import WordBlock from "./WordBlock";
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
  return (
    <div className="mt-12 flex items-center  gap-4 justify-center flex-wrap">
      {scrambledWords.map((word, index) => (
        <WordBlock
          key={word}
          word={word}
          onClick={() => {
            onWordClick(index);
          }}
        />
      ))}
    </div>
  );
};

type SentenceDisplayProps = {
  userSentence: string[];
  onWordClick: (index: number) => void;
};

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({
  userSentence,
  onWordClick,
}) => (
  <div className="flex flex-wrap items-center w-full gap-4 px-2 bg-gray-700 justify-start rounded-md py-8">
    {userSentence.map((word, index) => (
      <div
        key={index}
        onClick={() => onWordClick(index)}
        className="rounded cursor-pointer"
      >
        <span
          className={`text-white rounded-md p-2 border-gray-100 ${
            word !== "" ? "border" : ""
          }`}
        >
          {word}
        </span>
      </div>
    ))}
  </div>
);

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]); // Shuffled word order
  const [userSentence, setUserSentence] = useState<string[]>([]); // User's current arrangement
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Fetch a new sentence and shuffle its words
    const sentence = sentences[currentIndex].text;
    setScrambledWords(sentence.split(" ").sort(() => Math.random() - 0.5));
    let arr: string[] = Array.from<string>({
      length: sentence.split(" ").length,
    }).fill("");
    setUserSentence(arr);
  }, [currentIndex]);

  const scrambledWordClickHandler = (index: number) => {
    const word = scrambledWords[index];
    const newSentence = [...userSentence];
    let idx = newSentence.findIndex((w) => w === "");
    newSentence[idx] = word;
    setUserSentence(newSentence);

    setScrambledWords(scrambledWords.filter((w) => w !== word));

    if (newSentence.join(" ") === sentences[currentIndex].text) {
      setScore(score + 1);
      setIsCorrect(true);
    }
  };

  const userWordClickHandler = (index: number) => {
    const word = userSentence[index];
    const newSentence = [...userSentence];
    newSentence[index] = "";
    setUserSentence(newSentence);
    setScrambledWords([...scrambledWords, word]);
  };

  const nextSentence = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    setUserSentence(
      Array.from<string>({ length: scrambledWords.length }).fill("")
    );
    // setScore(0);
    setIsCorrect(false);
    setScrambledWords(scrambledWords.sort(() => Math.random() - 0.5));
    // Reset the userSentence array
  };

  const tryAgain = () => {
    const sentence = sentences[currentIndex].text;
    setScrambledWords(sentence.split(" ").sort(() => Math.random() - 0.5));
    setUserSentence(
      Array.from<string>({ length: sentence.split(" ").length }).fill("")
    );
    // setScore(0);
    setIsCorrect(false);
    setCurrentIndex(currentIndex);
  };

  const displayResult = () => {
    if (scrambledWords.length === 0) {
      return (
        <div className="container bg-white p-4 w-[400px] shadow-md rounded-md">
          <div className="mt-3">
            {isCorrect ? (
              <>
                <h1 className="text-gray-800 mb-3">
                  {sentences[currentIndex].text}
                </h1>
                <p className="mb-3">Amazing! You got it right!</p>
                <p className="mb-3">Score: {score}</p>

                <Button className="" onClick={nextSentence}>
                  Next Sentence
                </Button>
              </>
            ) : (
              <>
                <p className="mb-3">That's not correct. Try again.</p>
                <Button className="" onClick={tryAgain}>
                  Try Again
                </Button>
              </>
            )}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
      {scrambledWords.length > 0 && (
        <div
          className={`container  bg-white shadow-md p-4 ${
            isDarkMode ? "dark:bg-slate-800" : ""
          }`}
        >
          <div className="mt-3 w-full">
            <SentenceDisplay
              userSentence={userSentence}
              onWordClick={userWordClickHandler}
            />
            <ScrambledWords
              scrambledWords={scrambledWords}
              onWordClick={scrambledWordClickHandler}
            />
          </div>
        </div>
      )}
      {displayResult()}
    </div>
  );
};

export default Game;
