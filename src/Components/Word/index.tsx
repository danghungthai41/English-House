import React, { useState } from "react";
import { useMemo } from "react";

type Props = {
  word: string;
};

const Word = ({ word }: Props) => {
  const splitWord = word.split("");
  const [inputValue, setInputValue] = useState<string>();
  const handleChange = (value: any) => {
    setInputValue(value);
  };
  const compareValue = (word: string):void => {



  }

  const randomWords = useMemo(() => {
    let words: Array<string> = [];

    for (let index = 0; index < 4; index++) {
      const random = Math.floor(Math.random() * splitWord.length);
      words.push(splitWord[random]);
    }
    return Array.from(new Set(words));
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <div>
        {splitWord.map((word, index) => (
          <React.Fragment key={index}>
            <span className="relative text-3xl left-6 bottom-4">
              {randomWords.map((randomWord) =>
                word === randomWord ? word : ""
              )}
            </span>
            <span className="border-b-4 border-primary-color w-8 inline-block  mr-4"></span>
          </React.Fragment>
        ))}
      </div>

      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Type here..."
        className="border-2 p-4 rounded-xl"
      />
      <button className="px-7 py-3 bg-yellow-title rounded-full">Submit</button>
    </div>
  );
};

export default Word;
