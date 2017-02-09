import { RECEIVE_CURRENT_USER, RECEIVE_MODAL_OPTIONS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullSession = Object.freeze({
  currentUser: null,
  modal: {
    showModal: true,
    formType: 'Log In'
  }
});

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      const showModal = currentUser ? false : true;
      let modal = { showModal, formType: 'Log In' };
      return merge({}, _nullSession, { currentUser }, { modal });
    case RECEIVE_MODAL_OPTIONS:
      modal = action.modal;
      return merge({}, state, { modal });
    default:
      return state;
  }
};

export default sessionReducer;
