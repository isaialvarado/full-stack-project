import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const pathname = location.pathname.slice(1);
  const processForm = (pathname === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    logout: () => dispatch(logout()),
    pathname
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
