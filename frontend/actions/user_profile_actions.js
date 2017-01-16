import * as ProfileAPIUtil from '../util/user_profile_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const fetchProfile = userId => dispatch => (
  ProfileAPIUtil.fetchProfile(userId)
    .then(profile => dispatch(receiveProfile(profile)))
);
