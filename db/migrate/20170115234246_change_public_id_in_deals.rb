class ChangePublicIdInDeals < ActiveRecord::Migration
  def change
    rename_column :deals, :image_public_id, :cloud_public_id
  end
end
