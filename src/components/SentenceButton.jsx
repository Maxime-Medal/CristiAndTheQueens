import Cursor from "./styles/Cursor";

const SentenceButton = ({rangeSentenceValue ,setRangeSentenceValue}) => {

  return (
    <Cursor className="sentenceButton">
      <input className="customSlider"
        type="range"
        min="1"
        max="150"
        value={rangeSentenceValue}
        onChange={(e) => setRangeSentenceValue(e.target.value)}
      />
    </Cursor>
  );
};



export default SentenceButton;
