import { connect } from 'react-redux';
import DealDetail from './deal_detail';
import { fetchDeal, deleteDeal, clearDetail } from '../../actions/deals_actions';

const mapStateToProps = ({ dealDetail, session }) => {
  return {
    currentUser: session.currentUser,
    dealDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeal: dealId => dispatch(fetchDeal(dealId)),
    deleteDeal: dealId => dispatch(deleteDeal(dealId)),
    clearDetail: () => dispatch(clearDetail())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealDetail);
