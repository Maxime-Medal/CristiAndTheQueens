import axios from "axios";
import Word from "./Word";
import React, { useEffect, useState } from "react";

const ApiDictonary = () => {
  const [words, setWords] = useState([]);
  const [wordsDetails, setWordsDetails] = useState(null);
  const [wordsToChose, setWordsToChose] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((res) => res.data)
      .then((data) => {
        setWords(data);
      });
  }, []);
  let a = []
  for (let i = 0; i < words.length; i++) {
    a.push(words[i].word.replace(/['"]+/g, ""));
    console.log(a);
  }
  useEffect(() => {
      for (let i=0; i<a.length; i++) {
      axios
        .get(
          `https://magical-it-works.jsrover.wilders.dev/https://api.dictionaryapi.dev/api/v2/entries/en/${a[i]}`
        )
        .then((res) => res.data)
        .then((data) => {
          setWordsDetails(data);
        })
        .catch((err) => {
          console.log(err);
        });
        wordsToChose.push(wordsDetails);
    }
  }, [words]);

  return (
    <div>
      {words.map((word) => (
        <Word word={word} key={word.word} />
      ))}
    </div>
  );
};

export default ApiDictonary;
