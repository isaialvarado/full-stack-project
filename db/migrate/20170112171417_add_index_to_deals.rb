class AddIndexToDeals < ActiveRecord::Migration
  def change
    add_index :deals, :author_id
  end
end
