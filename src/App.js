import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RemainderDetails from "./components/RemainderDetails";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/reminder-details" component={RemainderDetails} />
      </Router>
    </div>
  );
}

export default App;
