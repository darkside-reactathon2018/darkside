import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import CreateProfile from "./CreateProfile";
import UserProfile from "./UserProfile";
import Match from './opentok/Match';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Nav>
              <Route path="/create" component={CreateProfile} />
              <Route path="/user/:user_id" component={UserProfile} />
              <Route exact path="/" component={Home} />
            </Nav>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;