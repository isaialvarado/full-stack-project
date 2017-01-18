class AddIndexToThumbs < ActiveRecord::Migration
  def change
    add_index :thumbs, [:deal_id, :user_id], unique: true
  end
end
