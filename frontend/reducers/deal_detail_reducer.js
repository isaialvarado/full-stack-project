import { RECEIVE_DEAL, CLEAR_DEAL_DETAIL } from '../actions/deals_actions';
import { merge } from 'lodash';

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

  switch (action.type) {
    case RECEIVE_DEAL:
      return action.deal;
    case CLEAR_DEAL_DETAIL:
      return _nullDealDetail;
    default:
      return state;
  }
};

export default dealDetailReducer;
