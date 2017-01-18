import React from 'react';
import { formatDate } from '../../util/date_api_util';

const CommentsIndexItem = ({ comment }) => {

  return (
    <div className='comment' key={comment.id}>
      <div className='comment-info'>
        <span>{comment.author.username}</span>
        <span>{formatDate(comment.updatedAt)}</span>
      </div>
      
    </div>
  );
};

const CommentsIndex = ({ comments }) => {
  const commentList = comments.map(comment => (
    <CommentsIndexItem key={comment.id} comment={comment} />
  ));

  return (
    <div id='deal-detail-comments'>
      {commentList}
    </div>
  );
};

export default CommentsIndex;
