import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: keywords => dispatch(fetchSearchResults(keywords)),
});

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchContainer;
