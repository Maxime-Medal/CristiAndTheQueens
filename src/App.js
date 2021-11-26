import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import SwitchPages from "./pages/SwitchPages";


const App = () => {
  return (
    <div className="app">
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SwitchPages" exact component={SwitchPages} />
        <Route path="/SwitchPages/answer" exact component={Resume} />
      </Switch>
    </div>
  );
};

export default App;
