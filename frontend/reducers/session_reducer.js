import { RECEIVE_CURRENT_USER, RECEIVE_MODAL_OPTIONS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  modal: {
    show: true,
    formType: 'Log In'
  }
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      let modal = { show: false, formType: 'Log In' };
      return merge({}, _nullUser, { currentUser }, { modal });
    case RECEIVE_MODAL_OPTIONS:
      modal = action.modal;
      return merge({}, state, { modal });
    default:
      return state;
  }
};

export default sessionReducer;
