class AddIndexToTables < ActiveRecord::Migration
  def change
    add_index :comments, :author_id
    add_index :comments, :deal_id
  end
end
