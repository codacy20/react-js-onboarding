import { combineReducers } from 'redux';
import { LAST_VISITED, REMOVE_VISITED, ACCOUNT_TYPE } from './actions';

function history(state = [], action) {
  switch (action.type) {
    case LAST_VISITED:
      return [...state, action.url];
    case REMOVE_VISITED:
      state.splice(-1);
      return state;
    default:
      return state;
  }
}

function accountType(state = '', action) {
  switch (action.type) {
    case ACCOUNT_TYPE:
      return action.typeOfAccount;
    default:
      return state;
  }
}

const loginApp = combineReducers({
  history,
  accountType,
});

export default loginApp;
