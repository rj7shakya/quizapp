import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "./components/pages/Quiz";
import Setting from "./components/pages/Setting";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Quiz} />
        <Route exact path="/setting" component={Setting} />
      </React.Fragment>
    </Router>
  );
}

export default App;
