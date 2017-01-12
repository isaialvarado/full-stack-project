import { connect } from 'react-redux';
import { receiveErrors, login } from '../../actions/session_actions';
import SessionModal from './session_modal';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveErrors: () => dispatch(receiveErrors([])),
    loginGuest: user => dispatch(login(user)),
    formType: ownProps.formType
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SessionModal);
