import { RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullErrors = Object.freeze({
  session: [],
  deal: [],
  comment: []
});

const errorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, _nullErrors, action.errors);
    default:
      return state;
  }
};

export default errorsReducer;
