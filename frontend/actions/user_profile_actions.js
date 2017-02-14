import * as ProfileAPIUtil from '../util/user_profile_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const clearUserProfile = () => ({
  type: CLEAR_PROFILE
});

export const clearProfile = () => dispatch => (
  dispatch(clearUserProfile())
);

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const fetchProfile = userId => dispatch => (
  ProfileAPIUtil.fetchProfile(userId)
    .then(profile => dispatch(receiveProfile(profile)))
);
