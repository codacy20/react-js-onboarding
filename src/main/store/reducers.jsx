import { combineReducers } from 'redux';
import {
  LAST_VISITED,
  REMOVE_VISITED,
  ACCOUNT_TYPE,
  AccountInfo,
} from './actions';

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

function accountInfo(state = {}, action) {
  switch (action.type) {
    case AccountInfo.CONSENT:
      return { ...state, CONSENT: action.info };
    case AccountInfo.COUNTRY:
      return { ...state, COUNTRY: action.info };
    case AccountInfo.EMAIL:
      return { ...state, EMAIL: action.info };
    case AccountInfo.NAME:
      return { ...state, NAME: action.info };
    case AccountInfo.PHONENR:
      return { ...state, PHONENR: action.info };
    case AccountInfo.TYPE:
      return { ...state, TYPE: action.info };
    case AccountInfo.PASSWORD:
      return { ...state, PASSWORD: action.info };
    default:
      return state;
  }
}

const loginApp = combineReducers({
  history,
  accountType,
  accountInfo,
});

export default loginApp;
