import React from "react";

const tab = [
  { name: "mama", type: "adjectif" },
  { name: "daz", type: "feezf" },
  { name: "jeanluc", type: "juju" },
];
const objet = tab.map((e) => e.name);
const phrase = [];

function TindPages() {
  const [state, setState] = React.useState("de");


  const randomWordDislike = () => {
      return setState(objet[Math.floor(Math.random() * objet.length)])

  }

  const randomWord = () => {
    let i = Math.floor(Math.random() * objet.length);
    return setState(objet[i]), 
    phrase.push(tab[i]),
    tab.shift(tab[i]);
  };
  console.log(phrase);
  console.log(tab)

  return (
    <div>
      <div>
        <h1>{state}</h1>
      </div>
      <div className="button-container">
        <button type="button" onClick={randomWordDislike}>Dislike</button>
        <button type="button" onClick={randomWord}>
          Like
        </button>
      </div>
    </div>
  );
}

export default TindPages;
