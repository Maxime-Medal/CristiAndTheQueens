import Cursor from "./styles/Cursor";

const WordButton = ({rangeWordValue, setRangeWordValue}) => {

  return (
    <Cursor className="wordButton">
      <input
        type="range"
        min="1"
        max="400"
        value={rangeWordValue}
        onChange={(e) => setRangeWordValue(e.target.value)}
      />
    </Cursor>
  );
};

export default WordButton;
