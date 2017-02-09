import { connect } from 'react-redux';
import { login, receiveSessionModal } from '../../actions/session_actions';
import receiveErrors from '../../actions/errors_actions';
import SessionModal from './session_modal';

const mapStateToProps = ({ session }) => {

  return {
    formType: session.modal.formType,
    showModal: session.modal.show
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    clearErrors: () => dispatch(receiveErrors({ session: [] })),
    loginGuest: user => dispatch(login(user)),
    receiveSessionModal: modal => dispatch(receiveSessionModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
