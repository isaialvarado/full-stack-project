class AddPublicIdToDeals < ActiveRecord::Migration
  def change
    add_column :deals, :image_public_id, :string
  end
end
