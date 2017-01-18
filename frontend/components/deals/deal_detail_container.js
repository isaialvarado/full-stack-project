import { connect } from 'react-redux';
import DealDetail from './deal_detail';
import { fetchDeal, deleteDeal } from '../../actions/deals_actions';

const mapStateToProps = ({ dealDetail, session }) => {
  return {
    currentUser: session.currentUser,
    dealDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeal: dealId => dispatch(fetchDeal(dealId)),
    deleteDeal: dealId => dispatch(deleteDeal(dealId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealDetail);
