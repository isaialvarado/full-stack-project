import { RECEIVE_DEALS, RECEIVE_DEAL, REMOVE_DEAL } from '../actions/deals_actions';
import { merge } from 'lodash';

export const dealsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DEALS:
      return { deals: action.deals };
    case RECEIVE_DEAL:
      newState[action.deal.id] = action.deal;
      return newState;
    case REMOVE_DEAL:
      delete newState[action.dealId];
      return newState;
    default:
      return state;
  }
};

export default dealsReducer;
