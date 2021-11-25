import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigations";
import Home from "./pages/Home";
import SwitchPages from "./pages/SwitchPages";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SwitchPages" exact component={SwitchPages}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
