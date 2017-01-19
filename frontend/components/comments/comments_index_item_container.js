import { connect } from 'react-redux';
import { updateComment } from '../../actions/comments_actions';
import CommentsIndexItem from './comments_index_item';

const mapStateToProps = ({ session }, { comment }) => {

  const currentUser = session.currentUser ? session.currentUser : null;

  return {
    currentUser,
    comment
  };
};

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
});

const CommentsIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndexItem);

export default CommentsIndexContainer;
