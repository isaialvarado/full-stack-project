import { connect } from 'react-redux';
import Filter from './filter';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ session, search}) => {
  const currentUserId = session.currentUser ? session.currentUser.id : null;

  return {
    currentUserId,
    search
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchSearchResults: keywords => dispatch(fetchSearchResults(keywords))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
