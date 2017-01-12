import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  // const pathname = location.pathname.slice(1);
  // const processForm = (pathname === 'login') ? login : signup;

  return {
  //   processForm: user => dispatch(processForm(user)),
  //   logout: () => dispatch(logout()),
  //   pathname
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
