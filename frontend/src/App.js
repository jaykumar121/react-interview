import React from "react";
import "./App.css";
import Home from "./container/Home";
import Loan from "./container/Loan";
import Nav from "./container/Nav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="conatainer-fluid">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/loan">
            <Loan url={"http://localhost:12059/react-interview/getLoanData"} />
          </Route>
          <Route exact path="/map">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
