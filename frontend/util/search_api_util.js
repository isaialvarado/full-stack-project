export const fetchSearchResults = keywords => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { keywords }
  })
);
