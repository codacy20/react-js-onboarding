import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

function App() {
  const Register = lazy(() => import('./main/routes/register'));
  const Complete = lazy(() => import('./main/routes/complete'));
  const Join = lazy(() => import('./main/routes/join'));

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">join</Link>
          <Link to="/complete">complete</Link>
          <Link to="/register">register</Link>
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
