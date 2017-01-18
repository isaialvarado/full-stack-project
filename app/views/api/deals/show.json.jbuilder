json.(
  @deal,
  :id,
  :category,
  :title,
  :price,
  :vendor,
  :description,
  :deal_url,
  :image_url,
  :cloud_url,
  :created_at,
  :updated_at
)

json.author @deal.author.username
json.author_id @deal.author.id
json.thumbs @deal.thumbs.sum(:value)
json.thumb_data do
  if @thumb
    json.id @thumb['id']
    json.value @thumb['value']
  else
    json.id nil
    json.value nil
  end
end
