import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import CreateProfile from "./CreateProfile";
import UserProfile from "./UserProfile";
import Video from './video/Video';
import Chat from "./Chat";
import Schedule from "./Schedule";
import ReportPage from './ReportPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Nav>
              <Route path="/create" component={CreateProfile} />
              <Route path="/user/:user_id" component={UserProfile} />
              <Route path="/chat" component={Chat} />
              <Route path="/schedule" component={Schedule}/>
              <Route path="/video" component={Video}/>
              <Route exact path="/" component={Home} />
              <Route path="/report" component={ReportPage} />
            </Nav>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;