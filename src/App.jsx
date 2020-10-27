import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { lastVisited } from './main/store/actions';
import './App.scss';
import { RegisterRoute } from './main/routes/register';
import { CompleteRoute } from './main/routes/complete';
import { JoinRoute } from './main/routes/join';

function App(props) {
  const dispatch = useDispatch();
  dispatch(lastVisited(window.location.pathname));

  function notify(url) {
    dispatch(lastVisited(url));
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" onClick={() => notify('/')}></Link>
          <Link to="/register" onClick={() => notify('/register')}></Link>
          <Link to="/complete" onClick={() => notify('/complete')}></Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/register">
              <RegisterRoute />
            </Route>
            <Route path="/complete">
              <CompleteRoute />
            </Route>
            <Route path="/">
              <JoinRoute />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
