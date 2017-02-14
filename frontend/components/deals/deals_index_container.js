import { connect } from 'react-redux';
import { fetchDeals } from '../../actions/deals_actions';
import DealsIndex from './deals_index';
import { dealsArray } from '../../reducers/selectors';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ deals, session, search}) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;

  return {
    deals: dealsArray(deals),
    currentUserId,
    search
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchDeals: () => dispatch(fetchDeals()),
    fetchSearchResults: keywords => dispatch(fetchSearchResults(keywords)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealsIndex);
