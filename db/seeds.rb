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
    user_id: (1..52).to_a.sample,
    deal_id: (1..100).to_a.sample,
    value: [-1, 1, 1, 1, 1].sample
  }
end

def random_comment
  {
    author_id: (1..52).to_a.sample,
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
(25 * 6).times do
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
#     author_id: 1,
#       category: "Books & Magazines",
#       title: "Fine Homebuilding Magazine Subscription",
#       price: 9.99,
#       vendor: "DiscountMags.com",
#       description: "1 or 2 year subscription to Fine Homebuilding Magazine",
#       deal_url: "https://www.discountmags.com/magazine/fine-homebuilding?c=d58ecfeeddcb11e6a53ecab226cfc5390INT&sdtid=9684796&a=slickdeals",
#       cloud_url: "https://static.slickdealscdn.com/attachment/2/8/9/1/1/5129544.attach"
#     },
#     {
#       author_id: 1,
#        category: "Clothing, Shoes & Accessories",
#        title: "Kohl's Cardholders: Carter's Short Sleeve Bodysuits",
#        price: 20.28,
#        vendor: "Kohls.com",
#        description: "Carter’s short sleeve bodysuits",
#        deal_url: "http://www.kohls.com/search.jsp?search=5-pk+bodysuit&submit-search=web-regular&S=1&PPP=60%2F&src=Dr*WCdER2Xg&utm_campaign=297133&utm_medium=affiliate&utm_source=Dr*WCdER2Xg&utm_content=80795&utm_term=2&siteID=Dr.WCdER2Xg-bEnf88VWPD.b_NELP5ejlw",
#        cloud_url: "https://static.slickdealscdn.com/attachment/1/2/2/6/9/8/5/5109900.attach"
#      },
#      {
#        author_id: 1,
#    category: "Entertainment",
#    title: "Monopoly Here & Now Board Game",
#    price: 6,
#    vendor: "ToysRUs.com",
#    description: "Monopoly Here & Now boardgame",
#    deal_url: "http://www.toysrus.com/product/index.jsp?productId=64630126&iradidTRU=221294&camp=aff:TRU:10451:Slickdeals+LLC&irpidTRU=10451&irgwc=1",
#    cloud_url: "https://static.slickdealscdn.com/attachment/1/6/7/9/8/1/2/5123576.attach"
#  },
#  {
#    author_id: 1,
#    category: "Grocery",
#    title: "Prime Members: 72-Count K-Cups (Variety Pack)",
#    price: 26.59,
#    vendor: "Amazon",
#    description: "K-cups",
#    deal_url: "https://www.amazon.com/Keurig-Single-Serve-K-Cup-Variety-Count/dp/B00ZOE5REQ?tag=slicinc-20&ascsubtag=22fd9e6eddda11e6a44d3ea98204674e0INT&th=1",
#    cloud_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5126212.attach"
#  },
#  {
#    author_id: 1,
#    category: "Health & Beauty",
#    title: "4-Piece Lord & Taylor Brow Shaping Kit",
#    price: 3.37,
#    vendor: "Lord & Taylor",
#    description: "4-piece Lord & Taylor brow shaping kit",
#    deal_url: "http://www.lordandtaylor.com/webapp/wcs/stores/servlet/en/lord-and-taylor/beauty--fragrance/five-piece-gel-and-matte-nail-color-set?site_refer=AFF001&mid=40480&siteID=lw9MynSeamY-0I.6HkxgurXy95fWJ4mZuw",
#    cloud_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5125804.attach"
#  },
#  {
#    author_id: 1,
#    category: "Movies",
#    title: "The Iron Giant: Signature Edition (Blu-ray)",
#    price: 8.99,
#    vendor: "Amazon",
#    description: "Blu-ray",
#    deal_url: "https://www.amazon.com/The-Iron-Giant-Blu-ray/dp/B01DJVT53O?tag=slicinc-20&ascsubtag=79f60844ddd711e6b0d236f61dc8940f0INT",
#    cloud_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5126740.attach"
#  },
# ]
