import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === 'Log In') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    logout: () => dispatch(logout()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
