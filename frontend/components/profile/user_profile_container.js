import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchProfile } from '../../actions/user_profile_actions';

const mapStateToProps = ({ userProfile }) => ({
  userProfile
});

const mapDispatchToProps = (dispatch) => {

  return {
    fetchProfile: userId => dispatch(fetchProfile(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
