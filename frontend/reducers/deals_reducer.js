import { RECEIVE_DEALS, REMOVE_DEAL } from '../actions/deals_actions';
import { RECEIVE_THUMB, REMOVE_THUMB } from '../actions/thumbs_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

export const dealsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DEALS:
      return action.deals;
    case REMOVE_DEAL:
      delete newState[action.deal.id];
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return action.deals;
    case RECEIVE_THUMB:
      let dealId = action.thumb.dealId;
      if (newState[dealId] === undefined) {
        return newState;
      }
      let deal = newState[dealId];
      let oldValue = deal.thumbData.value || 0;
      const newValue = action.thumb.value;
      deal.thumbData.id = action.thumb.id;
      deal.thumbData.value = newValue;
      deal.thumbs -= oldValue - newValue;
      return newState;
    case REMOVE_THUMB:
      dealId = action.thumb.dealId;
      if (newState[dealId] === undefined) {
        return newState;
      }
      deal = newState[dealId];
      oldValue = deal.thumbData.value || 0;
      deal.thumbData = { id: null, value: null };
      deal.thumbs -= oldValue;
      return newState;
    default:
      return state;
  }
};

export default dealsReducer;
