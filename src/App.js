import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import  Home  from "./component/Home";
import Profile from "./component/Profile"

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home}>
      </Route>
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Contents" component={Profile}></Route>
      <Route path="/About" component={Profile}></Route>

    </React.Fragment>
  );
}

export default App;
