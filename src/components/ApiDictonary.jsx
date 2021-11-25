import axios from "axios";
import Word from "./Word";
import React, { useEffect, useState } from "react";

const ApiDictonary = () => {
  const [words, setWords] = useState([]);
  const [wordsDetails, setWordsDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((res) => res.data)
      .then((data) => {
        setWords(data);
      });
  }, []);

  let def = [];

  useEffect(() => {
    for (let i = 0; i < words.length; i++) {
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.dictionaryapi.dev/api/v2/entries/en/${words[i]}`
        )
        .then((res) => res.data.meanings)
        .then((data) => data.reduce(def, []))
        .then((data) => {
          setWordsDetails(data);
        })
        .catch((err) => {
          console.log(err);
        });
    def.push(wordsDetails);
  }}, []);

  return (
    <div>
      {words.map((word) => (
        <Word word={word} key={word.word} />
      ))}
    </div>
  );
};

export default ApiDictonary;
