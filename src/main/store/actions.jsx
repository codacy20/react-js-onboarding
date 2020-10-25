/*
 * action types
 */

export const LAST_VISITED = 'LAST_VISITED';
export const REMOVE_VISITED = 'REMOVE_VISITED';
export const ACCOUNT_TYPE = 'ACCOUNT_TYPE';
export const ACCOUNT_INFO = 'ACCOUNT_INFO';
// export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * other constants
 */

export const AccountInfo = {
  NAME: 'NAME',
  TYPE: 'TYPE',
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
  CONSENT: 'CONSENT',
  PHONENR: 'PHONENR',
  COUNTRY: 'CONTRY',
};

/*
 * action creators
 */

export function lastVisited(url) {
  return { type: LAST_VISITED, url };
}

export function removeVisited(url) {
  return { type: REMOVE_VISITED, url };
}

export function accountType(typeOfAccount) {
  return { type: ACCOUNT_TYPE, typeOfAccount };
}

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index };
// }

export function setAccountInfo(info) {
  return { type: SET_VISIBILITY_FILTER, info };
}
