import { RECEIVE_DEAL, REMOVE_DEAL } from '../actions/deals_actions';
import { merge } from 'lodash';

const _nullDealDetail = {
  id: '',
  title: '',
  body: '',
  price: '',
  vendor: '',
  category: '',
  dealUrl: '',
  imageUrl: '',
  thumbs: '',
  totalComments: '',
  createdAt: '',
  updatedAt: '',
  author: '',
  comments: [
  ]
};

export const dealDetailReducer = (state = _nullDealDetail, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DEAL:
      return action.deal;
    case REMOVE_DEAL:
      return _nullDealDetail;
    default:
      return state;
  }
};

export default dealDetailReducer;
