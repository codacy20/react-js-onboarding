import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import todoApp from './main/store/reducers';
import { addTodo } from './main/store/actions';
import './App.scss';

function App() {
  const RegisterRoute = lazy(() => import('./main/routes/register'));
  const CompleteRoute = lazy(() => import('./main/routes/complete'));
  const JoinRoute = lazy(() => import('./main/routes/join'));
  const store = createStore(todoApp);
  store.dispatch(addTodo('Learn about actions'));

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">join</Link>
          <Link to="/register">register</Link>
          <Link to="/complete">complete</Link>
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
