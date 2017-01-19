import React from 'react';
import CommentsIndexContainer from './comments_index_item_container';

const CommentsIndex = ({ comments }) => {
  const commentList = Object.keys(comments).map(key => {
    let comment = comments[key];
    return <CommentsIndexContainer key={comment.id} comment={comment} />;
  });

  return (
    <div id='deal-detail-comments'>
      {commentList}
    </div>
  );
};

export default CommentsIndex;
