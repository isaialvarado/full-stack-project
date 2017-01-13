import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === 'Log In') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
