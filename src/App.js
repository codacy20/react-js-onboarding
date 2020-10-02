import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  const Register = lazy(() => import('./register/register'));
  const Complete = lazy(() => import('./complete/complete'));
  const Join = lazy(() => import('./join/join'));

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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
