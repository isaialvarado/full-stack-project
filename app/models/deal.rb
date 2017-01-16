CATEGORIES = [
  'Apple',
  'Autos',
  'Bags & Luggage',
  'Books & Magazines',
  'Children',
  'Clothing, Shoes & Accessories',
  'Computers',
  'Education',
  'Entertainment',
  'Finance',
  'Flowers & Gifts',
  'Freebies',
  'Grocery',
  'Health & Beauty',
  'Home & Home Improvement',
  'Movies',
  'Office & School Supplies',
  'Other',
  'Pets',
  'Phones',
  'Restaurants',
  'Seasonal',
  'Services',
  'Shoes',
  'Sporting Goods',
  'Tech & Electronics',
  'Travel',
  'TV',
  'Video Games'
]

class Deal < ActiveRecord::Base
  validates :category, :title, :price, :vendor, :description, :deal_url, :author, presence: true
  validates :price,
    numericality: { greater_than_or_equal_to: 0 },
    format: { with: /\A\d+(\.\d{1,2})?\z/ }
  validates :description, length: { minimum: 5 }
  validates :deal_url, url: true
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User,
    inverse_of: :deals
end