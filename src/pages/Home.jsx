import SentenceButton from "../components/SentenceButton";
import WordButton from "../components/WordButton";
import { useState } from "react";

const Home = () => {
  const [rangeSentenceValue, setRangeSentenceValue] = useState(5);
  const [rangeWordValue, setRangeWordValue] = useState(10);



  return (
    <div className="home">
      <div className="cursor">
        <h2>Number of sentences {rangeSentenceValue} </h2>
        <SentenceButton rangeSentenceValue={rangeSentenceValue} setRangeSentenceValue={setRangeSentenceValue} />
        <h2>Number of words {rangeWordValue} </h2>
        <WordButton rangeWordValue={rangeWordValue} setRangeWordValue={setRangeWordValue} />
      </div>
    </div>
  );
};

export default Home;
