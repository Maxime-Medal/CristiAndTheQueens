import axios from "axios";
import React, { useEffect, useState } from "react";
import Words from "./Words";

const Adjectives = () => {
  const [index, setIndex] = useState([]);

  let adjectives = [
    "relieved",
    "empty",
    "aback",
    "futuristic",
    "even",
    "dispensable",
    "actually",
    "famous",
    "scary",
    "guiltless",
    "normal",
    "trashy",
    "half",
    "jolly",
    "discreet",
    "observant",
    "vigorous",
    "fearful",
    "past",
    "dynamic",
    "closed",
    "incandescent",
    "second",
    "heartbreaking",
    "cruel",
    "bloody",
    "obeisant",
    "lively",
    "sore",
    "three",
    "guttural",
    "bashful",
    "absent",
    "teeny",
    "feigned",
    "workable",
    "orange",
    "dull",
    "scandalous",
    "fluttering",
    "aggressive",
    "halting",
    "immediate",
    "unknown",
    "efficacious",
    "open",
    "parsimonious",
    "quickest",
    "excellent",
    "second-hand",
    "misty",
    "recondite",
    "combative",
    "light",
    "resonant",
    "uncovered",
    "glamorous",
    "irritating",
    "enthusiastic",
    "tedious",
    "nutty",
    "southern",
    "erratic",
    "shrill",
    "afraid",
    "worried",
    "economic",
    "ultra",
    "harsh",
    "common",
    "weary",
    "cheerful",
    "loose",
    "concerned",
    "aspiring",
    "organic",
    "workable",
    "naughty",
    "panoramic",
    "pushy",
    "therapeutic",
    "reminiscent",
    "actually",
    "imaginary",
    "incompetent",
    "ahead",
    "enormous",
    "lonely",
    "questionable",
    "four",
    "ruddy",
    "mere",
    "aromatic",
    "private",
    "resolute",
    "dead",
    "wonderful",
    "relevant",
    "protective",
    "defiant",
  ];

  const random = adjectives[Math.floor(Math.random() * adjectives.length)];

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${random}`)
      .then((res) => res.data)
      .then((res) => setIndex(res));
  }, []);

  return (
    <div>
      {index.map((word) => (
        <Words word={word} key={word.word} />
      ))}
    </div>
  );
};

export default Adjectives;
