import React from "react";
import styled from "styled-components";
import Resume from "./Resume";
import Navigation from "../components/Navigations";

const tab = [
  "mama",
  "adjectif",
  "grezgegehz",
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
  const [state, setState] = React.useState("dydfregfzer");

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
        <OneWord>{state}</OneWord>
      </DivWord>
      <LikeButton className="button-container">
        <button type="button" onClick={deleteWord}>
          ✗
        </button>
        <button type="button" onClick={addWord}>
          ✔️
        </button>
      </LikeButton>
    </SelectWord>
  );
}
const SelectWord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const DivWord = styled.div`
  background-color: plum;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  border-radius: 25px;
`;

const OneWord = styled.p`
  font-size: 3em;
  justify-content: center;
  align-items: center;
  font-family: var(--text-font);
`;

const LikeButton = styled.div`
  background-color: royalblue;
  width: 100%;
  
  button {
    width: 50%;
    height: 100%;
    font-size: 3em;
    background-color:rgba();
  }
`;

export default SwitchPage;
