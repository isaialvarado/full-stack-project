import { RECEIVE_DEAL, CLEAR_DEAL_DETAIL } from '../actions/deals_actions';
import { merge } from 'lodash';
import { RECEIVE_THUMB, REMOVE_THUMB } from '../actions/thumbs_actions';

export const _nullDealDetail = Object.freeze({
  id: '',
  title: '',
  description: '',
  price: '',
  vendor: '',
  category: '',
  dealUrl: '',
  imageUrl: '',
  cloudUrl: '',
  thumbs: '',
  thumbData: {},
  totalComments: '',
  createdAt: '',
  updatedAt: '',
  author: '',
  authorId: '',
  comments: [
  ]
});

export const dealDetailReducer = (state = _nullDealDetail, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DEAL:
      return action.deal;
    case CLEAR_DEAL_DETAIL:
      return _nullDealDetail;
    case RECEIVE_THUMB:
      let dealId = action.thumb.dealId;
      let oldValue = newState.thumbData.value || 0;
      const newValue = action.thumb.value;
      newState.thumbData.id = action.thumb.id;
      newState.thumbData.value = newValue;
      newState.thumbs -= oldValue - newValue;
      return newState;
    case REMOVE_THUMB:
      dealId = action.thumb.dealId;
      oldValue = newState.thumbData.value || 0;
      newState.thumbData = { id: null, value: null };
      newState.thumbs -= oldValue;
      return newState;
    default:
      return state;
  }
};

export default dealDetailReducer;
