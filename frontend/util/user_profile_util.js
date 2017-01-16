export const fetchProfile = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
);
