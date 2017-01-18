export const createComment = comment => (
  $.ajax({
    type: 'POST',
    url: 'api/thumbs',
    data: { comment }
  })
);

export const updateComment = comment => (
  $.ajax({
    type: 'PATCH',
    url: `api/thumbs/${comment.id}`,
    data: { comment }
  })
);
