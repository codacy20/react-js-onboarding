/*
 * action types
 */

export const LAST_VISITED = 'LAST_VISITED';
export const REMOVE_VISITED = 'REMOVE_VISITED';
// export const TOGGLE_TODO = 'TOGGLE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  // SHOW_COMPLETED: 'SHOW_COMPLETED',
  // SHOW_ACTIVE: 'SHOW_ACTIVE',
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

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index };
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }
