import { connect } from 'react-redux';
import DealsIndex from './deals_index';

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
  null,
  mapDispatchToProps
)(DealsIndex);
