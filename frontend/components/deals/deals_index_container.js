import { connect } from 'react-redux';
import { fetchDeals } from '../../actions/deals_actions';
import DealsIndex from './deals_index';
import { dealsArray } from '../../reducers/selectors';

const mapStateToProps = ({ deals, session}) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;

  return {
    deals: dealsArray(deals),
    currentUserId
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchDeals: () => dispatch(fetchDeals()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealsIndex);
