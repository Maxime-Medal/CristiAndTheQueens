import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigations";
import SentenceButton from "../components/SentenceButton";
import WordButton from "../components/WordButton";
import "../index.css";

const Home = ({ rangeWordValue, setRangeWordValue, rangeSentenceValue, setRangeSentenceValue }) => {

  const handleClick = () => {
    console.log("fonction à inserer");
    console.log(rangeSentenceValue, rangeWordValue);
  };

  return (
    <MainContainer className="home">
      <Up>
        <Navigation />

        <div className="example">
          <Exemple1>
            You need some inspiration to find lyrics to accompagn your melodies?
            Chooser number of words and sentences to get some inspiration. Make
            this app, yours 🙂
          </Exemple1>
        </div>
        <div className="cursor">
        <h2>
            Number of sentences
            <br />
            {rangeSentenceValue}
          </h2>
          <SentenceButton
            rangeSentenceValue={rangeSentenceValue}
            setRangeSentenceValue={setRangeSentenceValue}
          />
          <h2>
            Number of words
            <br />
            {rangeWordValue}
          </h2>
          <WordButton
            rangeWordValue={rangeWordValue}
            setRangeWordValue={setRangeWordValue}
          />
        </div>
      </Up>
      <NavLink
        to="/SwitchPages"
        onClick={handleClick}
        value={(rangeSentenceValue, rangeWordValue)}
      >
        <ButtonChoice>check your choice</ButtonChoice>
      </NavLink>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #bfc8de;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  opacity: 0.8;

  .example {
    /* margin-top: -7%; */
    background-image: url("https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80");
    background-size: contain;
    display: flex;
    justify-content: space-between;

    
  }

  h2 {
    font-family: var(--title-font);
    font-size: 2em;
    color: var(--);
    text-align: center;
    line-height: 1.5;
  }

  .cursor {
    padding: 2em;
    width: 90%;
  }
`;

const Up = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Exemple1 = styled.p`
  text-align: justify;
  padding: 2em;
  background-color: rgba(227, 219, 219, 0.8);
  font-family: var(--text-font);
  line-height: 1.3;
`;

const ButtonChoice = styled.button`
  padding: 0.8em;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  background-color: grey;
  font-weight: bold;
  
`;

export default Home;
