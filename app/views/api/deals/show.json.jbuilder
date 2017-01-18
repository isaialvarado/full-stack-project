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

json.total_comments @total_comments

json.comments do
  @comments.each do |comment|
    json.id comment.id
    json.body comment.body
    json.created_at comment.created_at
    json.updated_at comment.updated_at
    json.author do
      json.id comment.author_id
      json.username comment.username
    end
  end
end
