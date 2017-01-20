import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = deals => ({
  type: RECEIVE_SEARCH_RESULTS,
  deals
});

export const fetchSearchResults = keywords => dispatch => (
  SearchAPIUtil.fetchSearchResults(keywords)
    .then(deals => dispatch(receiveSearchResults(deals)))
);
