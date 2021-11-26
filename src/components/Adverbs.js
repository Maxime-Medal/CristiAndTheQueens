import React from "react";

const Adverbs = () => {
  let adverbs = [
    "blindly",
    "energetically",
    "punctually",
    "together",
    "physically",
    "miserably",
    "honestly",
    "very",
    "absentmindedly",
    "softly",
    "fondly",
    "solidly",
    "successfully",
    "upward",
    "beautifully",
    "adventurously",
    "loyally",
    "forth",
    "enormously",
    "hungrily",
    "acidly",
    "yawningly",
    "originally",
    "literally",
    "probably",
    "extremely",
    "foolishly",
    "definitely",
    "shakily",
    "rarely",
    "suddenly",
    "regularly",
    "specifically",
    "warmly",
    "primarily",
    "powerfully",
    "vaguely",
    "unexpectedly",
    "previously",
    "lively",
    "kissingly",
    "happily",
    "coolly",
    "questionably",
    "never",
    "afterwards",
    "jaggedly",
    "rather",
    "normally",
    "coyly",
    "scarcely",
    "actually",
    "joyfully",
    "viciously",
    "knowingly",
    "triumphantly",
    "else",
    "yearly",
  ];

  const random = adverbs[Math.floor(Math.random() * adverbs.length)];

  return (
    <div>
{random}
    </div>
  );
};

export default Adverbs;
