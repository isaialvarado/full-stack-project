@deals.each do |deal|
  json.set! deal.id do
    json.(deal, :id, :title, :price, :vendor, :cloud_url)
    json.thumbs (@thumb_sums[deal.id] || 0)
    json.thumb_data do
      json.value @thumb_values[deal.id]
      json.id @thumb_ids[deal.id]
    end
    json.total_comments (@comment_counts[deal.id] || 0)
  end
end
