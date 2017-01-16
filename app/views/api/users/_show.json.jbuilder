json.(user, :id, :username, :created_at)
json.deals do
  json.array! user.deals do |deal|
    json.(deal, :id, :title, :created_at)
  end
end
