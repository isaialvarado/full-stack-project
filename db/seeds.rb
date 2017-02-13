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
    author_id: (1..102).to_a.sample,
    category: SEED_CATEGORIES.sample,
    title: product_name,
    price: Faker::Commerce.price,
    vendor: Faker::Company.name,
    description: Faker::Lorem.paragraphs(rand(2..4)).join(' '),
    deal_url: 'https://www.amazon.com/',
    cloud_url: Faker::Placeholdit.image('300x300', 'png')
  }
end

def random_thumb
  {
    user_id: (1..102).to_a.sample,
    deal_id: (1..45).to_a.sample,
    value: [-1, 1, 1, 1, 1].sample
  }
end

def random_comment
  {
    author_id: (1..102).to_a.sample,
    deal_id: (1..100).to_a.sample,
    body: Faker::Hipster.sentences((1..4).to_a.sample).join(' ')
  }
end

main_users = [
  { username: 'Guest', email: 'guestaccount@gmail.com', password: 'password' },
  { username: 'Isai', email: 'isaialvarado@gmail.com', password: 'password' }
]

User.create(main_users)
100.times { User.create(random_user) }
# 100.times { Deal.create(random_deal) }
# 300.times { Comment.create(random_comment) }

deals = [
    {
    author_id: (1..102).to_a.sample,
    category: "Video Games",
    title: "Super Mario Odyssey",
    price: 59.99,
    vendor: "Amazon",
    description: "Nintendo Switch Game",
    deal_url: "https://www.amazon.com/Super-Mario-Odyssey-Switch/dp/B01MY7GHKJ/ref=sr_1_cc_3?s=aps&ie=UTF8&qid=1484522996&sr=1-3-catcorr&keywords=nintendo+switch",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/41dIKJQ53cL._AC_SX215_.jpg",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486578561/41dIKJQ53cL._AC_SX215__xlinnx.jpg",
    cloud_public_id: "41dIKJQ53cL._AC_SX215__xlinnx"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Books & Magazines",
    title: "1-Year Smithsonian Magazine",
    price: 11.95,
    vendor: "DiscountMags.com",
    description: "1-year subscription to Smithsonian Magazine",
    deal_url: "https://www.discountmags.com/magazine/smithsonian?c=8b42050addcb11e6b7ec0e61fdf5ff2b0INT&sdtid=9680412&a=slickdeals",
    image_url: "https://static.slickdealscdn.com/attachment/4/8/2/3/7/7/5126960.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579413/5126960_zpbe15.jpg",
    cloud_public_id: "5126960_zpbe15"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Books & Magazines",
    title: "Still Missing by Chevy Stevens (Paperback)",
    price: 0,
    vendor: "Macmillan",
    description: "Paperback book",
    deal_url: "http://us.macmillan.com/static/smp/still-missing-promo/",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5083636.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579465/5083636_sagdj2.jpg",
    cloud_public_id: "5083636_sagdj2"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Books & Magazines",
    title: "James Bond Series Kindle eBooks: Dr No, Casino Royale",
    price: 1.99,
    vendor: "Amazon",
    description: "eBooks",
    deal_url: "https://www.amazon.com/Ian%20Fleming/e/B00O53RH3G?tag=slicinc-20&ascsubtag=a76b904cdddb11e6b210f603698a9c4d0INT",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5104532.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579569/5104532_qvpk0w.jpg",
    cloud_public_id: "5104532_qvpk0w"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Books & Magazines",
    title: "The Life-Changing Magic of Tidying Up (Audible Audio Book)",
    price: 25.19,
    vendor: "Audible",
    description: "Audio Book",
    deal_url: "https://www.audible.com/pd/Self-Development/The-Life-Changing-Magic-of-Tidying-Up-Audiobook/B00RC3M6OG?ref_=a_search_c4_1_1_srTtl&qid=1486579672&sr=1-1",
    image_url: "https://static.slickdealscdn.com/attachment/1/8/6/7/1/1/4/5095308.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579747/5095308_coh2vl.jpg",
    cloud_public_id: "5095308_coh2vl"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Clothing, Shoes & Accessories",
    title: "Kohl's Cardholders: Carter's Short Sleeve Bodysuits",
    price: 20.28,
    vendor: "Kohls.com",
    description: "Carter’s short sleeve bodysuits",
    deal_url: "http://www.kohls.com/search.jsp?search=5-pk+bodysuit&submit-search=web-regular&S=1&PPP=60%2F&src=Dr*WCdER2Xg&utm_campaign=297133&utm_medium=affiliate&utm_source=Dr*WCdER2Xg&utm_content=80795&utm_term=2&siteID=Dr.WCdER2Xg-bEnf88VWPD.b_NELP5ejlw",
    image_url: "https://static.slickdealscdn.com/attachment/1/2/2/6/9/8/5/5109900.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579859/5109900_vtzt7v.jpg",
    cloud_public_id: "5109900_vtzt7v"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Clothing, Shoes & Accessories",
    title: "Hanes EcoSmart Men's or Women's Christmas Fleece Sweatshirts",
    price: 4.99,
    vendor: "Hanes.com",
    description: "Hanes men’s or women’s Christmas Fleece Sweatshirts",
    deal_url: "http://www.hanes.com/shop/hanes/clearance--1/up-to-off/mens/hanes-mens-holiday-sweatshirt-28679?fromSearchResult=true&cm_vc=hanes_desktop_OnsiteSearch&mid=24366&source=LINK_AD:Z:HANES&SiteId=lw9MynSeamY-uLmwokjhPLM8jiJ2hVVqXg&cm_mmc=Linkshare-_-NA-_-NA-_-NA&d1=LINKSH",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5124640.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486579940/5124640_e8db3d.png",
    cloud_public_id: "5124640_e8db3d"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Clothing, Shoes & Accessories",
    title: "HP 15.6\" Venetian Women's Tote (various colors)",
    price: 29.99,
    vendor: "Walmart.com",
    description: "Various colors of HP 15.6” Venetian Women’s totes",
    deal_url: "https://www.walmart.com/ip/HP-V8Y73AA-ABL-15.6-Venetian-Women-s-Tote-Black/54947548?u1=1fb0f932ddcf11e6ab2786ddb3eed5c60INT&oid=289955.1&wmlspartner=lw9MynSeamY&sourceid=31158298991922266112&affillinktype=10&veh=aff",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5127732.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580018/5127732_wvdrea.jpg",
    cloud_public_id: "5127732_wvdrea"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Entertainment",
    title: "3-Day Disneyland Tickets: Park Hopper: $189 or 1-Park Per Day",
    price: 189,
    vendor: "Disneyland.Disney.com",
    description: "3-day Disneyland resort ticket",
    deal_url: "https://disneyland.disney.go.com/offers-discounts/southern-california-tickets/",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5104528.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580110/5104528_dya7dr.jpg",
    cloud_public_id: "5104528_dya7dr"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Entertainment",
    title: "Monopoly Here & Now Board Game",
    price: 5,
    vendor: "ToysRUs.com",
    description: "Monopoly Here & Now boardgame",
    deal_url: "http://www.toysrus.com/product/index.jsp?productId=64630126&iradidTRU=221294&camp=aff:TRU:10451:Slickdeals+LLC&irpidTRU=10451&irgwc=1",
    image_url: "https://static.slickdealscdn.com/attachment/1/6/7/9/8/1/2/5123576.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580172/5123576_rde0eg.jpg",
    cloud_public_id: "5123576_rde0eg"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Entertainment",
    title: "Target floor gaming rocking chair",
    price: 59.99,
    vendor: "Target",
    description: "Floor gaming rocking chair",
    deal_url: "http://www.target.com/p/floor-rocker-gaming-chair-opp-2-0-wired/-/A-51227489?clkid=460020f5N75d8b1273dbe3ee3e6a35f90&lnm=79373&afid=Slickdeals+LLC&ref=tgt_adv_xasd0002",
    image_url: "https://static.slickdealscdn.com/attachment/2/7/1/9/4/4/5088240.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580287/5088240_rzlhfr.jpg",
    cloud_public_id: "5088240_rzlhfr"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Entertainment",
    title: "BX Wireless 2in1 Bluetooth Handheld KTV Karaoke Microphone Mic",
    price: 28.99,
    vendor: "Amazon",
    description: "Wireless Bluetooth KTV Karaoke Microphone Mic",
    deal_url: "https://www.amazon.com/Wireless-Bluetooth-Handheld-Microphone-Smartphone/dp/B01NCUNPI1/ref=sr_1_4?tag=slickdeals&ascsubtag=5b363d34dddc11e6b210f603698a9c4d0INT&m=A28FCWHHHTHIZD&s=merchant-items&ie=UTF8&qid=1484699488&sr=1-4",
    image_url: "https://slickdeals.net/forums/attachment.php?attachmentid=5127560&d=1484699666",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580425/attachment_hbb375.jpg",
    cloud_public_id: "attachment_hbb375"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Grocery",
    title: "Pepperidge Farm Goldfish Crackers Bold Mix Variety Pack",
    price: 8.48,
    vendor: "Amazon",
    description: "Goldfish crackers",
    deal_url: "https://www.amazon.com/Pepperidge-Farm-Goldfish-Variety-Pack/dp/B01GQ5GQHS/ref=sr_1_cc_5_a_it?m=ATVPDKIKX0DER&s=aps&srs=2231352011&ie=UTF8&qid=1486580557&sr=8-5-catcorr&keywords=goldfish%2Bcrackers&th=1",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5127424.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580660/5127424_y7xehw.jpg",
    cloud_public_id: "5127424_y7xehw"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Grocery",
    title: "Prime Members: 72-Count K-Cups (Variety Pack)",
    price: 58.99,
    vendor: "Amazon",
    description: "K-cups",
    deal_url: "https://www.amazon.com/Keurig-Single-Serve-K-Cup-Variety-Count/dp/B00ZOE5REQ?tag=slicinc-20&ascsubtag=22fd9e6eddda11e6a44d3ea98204674e0INT&th=1",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5126212.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580720/5126212_jvqnao.jpg",
    cloud_public_id: "5126212_jvqnao"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Grocery",
    title: "Prime Members: 12-Pack 11.1oz. Vita Coco 100% Pure Coconut Water",
    price: 9.99,
    vendor: "Amazon",
    description: "Coconut water",
    deal_url: "https://www.amazon.com/gp/product/B000LL0R8I?tag=slicinc-20&ascsubtag=42c96188ddda11e6b9d216990ffcf4080INT&th=1",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5123728.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580816/5123728_k3lvcb.jpg",
    cloud_public_id: "5123728_k3lvcb"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Grocery",
    title: "3-Ct 100oz Tide Liquid Laundry Detergents + $10 Target Gift Card",
    price: 31.32,
    vendor: "Target",
    description: "Laundry detergent",
    deal_url: "http://www.target.com/s?clkid=44830f31N2f0400916311ed3fe0a31da6&lnm=79373&afid=Slickdeals+LLC&ref=tgt_adv_xasd0002&Nao=0&facetedValue=55e6uZ5tdv0Z5zktxZ5zl7w&sortBy=PriceLow&og=tide%20100%20oz&searchTerm=tide%20100%20oz&clkid=460020f5N75d8b1273dbe3ee3e6a35f90&lnm=79373&afid=Slickdeals+LLC&ref=tgt_adv_xasd0002",
    image_url: "https://static.slickdealscdn.com/attachment/2/5/1/6/8/8/6/5119580.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580885/5119580_wkcqzr.jpg",
    cloud_public_id: "5119580_wkcqzr"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Grocery",
    title: "12-Count 1.4oz Kind Bars (Fruit & Nut Delight)",
    price: 14.79,
    vendor: "Amazon",
    description: "Granola bars",
    deal_url: "https://www.amazon.com/KIND-Fruit-Delight-Gluten-Ounce/dp/B0034EDLS2?tag=slicinc-20&ascsubtag=8cb48fcaddda11e6a3e23acabb89a0070INT",
    image_url: "https://static.slickdealscdn.com/attachment/1/8/6/7/1/1/4/5117588.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486580961/5117588_fbcqmj.jpg",
    cloud_public_id: "5117588_fbcqmj"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Health & Beauty",
    title: "6-Pack NYX Cosmetics Glam Shadow Sticks (Emerald or Topaz)",
    price: 13.99,
    vendor: "Amazon",
    description: "6-pack NYX cosmetics glam shadow sticks in emerald or topaz",
    deal_url: "https://www.amazon.com/gp/product/B01523Q6U2/ref=ox_sc_act_title_1?tag=slicinc-20&ascsubtag=173266aeddcc11e69111f2c25c54a6070INT&ie=UTF8&psc=1&smid=A22SFJV6JAGG1S",
    image_url: "https://static.slickdealscdn.com/attachment/1/6/7/9/8/1/2/5129832.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581132/5129832_pataym.jpg",
    cloud_public_id: "5129832_pataym"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Health & Beauty",
    title: "11-lbs Impact Whey Protein (various flavors)",
    price: 49.49,
    vendor: "MyProtein",
    description: "Various flavors of 11-lbs impact whey protein",
    deal_url: "http://us.myprotein.com/sports-nutrition/impact-whey-protein/10852500.html?affil=awin&awc=5679_1484706989_0940acd3cf28b1279adcaf894da82a49&utm_source=AWin-166580&utm_medium=affiliate&utm_campaign=AffiliateWin&affil=awin&awc=5679_1484778149_9bb6b70a89a51043cba144a785a89743",
    image_url: "https://static.slickdealscdn.com/attachment/2/8/9/1/1/5128544.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581178/5128544_e0b5rs.png",
    cloud_public_id: "5128544_e0b5rs"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Movies",
    title: "Blu-rays: Salt: Deluxe Unrated Edition or Glengarry Glen Ross",
    price: 4,
    vendor: "Amazon",
    description: "Blu-ray DVDs",
    deal_url: "https://www.amazon.com/gp/product/B0021L8V0W/ref=ox_sc_act_title_2?tag=slicinc-20&ascsubtag=0e20ba66ddd111e69c237e5cd90b33c20INT&ie=UTF8&psc=1&smid=ATVPDKIKX0DER",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5123428.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581282/5123428_towozh.jpg",
    cloud_public_id: "5123428_towozh"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Movies",
    title: "Blu-rays: Casper, Olympus Has Fallen, Ender's Game & More",
    price: 4,
    vendor: "Amazon",
    description: "Blu-rays",
    deal_url: "https://www.amazon.com/gp/product/B00KW3A6E0/ref=ox_sc_act_title_1?tag=slicinc-20&ascsubtag=2ab2f856ddd111e6bd874e2cdd8a711b0INT&ie=UTF8&psc=1&smid=ATVPDKIKX0DER",
    image_url: "https://static.slickdealscdn.com/attachment/2/5/1/6/8/8/6/5122788.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581336/5122788_jurfkd.jpg",
    cloud_public_id: "5122788_jurfkd"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Movies",
    title: "Bunyan & Babe (Digital HD Movie)",
    price: 0,
    vendor: "Play.Google.com",
    description: "Digital HD Movie",
    deal_url: "https://play.google.com/store/movies/details/Bunyan_Babe?id=qw9U5CS6ZkY",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5108516.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581402/5108516_wlmope.jpg",
    cloud_public_id: "5108516_wlmope"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Movies",
    title: "The Iron Giant: Signature Edition (Blu-ray)",
    price: 8.99,
    vendor: "Amazon",
    description: "Blu-ray",
    deal_url: "https://www.amazon.com/The-Iron-Giant-Blu-ray/dp/B01DJVT53O?tag=slicinc-20&ascsubtag=79f60844ddd711e6b0d236f61dc8940f0INT",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5126740.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581454/5126740_tllf0g.jpg",
    cloud_public_id: "5126740_tllf0g"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Office & School Supplies",
    title: "Canon PIXMA MG2922 Wireless All-In-One Printer",
    price: 24.99,
    vendor: "Best Buy",
    description: "Wireless all-in-one printer",
    deal_url: "http://www.bestbuy.com/site/canon-pixma-mg2922-wireless-all-in-one-printer-blue/5680700.p?loc=0&ref=8575135&acampID=bbd1da22ddd711e680fecab226cfc5390INT",
    image_url: "https://static.slickdealscdn.com/attachment/2/6/8/5/2/2/5129216.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581830/5129216_b8utja.jpg",
    cloud_public_id: "5129216_b8utja"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Office & School Supplies",
    title: "BIC Velocity Ballpoint Bold Point,1.6 mm Retractable Pen (Pack of 12)",
    price: 6.82,
    vendor: "Amazon",
    description: "Pens",
    deal_url: "https://www.amazon.com/BIC-Velocity-Ballpoint-Retractable-BICVLGB11BK/dp/B004F9QBDC/ref=gbps_img_s-3_bb19_5c8f3fcf?tag=slickdeals&ascsubtag=f20e9800dddc11e68e25c21f641379700INT&smid=ATVPDKIKX0DER&pf_rd_p=41fd713f-6bfe-4299-a021-d2b94872bb19&pf_rd_s=slot-3&pf_rd_t=701&pf_rd_i=gb_main&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=QRKZQ8QKHY31HFDYPXWK",
    image_url: "https://static.slickdealscdn.com/attachment/9/7/3/4/6/0/4/50x50/5124616.thumb",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486581904/5124616_ubuoct.jpg",
    cloud_public_id: "5124616_ubuoct"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Other",
    title: "Sylvania 60W Equivalent Dimmable Soft White A19 Light Bulb",
    price: 14.98,
    vendor: "Lowes.com",
    description: "60W equivalent dimmable light bulb",
    deal_url: "https://www.lowes.com/pd/SYLVANIA-60-W-Equivalent-Dimmable-Soft-White-A19-LED-Light-Fixture-Light-Bulb/999910805?AID=10926682&PID=4485850&SID=2060d754ddd811e6b99b52668cf65bc40INT&cm_mmc=AFF_CJ-_-4485850-_-1122587-_-10926682",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5128720.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582316/5128720_o3iwox.jpg",
    cloud_public_id: "5128720_o3iwox"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Other",
    title: "Oakley Kitchen Sink Backpack (Black)",
    price: 225,
    vendor: "Oakley.com",
    description: "Backpack",
    deal_url: "http://www.oakley.com/en/mens/bags-accessories/bags-backpacks/sink-series/kitchen-sink-backpack/product/92060A/?cm_mmc=CJ-_-AFFILIATE-_-4485850-_-10477753",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5128452.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582389/5128452_ulk9rn.jpg",
    cloud_public_id: "5128452_ulk9rn"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Other",
    title: "Kershaw 2-Piece Knife Set",
    price: 21.28,
    vendor: "Walmart",
    description: "Knife set",
    deal_url: "https://www.walmart.com/ip/Kershaw-2-Piece-Knife-Set/54320555?u1=6d179cb8ddd811e6b4f42a3f7d50aad00INT&oid=289955.1&wmlspartner=lw9MynSeamY&sourceid=16635585643631886234&affillinktype=10&veh=aff",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5126976.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582441/5126976_d9ywda.png",
    cloud_public_id: "5126976_d9ywda"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Restaurants",
    title: "Papa John's w/ Visa Checkout: XL 3-Topping Pizza",
    price: 10,
    vendor: "PapaJohns.com",
    description: "Extra large 3-topping pizza",
    deal_url: "https://www.papajohns.com/",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5128496.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582480/5128496_omuktm.png",
    cloud_public_id: "5128496_omuktm"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Restaurants",
    title: "Chili's Restaurant: Free $10 Bonus Card With $50 Gift Card Purchase",
    price: 50,
    vendor: "Chilis",
    description: "Gift card and bonus card",
    deal_url: "https://merchant.wgiftcard.com/responsive/landing_responsive/landing/chilis_resp/1",
    image_url: "https://static.slickdealscdn.com/attachment/9/0/3/8/3/9/1/50x50/5044648.thumb",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582568/5044648_e3bnjz.jpg",
    cloud_public_id: "5044648_e3bnjz"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Sporting Goods",
    title: "Fitbit Charge 2 Replacement Milanese Metal Bracelet & More",
    price: 14.90,
    vendor: "Amazon",
    description: "Fitbit Charge 2 replacement Milanese metal bracelet",
    deal_url: "https://www.amazon.com/gp/product/B01M0LTKDU/ref=ox_sc_act_title_1?tag=slicinc-20&ascsubtag=51a894feddd911e69e3ee2ba612302720INT&ie=UTF8&psc=1&smid=A3VPFLJOMLJX0U",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5127848.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582656/5127848_gbc5gp.jpg",
    cloud_public_id: "5127848_gbc5gp"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Sporting Goods",
    title: "Tone Fitness 55cm or 65cm Stability Ball",
    price: 5,
    vendor: "Walmart",
    description: "Stability ball",
    deal_url: "https://www.walmart.com/ip/Tone-Fitness-Anti-burst-Stability-Ball/14894439?u1=b80a3130ddd911e680018ed592f9e17f0INT&oid=289955.1&wmlspartner=UbUihDh2awY&sourceid=42697347983161713484&affillinktype=10&veh=aff#about-item%253Fsdsrc%253Dstaff",
    image_url: "https://static.slickdealscdn.com/attachment/2/8/9/1/1/5114404.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582701/5114404_cz3l2h.png",
    cloud_public_id: "5114404_cz3l2h"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Sporting Goods",
    title: "Columbia Men's Suede Bugaboot Omni-Heat Pac Boots",
    price: 65.99,
    vendor: "Cabelas.com",
    description: "Pac boots",
    deal_url: "http://www.cabelas.com/product/COLUMBIA-SUEDE-BUGABOOT-PAC-BOOT/2071047.uts?WT.mc_id=ir10451&utm_source=Slickdeals+LLC&WT.tsrc=AFF&utm_medium=AFF&rid=10&irgwc=1",
    image_url: "https://static.slickdealscdn.com/attachment/6/3/5/4/7/1/5114284.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582753/5114284_izvan3.png",
    cloud_public_id: "5114284_izvan3"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Sporting Goods",
    title: "Resistance Band Set with Door Anchor, Ankle Strap, and Carrying Case",
    price: 20.85,
    vendor: "Amazon",
    description: "Resistance band set",
    deal_url: "https://www.amazon.com/gp/product/7245456313?tag=slicinc-20&ascsubtag=792a9428ddde11e6bd6022e42f88d9240INT",
    image_url: "https://static.slickdealscdn.com/attachment/3/8/0/3/8/5/8/5120040.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582806/5120040_w8uiuv.jpg",
    cloud_public_id: "5120040_w8uiuv"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Sporting Goods",
    title: "Gold's Gym 40-lb Vinyl Dumbbell Set",
    price: 14.92,
    vendor: "Walmart",
    description: "Dumbbell Set",
    deal_url: "https://www.walmart.com/ip/Gold-s-Gym-40-Pound-Vinyl-Dumbbell-Set/21672513?u1=d105827addde11e6ad8a8ae32bd9efac0INT&oid=289955.1&wmlspartner=lw9MynSeamY&sourceid=14686404971305252852&affillinktype=10&veh=aff",
    image_url: "https://static.slickdealscdn.com/attachment/4/7/6/0/3/5097384.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582863/5097384_nmajwy.jpg",
    cloud_public_id: "5097384_nmajwy"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Tech & Electronics",
    title: "16GB BLU Life Max 4G LTE GSM Unlocked Smartphone (Dark Blue)",
    price: 109.99,
    vendor: "BestBuy.com",
    description: "16GB BLU Life Max 4G LTE GSM Unlocked Smartphone (Dark Blue)",
    deal_url: "http://www.bestbuy.com/site/blu-life-max-4g-with-16gb-memory-cell-phone-unlocked-dark-blue/5713509.p?loc=0&ref=8575135&acampID=f48422ccddbd11e6beb50e8fadf098540INT",
    image_url: "https://slickdeals.net/attachment/1/2/2/6/9/8/5/5122152.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582908/5122152_sdojgi.jpg",
    cloud_public_id: "5122152_sdojgi"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Tech & Electronics",
    title: "70\" Samsung UN70KU6300 4K UHD HDR LED HDTV",
    price: 1699.97,
    vendor: "PC Richard",
    description: "70\" Samsung UN70KU6300 4K UHD HDR LED HDTV",
    deal_url: "http://www.pcrichard.com/Samsung/Samsung-70inch-Class-Slim-4K-HDR-Ultra-HD-LED-Smart-TV/UN70KU6300.pcrp?sdtid=9685520&utm_source=Slickdeals+LLC&utm_medium=Affiliate&utm_campaign=PC+Richard+%26+Son+Product+Catalog",
    image_url: "https://static.slickdealscdn.com/attachment/2/8/9/1/1/5129984.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486582961/5129984_spnh81.jpg",
    cloud_public_id: "5129984_spnh81"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Tech & Electronics",
    title: "Sabrent Wall Charger: QC 3.0 5-Port $17, QC 3.0 3-Port $13, 2-Port",
    price: 7.99,
    vendor: "Amazon",
    description: "Sabret Wall Chargers",
    deal_url: "https://www.amazon.com/dp/B01MS6K7QJ/ref=&amp;sdsrc=staff&amp;keywords=Wall+Charger?tag=slickdeals09-20&ascsubtag=7676d66cddbe11e6a3c34a57ab1fea030INT",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91f5zI%2BZLBL._SL1500_.jpg",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583073/91f5zI_2BZLBL._SL1500__rshqst.jpg",
    cloud_public_id: "91f5zI_2BZLBL._SL1500__rshqst"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Tech & Electronics",
    title: "1TB WD My Passport Ultra USB 3.0/2.0 Portable Hard Drive",
    price: 54.99,
    vendor: "Best Buy",
    description: "1TB WD My Passport Ultra USB 3.0/2.0 Portable Hard Drive",
    deal_url: "http://www.bestbuy.com/site/wd-my-passport-ultra-1tb-external-usb-3-0-2-0-portable-hard-drive-classic-black/7869174.p?loc=0&ref=8575135&acampID=a1d8164addbe11e69f70821890c56faa0INT",
    image_url: "https://static.slickdealscdn.com/attachment/1/0/6/6/9/4/5128696.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583137/5128696_p5kz0w.jpg",
    cloud_public_id: "5128696_p5kz0w"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Tech & Electronics",
    title: "BenQ TH670 1080p Home Theater DLP Projector (Refurb)",
    price: 467,
    vendor: "BenQDirect.com",
    description: "Refurbished BenQ TH670 1080p Home Theater DLP Projector",
    deal_url: "https://www.benqdirect.com/th670-refurb.html?PID=4485850&utm_source=cj&utm_medium=CPA&utm_campaign=cj",
    image_url: "https://static.slickdealscdn.com/attachment/2/8/9/1/1/5128076.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583190/5128076_ugydgb.jpg",
    cloud_public_id: "5128076_ugydgb"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Travel",
    title: "Roundtrip Flight: From Chicago to Hong Kong, China",
    price: 506,
    vendor: "Priceline.com",
    description: "Roundtrip Flights to Hong Kong, China (HKG) from Chicago, Illinois (ORD) via United Airlines and Cathay Pacific Airways",
    deal_url: "https://www.priceline.com/landing/flights.htm?lrdr=secure&refid=CO4485850&refclickID=10592070SID7faea012ddbd11e68c1cde7f6e2bac0d0INT",
    image_url: "https://slickdeals.net/attachment/1/7/8/1/9/5122868.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583338/5122868_qfmiuq.jpg",
    cloud_public_id: "5122868_qfmiuq"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Travel",
    title: "Roundtrip Flight: From Los Angeles to Taipei Taiwan",
    price: 529,
    vendor: "Priceline.com",
    description: "Roundtrip flight",
    deal_url: "https://www.priceline.com/landing/flights.htm?lrdr=secure&refid=CO4485850&refclickID=10592070SID8f2d0192dddf11e6a916668361f36bc80INT",
    image_url: "https://static.slickdealscdn.com/attachment/1/6/7/9/8/1/2/5092924.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583457/5092924_bdzlgr.jpg",
    cloud_public_id: "5092924_bdzlgr"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Video Games",
    title: "Prime Members: Pokemon Super Mystery Dungeon (Nintendo 3DS)",
    price: 32.98,
    vendor: "Amazon",
    description: "Nintendo 3DS game",
    deal_url: "https://www.amazon.com/Pokemon-Super-Mystery-Dungeon-Nintendo-Standard/dp/B00YC7DZP4?tag=slicinc-20&ascsubtag=12b91a1addd011e6b462d24f183cdfbd0INT",
    image_url: "https://static.slickdealscdn.com/attachment/8/6/6/3/0/5128928.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583574/5128928_evb1sp.jpg",
    cloud_public_id: "5128928_evb1sp"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Video Games",
    title: "Watch Dogs 2 (PS4 Digital Download): 3-Hour Full Game Trial",
    price: 0,
    vendor: "Playstation Store",
    description: "Playstation 4 digital download",
    deal_url: "https://store.playstation.com/#!/en-us/games/watch-dogs-2/cid=UP0001-CUSA04459_00-WD2FULLGAME00000",
    image_url: "https://static.slickdealscdn.com/attachment/3/5/9/4/0/2/8/5127172.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583633/5127172_muwrcn.jpg",
    cloud_public_id: "5127172_muwrcn"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Video Games",
    title: "Back to the Future 30th Anniversary Ed. (Xbox One Digital Download)",
    price: 19.99,
    vendor: "Microsoft Store",
    description: "Xbox One digital download",
    deal_url: "https://www.microsoft.com/en-us/store/p/back-to-the-future-the-game-30th-anniversary-edition/bz55ndwhc7d4?tduid=(2962246cba0a54e10df162e31f0c5b3a)(256380)(2459594)(TnL5HPStwNw-6HwWy8wfE_fYsx6hob9UMg)()",
    image_url: "https://static.slickdealscdn.com/attachment/3/5/9/4/0/2/8/5124012.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583682/5124012_ix8hkx.jpg",
    cloud_public_id: "5124012_ix8hkx"
  },
  {
    author_id: (1..102).to_a.sample,
    category: "Video Games",
    title: "Metal Gear Solid HD Collection (PS3)",
    price: 15.50,
    vendor: "Amazon",
    description: "Playstation 3 game",
    deal_url: "https://www.amazon.com/gp/product/B0050SX97I/ref=ox_sc_act_title_1?tag=slicinc-20&ascsubtag=8982ac10ddd011e6a95c76ec1d0e2af00INT&ie=UTF8&smid=A348IB18T4L7NM&th=1",
    image_url: "https://static.slickdealscdn.com/attachment/1/6/7/9/8/1/2/5125840.attach",
    cloud_url: "https://res.cloudinary.com/him9jvagp/image/upload/v1486583732/5125840_jhepln.jpg",
    cloud_public_id: "5125840_jhepln"
  },
]

Deal.create(deals)


thumbs = []
id_pairs = []
(50 * 15).times do
  thumb = random_thumb
  id_pair = [thumb[:user_id], thumb[:deal_id]]
  unless id_pairs.include?(id_pair)
    id_pairs << id_pair
    thumbs << thumb
  end
end

Thumb.create(thumbs)
