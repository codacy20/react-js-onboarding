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

export function setAccountInfo(type, info) {
  switch (type) {
    case AccountInfo.NAME:
      return { type: AccountInfo.NAME, info };
    case AccountInfo.TYPE:
      return { type: AccountInfo.TYPE, info };
    case AccountInfo.PHONENR:
      return { type: AccountInfo.PHONENR, info };
    case AccountInfo.PASSWORD:
      return { type: AccountInfo.PASSWORD, info };
    case AccountInfo.EMAIL:
      return { type: AccountInfo.EMAIL, info };
    case AccountInfo.COUNTRY:
      return { type: AccountInfo.COUNTRY, info };
    case AccountInfo.CONSENT:
      return { type: AccountInfo.CONSENT, info };
    default:
      return null;
  }
}
