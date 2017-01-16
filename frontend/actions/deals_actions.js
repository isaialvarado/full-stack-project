import * as DealsAPIUtil from '../util/deals_api_util';
import receiveErrors from './errors_actions';

export const RECEIVE_DEALS = 'RECEIVE_DEALS';
export const RECEIVE_DEAL = 'RECEIVE_DEAL';
export const REMOVE_DEAL = 'REMOVE_DEAL';
export const CLEAR_DEAL_DETAIL = 'REMOVE_DEAL';

export const receiveDeals = deals => ({
  type: RECEIVE_DEALS,
  deals
});

export const receiveDeal = deal => ({
  type: RECEIVE_DEAL,
  deal
});

export const removeDeal = dealId => ({
  type: REMOVE_DEAL,
  dealId
});

export const fetchDeals = () => dispatch => (
  DealsAPIUtil.fetchDeals().then(deals => dispatch(receiveDeals(deals)))
);

export const fetchDeal = dealId => dispatch => (
  DealsAPIUtil.fetchDeal(dealId).then(deal => dispatch(receiveDeal(deal)))
);

export const createDeal = deal => dispatch => (
  DealsAPIUtil.createDeal(deal).then(
    newDeal => dispatch(receiveDeal(newDeal)),
    errors => dispatch(receiveErrors({ deal: errors.responseJSON }))
  )
);

export const updateDeal = deal => dispatch => (
  DealsAPIUtil.updateDeal(deal).then(
    updatedDeal => dispatch(receiveDeal(updatedDeal)),
    errors => dispatch(receiveErrors({ deal: errors.responseJSON }))
  )
);

export const deleteDeal = dealId => dispatch => (
  DealsAPIUtil.deleteDeal(dealId).then(
    deals => dispatch(receiveDeals(deals)),
    errors => dispatch(receiveErrors({ deal: errors.responseJSON }))
  )
);
