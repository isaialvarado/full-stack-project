import * as CommentsAPIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  CommentsAPIUtil.createComment(comment)
    .then(newComment => dispatch(receiveComment(newComment)))
);

export const updateComment = comment => dispatch => (
  CommentsAPIUtil.updateComment(comment)
    .then(updatedComment => dispatch(receiveComment(updatedComment)))
);
