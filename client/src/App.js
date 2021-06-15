import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './basic/navbar';
import Home from './Home';
import N64Scraper from './utils/scrapers/N64Scraper'

export default function App() {
  return (
    
    <Router>
      <NavBar/>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/n64scraper">
            <N64Scraper />
          </Route>
        </Switch>
    </Router>
  );
}