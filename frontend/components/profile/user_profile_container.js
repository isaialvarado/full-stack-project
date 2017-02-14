import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchProfile, clearProfile } from '../../actions/user_profile_actions';

const mapStateToProps = ({ userProfile }) => ({
  userProfile
});

const mapDispatchToProps = (dispatch) => {

  return {
    fetchProfile: userId => dispatch(fetchProfile(userId)),
    clearProfile: () => dispatch(clearProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
