import { connect } from 'react-redux';
import { createComment } from '../../actions/comments_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session }, ownProps) => {

  const currentUser = session.currentUser ? session.currentUser : null;

  return {
    currentUser,
    dealId: ownProps.dealId
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

export default CommentFormContainer;
