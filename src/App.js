import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Prva from "./Components/Prva.js";
import Druga from "./Components/Druga.js";
import Treca from "./Components/Treca.js";
import Cetvrta from "./Components/Cetvrta.js";
import Peta from "./Components/Peta.js";
import Sesta from "./Components/Sesta.js";
import Login from "./Components/Login.js";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Prva}></Route>
      <Route exact path="/Druga" component={Druga}></Route>
      <Route exact path="/Treca" component={Treca}></Route>
      <Route exact path="/Cetvrta" component={Cetvrta}></Route>
      <Route exact path="/Peta" component={Peta}></Route>
      <Route exact path="/Sesta" component={Sesta}></Route>
      <Route exact path="/Login" component={Login}></Route>
    </Router>
  );
}

export default App;
