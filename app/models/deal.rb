class Deal < ActiveRecord::Base
  validates :category, :title, :price, :vendor, :description, :deal_url, :author, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :description, length: { minimum: 5 }
  validates :category, inclusion: { in: CATEGORIES }
  validates :deal_url, url: true

  belongs_to :author, foreign_key: :author_id
end


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
