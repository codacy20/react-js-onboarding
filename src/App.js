import React from 'react';
import Register from './register/register';
import Complete from './complete/complete';
import Join from './join/join';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">join</Link>
            </li>
            <li>
              <Link to="/complete">complete</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route path="/">
            <Join />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
