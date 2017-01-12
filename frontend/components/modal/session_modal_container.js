import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/session_actions';
import SessionModal from './session_modal';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveErrors: () => dispatch(receiveErrors([])),
    formType: ownProps.formType
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SessionModal);
