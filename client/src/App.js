import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Search from  "./pages/Search";
import Saved from  "./pages/Saved";

// var fetchingResource = null;

// function googleBooksAPI () {
// queryURL = ""
//     fetchingResource = $.ajax({
//        url: '/resource',
//        data: {},
//        cache: false,
//        timeout: 15000,
//        type: 'GET',
//        beforeSend: function () {},
//        complete: function () {
//            fetchingResource = null;
//        },
//        error: function () {
//            if (result.statusText != "abort");
//        },
//        success: function () {}
//     }); 
// }


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">GoogleBooks</Link>
          </li>
          <li>
            <Link to="/Search">About</Link>
          </li>
          <li>
            <Link to="/Saved">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
    );
  }
}

export default App;
