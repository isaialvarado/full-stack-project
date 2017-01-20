CATEGORIES = [
  'Books & Magazines',
  'Clothing, Shoes & Accessories',
  'Entertainment',
  'Grocery',
  'Health & Beauty',
  'Movies',
  'Office & School Supplies',
  'Other',
  'Restaurants',
  'Sporting Goods',
  'Tech & Electronics',
  'Travel',
  'Video Games'
]

class Deal < ActiveRecord::Base
  validates :category, :title, :price, :vendor, :description, :deal_url, :author, presence: true
  validates :price,
    numericality: { greater_than_or_equal_to: 0 },
    format: { with: /\A\d+(\.\d{1,2})?\z/ }
  validates :description, length: { minimum: 5 }
  validates :deal_url, url: true
  validates :category, inclusion: { in: CATEGORIES }

  has_many :thumbs, dependent: :destroy
  has_many :comments, dependent: :destroy
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User,
    inverse_of: :deals
end
