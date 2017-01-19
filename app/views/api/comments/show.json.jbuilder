json.(@comment, :id, :body, :created_at, :updated_at)
json.author do
  json.(@comment.author, :id, :username)
end
