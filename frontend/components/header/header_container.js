import { connect } from 'react-redux';
import { logout, receiveSessionModal } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveSessionModal: (options) => dispatch(receiveSessionModal(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
