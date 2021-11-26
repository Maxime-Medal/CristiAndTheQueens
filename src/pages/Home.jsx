import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SentenceButton from "../components/SentenceButton";
import WordButton from "../components/WordButton";
import "../index.css";

const Home = ({ rangeWordValue, setRangeWordValue}) => {
  const [rangeSentenceValue, setRangeSentenceValue] = useState(50);


  const handleClick = () => {
    console.log("fonction à inserer");
    console.log(rangeSentenceValue, rangeWordValue);
  };


  return (
    <MainContainer className="home">
      <div className="example">
        <Exemple1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eius
          architecto harum itaque nesciunt eligendi voluptatibus laboriosam.
          Impedit, reiciendis non, ut sequi quaerat distinctio voluptas a magni
          aut molestias numquam? Perspiciatis est asperiores reprehenderit
          similique commodi id deserunt ipsam ratione sed sunt, totam labore.
          Obcaecati, amet. Deleniti quidem hic expedita?
        </Exemple1>
      </div>
      <div className="cursor">
        <h2>
          Number of sentences
          <br />
          {rangeSentenceValue}{" "}
        </h2>
        <SentenceButton
          rangeSentenceValue={rangeSentenceValue}
          setRangeSentenceValue={setRangeSentenceValue}
        />
        <h2>
          Number of words
          <br />
          {rangeWordValue}{" "}
        </h2>
        <WordButton
          rangeWordValue={rangeWordValue}
          setRangeWordValue={setRangeWordValue}
        />
      </div>
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
  background-color: red;
  align-items: center;
  height: 95vh;
  width: 100%;
  margin: 0;

  .example {
    background-image: url("https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80");
    background-size: contain;
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
  color: blue;
  background-color: var(--important-color);
  font-weight: bold;
`;

export default Home;
