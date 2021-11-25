import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiDictonary = () => {
  const [words, setWords] = useState([]);
  const [wordsDetails, setWordsDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((res) => res.data)
      .then((res) => setWords(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (words) {
      let a = words[0].word
      let link = a.replace(/'/gi, "");
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${link}`)
        .then((res) => res.data)
        .then((res) => setWordsDetails(res))
        .then(console.log(wordsDetails));
    }
  }, [words]);

  return <div></div>;
};

export default ApiDictonary;
