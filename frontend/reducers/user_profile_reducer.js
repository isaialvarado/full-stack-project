import { RECEIVE_PROFILE, CLEAR_PROFILE } from '../actions/user_profile_actions';
import { merge } from 'lodash';

export const _nullUserProfile = Object.freeze({
  id: '',
  username: '',
  createdAt: '',
  deals: []
});

export const userProfileReducer = (state = _nullUserProfile, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile;
    case CLEAR_PROFILE:
      return _nullUserProfile;
    default:
      return state;
  }
};

export default userProfileReducer;
