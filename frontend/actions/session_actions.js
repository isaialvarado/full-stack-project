import * as SessionAPIUtil from '../util/session_api_util';
import receiveErrors from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors({ session: errors.responseJSON }))
  )
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors({ session: errors.responseJSON }))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);
