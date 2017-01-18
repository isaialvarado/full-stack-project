export const createThumb = thumb => (
  $.ajax({
    type: 'POST',
    url: 'api/thumbs',
    data: { thumb }
  })
);

export const updateThumb = thumb => (
  $.ajax({
    type: 'PATCH',
    url: `api/thumbs/${thumb.id}`,
    data: { thumb: { value: thumb.value } }
  })
);

export const deleteThumb = thumbId => (
  $.ajax({
    type: 'DELETE',
    url: `api/thumbs/${thumbId}`,
  })
);
