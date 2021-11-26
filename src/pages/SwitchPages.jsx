import React from "react";
import styled from "styled-components";
import Resume from "./Resume";
import Navigation from "../components/Navigations";

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
  const [state, setState] = React.useState("dyd");

  const deleteWord = () => {
    let index = Math.floor(Math.random() * tab.length);
    return tab.splice(index, 1), tab.splice(index, 1), setState(tab[index]);
  };

  const addWord = () => {
    let index = Math.floor(Math.random() * tab.length);
    return setState(tab[index]), phrase.push(tab[index]), tab.splice(index, 1);
  };
  console.log(phrase);
  if (rangeWordValue === phrase.length) {
    return <Resume />;
  }
  return (
    <SelectWord>
      <Navigation />

      <DivWord>
        <div className="suggest">
          <OneWord>{state}</OneWord>
          <h1>{rangeWordValue}</h1>
        </div>
      </DivWord>
      <LikeButton className="button-container">
        <button type="button" onClick={deleteWord}>
          ❌
        </button>
        <button type="button" onClick={addWord}>
          ✅
        </button>
      </LikeButton>
    </SelectWord>
  );
}
const SelectWord = styled.div`
  background-color: powderblue;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DivWord = styled.div`
  background-color: plum;
  justify-content:center;
  align-items: center;
  height: 40%;
  width: 80%;
`;

const OneWord = styled.p`
  font-size: 3em;
  background-color: rebeccapurple;
`;

const LikeButton = styled.div`
  background-color: royalblue;
`;

export default SwitchPage;
