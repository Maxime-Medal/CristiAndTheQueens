import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import SwitchPages from "./pages/SwitchPages";


const App = () => {
  //<GiveSentences words={array} numbSentence={nb} />
  const [rangeWordValue, setRangeWordValue] = React.useState(10);
  const [rangeSentenceValue, setRangeSentenceValue] = useState(9);
  const [sentences, setSentences] = useState(null)

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact >
          <Home rangeWordValue={rangeWordValue} setRangeWordValue={setRangeWordValue}/>
          </Route>
        <Route path="/SwitchPages" exact >
        <SwitchPages rangeWordValue={rangeWordValue} rangeSentenceValue={rangeSentenceValue} setRangeSentenceValue={setRangeSentenceValue} sentences={sentences} setSentences={setSentences} />
        </Route>
        <Route path="/SwitchPages/answer" exact>
        <Resume array={sentences} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;