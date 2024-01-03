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
  return (
    <div className="mt-12 flex items-center  gap-4 justify-center flex-wrap">
      {scrambledWords.map((word, index) => (
        <div
          key={index}
          onClick={() => onWordClick(index)}
          className={`${getRandomColor()} mr-4 p-3 font-bold text-lg 
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
  onWordClick: (index: number) => void;
};

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({
  userSentence,
  onWordClick,
}) => (
  <div
    className="flex flex-wrap items-center w-full gap-4 px-2
   bg-gray-700 justify-start rounded-md py-8"
  >
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

const ScrambleGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]); // Shuffled word order
  const [userSentence, setUserSentence] = useState<string[]>([]); // User's current arrangement
  const [score, setScore] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Fetch a new sentence and shuffle its words
    const sentence = sentences[currentIndex].text;
    const shuffledWords = sentence.split(" ").sort(() => Math.random() - 0.5);
    setScrambledWords(shuffledWords);
    setUserSentence(Array.from({ length: shuffledWords.length }, () => ""));
  }, [currentIndex]);

  const wordClickHandler = (index: number, isScrambled: boolean) => {
    const word = isScrambled ? scrambledWords[index] : userSentence[index];
    const newSentence = [...userSentence];

    if (isScrambled) {
      const emptyIndex = newSentence.findIndex((w) => w === "");
      newSentence[emptyIndex] = word;

      setScrambledWords(scrambledWords.filter((w) => w !== word));
    } else {
      newSentence[index] = "";
      setScrambledWords([...scrambledWords, word]);
    }

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

  const tryAgain = () => {
    const sentence = sentences[currentIndex].text;
    setScrambledWords(sentence.split(" ").sort(() => Math.random() - 0.5));
    setUserSentence(
      Array.from<string>({ length: sentence.split(" ").length }).fill("")
    );
  };

  const handleButtonClick = () => {
    if (isCorrect) {
      nextSentence();
    } else {
      tryAgain();
    }
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
              </>
            ) : (
              <p className="mb-3">That's not correct. Try again.</p>
            )}
            <Button onClick={handleButtonClick}>
              {isCorrect ? "Next Sentence" : "Try Again"}
            </Button>
          </div>
        </div>
      );
    }
    return null;
  };

  //   const displayResult = () => {
  //     if (scrambledWords.length === 0) {
  //       return (
  //         <div className="container bg-white p-4 w-[400px] shadow-md rounded-md">
  //           <div className="mt-3">
  //             {isCorrect ? (
  //               <>
  //                 <h1 className="text-gray-800 mb-3">
  //                   {sentences[currentIndex].text}
  //                 </h1>
  //                 <p className="mb-3">Amazing! You got it right!</p>
  //                 <p className="mb-3">Score: {score}</p>

  //                 <Button className="" onClick={nextSentence}>
  //                   Next Sentence
  //                 </Button>
  //               </>
  //             ) : (
  //               <>
  //                 <p className="mb-3">That's not correct. Try again.</p>
  //                 <Button className="" onClick={tryAgain}>
  //                   Try Again
  //                 </Button>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       );
  //     }
  //   };

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
              onWordClick={(index) => wordClickHandler(index, false)}
            />
            <ScrambledWords
              scrambledWords={scrambledWords}
              onWordClick={(index) => wordClickHandler(index, true)}
            />
          </div>
        </div>
      )}
      {displayResult()}
    </div>
  );
};

export default ScrambleGame;
