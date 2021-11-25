import React from "react";

const Word = ({ word }) => {
  return (
    <div>
      <h1>{word.word}</h1>
      <h1>{word.phonetic}</h1>
    </div>
  );
};

export default Word;
