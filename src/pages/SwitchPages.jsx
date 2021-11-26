import React from "react";
import Resume from "./Resume";

const tab = [
  "mama",
  "adjectif",
  "daz",
  "feezf",
  "jeanluc",
  "juju",
  "pedro",
  "blblba",
  "archic",
  "jucezju",
  "jeauc",
  "jujccdcu",
  "jeanecluc",
  "juju",
];


const phrase = [];

function SwitchPage({ rangeWordValue }) {
  const [state, setState] = React.useState("Click on like to begin");

  const deleteWord = () => {
    let index = Math.floor(Math.random() * tab.length);
    return tab.splice(index, 1), tab.splice(index, 1), setState(tab[index]);
  };

  const addWord = () => {
    let index = Math.floor(Math.random() * tab.length);
    return (
      setState(tab[index]),
      phrase.push(tab[index]),
      tab.splice(index, 1)
    );
  };
  console.log(phrase);
  console.log(tab)

  if (rangeWordValue == phrase.length) {
    return <Resume />;
  }
  return (
    <div>
      <div>
        <h1>{state}</h1>
      </div>
      <div className="button-container">
        <button type="button" onClick={deleteWord}>
          Dislike
        </button>
        <button type="button" onClick={addWord}>
          Like
        </button>
      </div>
    </div>
  );
}

export default SwitchPage;
