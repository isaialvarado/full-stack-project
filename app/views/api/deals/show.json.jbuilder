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
    json.set! comment.id do
      json.(comment, :id, :body, :created_at, :updated_at, :deal_id)
      json.author do
        json.(comment.author, :id, :username)
      end
    end
  end
end
