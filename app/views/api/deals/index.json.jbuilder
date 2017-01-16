@deals.each do |deal|
  json.set! deal.id do
    json.(deal, :id, :title, :price, :vendor, :cloud_url)
    json.author deal.author.username
  end
end
