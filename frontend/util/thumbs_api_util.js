export const createThumb = (deal_id, user_id) => (
  $.ajax({
    type: 'POST',
    url: 'api/thumbs',
    data: { thumb: { deal_id, user_id } }
  })
);
