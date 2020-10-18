import React, { Suspense, lazy } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { lastVisited } from './main/store/actions';
import './App.scss';

function App(props) {
  const RegisterRoute = lazy(() => import('./main/routes/register'));
  const CompleteRoute = lazy(() => import('./main/routes/complete'));
  const JoinRoute = lazy(() => import('./main/routes/join'));
  // const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  dispatch(lastVisited(window.location.pathname));

  function notify(url) {
    dispatch(lastVisited(url));
    // console.log(history); this is how selectors work
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" onClick={() => notify('/')}>
            join
          </Link>
          <Link to="/register" onClick={() => notify('/register')}>
            register
          </Link>
          <Link to="/complete" onClick={() => notify('/complete')}>
            complete
          </Link>
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
