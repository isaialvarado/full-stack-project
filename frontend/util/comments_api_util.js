export const createComment = comment => (
  $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    type: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: { comment: { body: comment.body } }
  })
);
