class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
      t.string :category, null: false
      t.string :title, null: false
      t.float :price, null: false
      t.string :vendor, null: false
      t.text :description, null: false
      t.text :deal_url, null: false
      t.integer :author_id, null: false
      t.timestamps null: false
    end
  end
end
