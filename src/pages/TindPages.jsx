import React from "react";

const tab = [
  { name: "mama", type: "adjectif" },
  { name: "daz", type: "feezf" },
  { name: "jeanluc", type: "juju" },
  { name: "pedro", type: "blblba" },
  { name: "archic", type: "jucezju" },
  { name: "jeauc", type: "jujccdcu" },
  { name: "jeanecluc", type: "juju" },
];
const objet = tab.map((e) => e.name);
const phrase = [];

function TindPages() {
  
  const [state, setState] = React.useState("dyd");

  const deleteWord = () => {
    let index = Math.floor(Math.random() * objet.length);
    return (objet.splice(index, 1),
            tab.splice(index, 1), 
            setState(objet[index])
     );
  };

  const addWord = () => {
    let index = Math.floor(Math.random() * objet.length);
    return (
        setState(objet[index]),
      phrase.push(tab[index]),
      objet.splice(index, 1),
      tab.splice(index, 1)
  
    );
  };
  console.log(phrase);
  console.log(objet);

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

export default TindPages;
