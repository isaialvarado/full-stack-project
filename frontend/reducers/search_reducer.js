import { RECEIVE_SEARCH_TEXT } from '../actions/search_actions';
import { merge } from 'lodash';

const searchReducer = (state = '', action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  }
};

export default searchReducer;
