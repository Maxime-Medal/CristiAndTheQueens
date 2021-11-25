import React from "react";

const Word = ({ word }) => {
  return (
    <div>
      <h1>{word.word}</h1>
      <p>{word.PartOfSpeech}</p>
    </div>
  );
};

export default Word;
