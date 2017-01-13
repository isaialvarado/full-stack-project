export const fetchDeals = () => (
  $.ajax({
    method: 'GET',
    url: 'api/deals'
  })
);

export const fetchDeal = dealId => (
  $.ajax({
    method: 'GET',
    url: `api/deals/${dealId}`
  })
);

export const createDeal = deal => (
  $.ajax({
    method: 'POST',
    url: 'api/deals',
    data: { deal }
  })
);

export const updateDeal = deal => (
  $.ajax({
    method: 'PATCH',
    url: `api/deals/${deal.id}`,
    data: { deal }
  })
);

export const deleteDeal = dealId => (
  $.ajax({
    method: 'DELETE',
    url: `api/deals/${dealId}`,
  })
);
