class CreateApiThumbs < ActiveRecord::Migration
  def change
    create_table :thumbs do |t|
      t.integer :value, null: false
      t.integer :user_id, null: false
      t.integer :deal_id, null: false
      t.timestamps null: false
    end
  end
end
