import { useState } from "react";
import styled from "styled-components";
import SentenceButton from "../components/SentenceButton";
import WordButton from "../components/WordButton";

const Home = () => {
  const [rangeSentenceValue, setRangeSentenceValue] = useState(50);
  const [rangeWordValue, setRangeWordValue] = useState(10);

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
        <h2>Number of sentences {rangeSentenceValue} </h2>
        <SentenceButton
          rangeSentenceValue={rangeSentenceValue}
          setRangeSentenceValue={setRangeSentenceValue}
        />
        <h2>Number of words {rangeWordValue} </h2>
        <WordButton
          rangeWordValue={rangeWordValue}
          setRangeWordValue={setRangeWordValue}
        />
      </div>

    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100%;
  background-color: red;
  
  .example{
    background-image: url('https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80');
    background-size: contain;
  }
  `;

const Exemple1 = styled.p`
  text-align: justify;
  padding: 2em;
  background-color: rgba(227, 219, 219,0.8);
`;



export default Home;
