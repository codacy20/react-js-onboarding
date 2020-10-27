import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './main/store/store';
import { Provider } from 'react-redux'
import { BreakpointProvider } from 'react-socks';

let loginStore = store;

ReactDOM.render(
  <Provider store={loginStore}>
    <BreakpointProvider>
      <App />
    </BreakpointProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
