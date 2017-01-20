import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_TEXT = 'RECEIVE_SEARCH_TEXT';

export const receiveSearchText = searchText => ({
  type: RECEIVE_SEARCH_TEXT,
  searchText
});

export const receiveSearchResults = deals => ({
  type: RECEIVE_SEARCH_RESULTS,
  deals
});

export const receiveSearch = keywords => dispatch => (
  dispatch(receiveSearchText(keywords))
);

export const fetchSearchResults = keywords => dispatch => (
  SearchAPIUtil.fetchSearchResults(keywords)
    .then(deals => dispatch(receiveSearchResults(deals)))
);
