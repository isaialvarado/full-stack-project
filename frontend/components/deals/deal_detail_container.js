import { connect } from 'react-redux';
import DealDetail from './new_deal_form';

const mapStateToProps = ({ dealDetail, currentUser }) => {
  return {
    currentUser,
    dealDetail,
  };
};

export default connect(
  mapStateToProps
)(DealDetail);
