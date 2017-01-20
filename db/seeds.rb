# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

SEED_CATEGORIES = [
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

User.destroy_all
Deal.destroy_all
Thumb.destroy_all
Comment.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

def random_user
  username = Faker::Internet.user_name
  {
    username: username,
    email: "#{username.downcase}.example.com",
    password: Faker::Internet.password(8)
  }
end

def random_deal
  product_name = Faker::Commerce.product_name

  {
    category: SEED_CATEGORIES.sample,
    title: product_name,
    price: Faker::Commerce.price,
    vendor: Faker::Company.name,
    description: Faker::Lorem.paragraphs(rand(2..4)).join(' '),
    deal_url: 'https://www.amazon.com/',
    cloud_url: Faker::Placeholdit.image('300x300', 'png'),
    author_id: (1..100).to_a.sample,
  }
end

def random_thumb
  {
    deal_id: (1..100).to_a.sample,
    user_id: (1..50).to_a.sample,
    value: [-1, 1, 1, 1, 1].sample
  }
end

def random_comment
  {
    author_id: (1..100).to_a.sample,
    deal_id: (1..100).to_a.sample,
    body: Faker::Hipster.sentences((1..4).to_a.sample).join(' ')
  }
end

main_users = [
  { username: 'Guest', email: 'guestaccount@gmail.com', password: 'password' },
  { username: 'Isai', email: 'isaialvarado@gmail.com', password: 'password' }
]

User.create(main_users)
50.times { User.create(random_user) }
100.times { Deal.create(random_deal) }
300.times { Comment.create(random_comment) }

thumbs = []
id_pairs = []
(25 * 70).times do
  thumb = random_thumb
  id_pair = [thumb[:user_id], thumb[:deal_id]]
  unless id_pairs.include?(id_pair)
    id_pairs << id_pair
    thumbs << thumb
  end
end

Thumb.create(thumbs)

# deals = [
#   {
#     category: "Health & Beauty",
#     title: Faker::Commerce.product_name,
#     price: Faker::Commerce.price,
#     vendor: Faker::Company.name,
#     description: "Amazon Dot",
#     deal_url: "https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B01DFKC2SO",
#     author_id: 1,
#     cloud_url: "https://res.cloudinary.com/ssb64/image/upload/v1484521598/umn0pr2erlwyik552laz.jpg",
#     image_url: "https://images-na.ssl-images-amazon.com/images/I/51puyU9501L._SY300_.jpg"
#   },
#   {
#     category: "Video Games",
#     title: "Super Mario Odyssey",
#     price: 59.99,
#     vendor: "Amazon",
#     description: "Nintendo Switch Game",
#     deal_url: "https://www.amazon.com/Super-Mario-Odyssey-Switch/dp/B01MY7GHKJ/ref=sr_1_cc_3?s=aps&ie=UTF8&qid=1484522996&sr=1-3-catcorr&keywords=nintendo+switch",
#     author_id: 1,
#     cloud_url: "https://res.cloudinary.com/ssb64/image/upload/v1484525873/su9y03xs5urerm80t3q2.jpg",
#     image_url: "https://images-na.ssl-images-amazon.com/images/I/41dIKJQ53cL._AC_SX215_.jpg"
#   },
#   {
#   category: "Health & Beauty",
#   title: '',
#   price: Faker::Commerce.price,
#   vendor: Faker::Company.name,
#   description: "Amazon Dot",
#   deal_url: "https://www.amazon.com/All-New-Amazon-Echo-Dot-Add-Alexa-To-Any-Room/dp/B01DFKC2SO",
#   author_id: 1,
#   cloud_url: "https://res.cloudinary.com/ssb64/image/upload/v1484521598/umn0pr2erlwyik552laz.jpg",
#   image_url: "https://images-na.ssl-images-amazon.com/images/I/51puyU9501L._SY300_.jpg"
# },
# ]
