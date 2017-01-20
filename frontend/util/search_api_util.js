export const fetchSearchResults = searchData => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { searchData }
  })
);
