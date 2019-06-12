import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import search from  "./pages/Search";
import saved from  "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>

        <Switch>
          <Route exact path="/search" Component={saved} />
          <Route exact path="/saved" Component={search} />
          <Route from="/" to="search" /> 
        </Switch>

      </Router>
    );
  }
}

export default App;
