import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import receiveErrors from '../../actions/errors_actions';
import SessionModal from './session_modal';

const mapDispatchToProps = (dispatch, ownProps) => {
  let initialState = false;
  if (ownProps.route) {
    initialState = ownProps.route.initialState;
  }

  return {
    clearErrors: () => dispatch(receiveErrors({ session: [] })),
    loginGuest: user => dispatch(login(user)),
    formType: ownProps.formType || 'Log In',
    initialState
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SessionModal);
