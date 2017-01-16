class AddCloudUrlToDeals < ActiveRecord::Migration
  def change
    add_column :deals, :cloud_url, :string
  end
end
