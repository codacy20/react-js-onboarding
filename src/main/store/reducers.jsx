import { combineReducers } from 'redux';
import {
  LAST_VISITED,
  // VisibilityFilters
} from './actions';
// const { SHOW_ALL } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case LAST_VISITED:
//       return action.filter;
//     default:
//       return state;
//   }
// }

function history(state = [], action) {
  switch (action.type) {
    case LAST_VISITED:
      return [
        ...state,
        {
          url: action.url,
        },
      ];
    default:
      return state;
  }
}

const loginApp = combineReducers({
  // visibilityFilter,
  history,
});

export default loginApp;
