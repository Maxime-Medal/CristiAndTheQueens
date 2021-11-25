import axios from "axios";
import React, { useEffect, useState } from "react";
import Words from "./Words";

const Verbs = () => {
  const [index, setIndex] = useState([]);

  let verbs = [
    "market",
    "kill",
    "want",
    "wipe",
    "integrate",
    "persist",
    "view",
    "fear",
    "dismiss",
    "maintain",
    "breed",
    "creep",
    "tap",
    "disappear",
    "price",
    "pretend",
    "cross",
    "characterize",
    "block",
    "lift",
    "compensate",
    "smash",
    "sponsor",
    "pursue",
    "advance",
    "anticipate",
    "top",
    "dump",
    "announce",
    "bang",
    "govern",
    "match",
    "envisage",
    "carve",
    "lie",
    "plead",
    "drink",
    "swing",
    "transform",
    "spell",
    "calculate",
    "hire",
    "stay",
    "omit",
    "constitute",
    "initiate",
    "suppose",
    "benefit",
    "demonstrate",
    "give",
    "book",
    "study",
    "have",
    "choose",
    "spell",
    "strengthen",
    "enquire",
    "pull",
    "conform",
    "dream",
    "limit",
    "injure",
    "bend",
    "mean",
    "grant",
    "repair",
    "think",
    "throw",
    "assume",
    "pin",
    "rent",
    "search",
    "seize",
    "neglect",
    "manage",
    "remark",
    "talk",
    "miss",
    "determine",
    "cease",
    "decide",
    "act",
    "waste",
    "stroke",
    "break",
    "shift",
    "diminish",
    "stem",
    "work",
    "reduce",
    "speed",
    "support",
    "deserve",
    "interview",
    "borrow",
    "demonstrate",
    "try",
    "born",
    "tear",
  ];

  const random = verbs[Math.floor(Math.random() * verbs.length)];

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${random}`)
      .then((res) => res.data)
      .then((res) => setIndex(res));
  }, []);

  return (
    <div>
      {" "}
      {index.map((word) => (
        <Words word={word} key={word.word} />
      ))}
    </div>
  );
};

export default Verbs;
