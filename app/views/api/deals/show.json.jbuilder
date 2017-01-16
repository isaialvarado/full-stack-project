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
