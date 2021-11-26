import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import SwitchPages from "./pages/SwitchPages";


const App = () => {
  //<GiveSentences words={array} numbSentence={nb} />

  const [rangeWordValue, setRangeWordValue] = React.useState(10);
  return (
    <div className="app">
     
      <Switch>
        <Route path="/" exact >
          <Home rangeWordValue={rangeWordValue} setRangeWordValue={setRangeWordValue}/>
          </Route>
        <Route path="/SwitchPages" exact >
        <SwitchPages rangeWordValue={rangeWordValue} />
        </Route>
        <Route path="/SwitchPages/answer" exact component={Resume} />
      </Switch>
    </div>
  );
};

export default App;