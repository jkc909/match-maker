# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


retailers = [
	{id: 1, name: 'Amazon', logo: 'http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png'}, 
	{id: 2, name: 'Sweetwater', logo: 'http://www.seeklogovector.com/wp-content/uploads/2018/09/sweetwater-logo-vector.png'}
]


retailers.each do |retailer|
	Retailer.create!(retailer)
end


csv_text = File.read('./urls_export.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts('----------------------------')
  row = (row.to_hash)
  url_insert = {
  	id: row["urlId"], 
  	url: row["urlUrl"], 
  	retailer_id: row["urlRetId"]}
  puts(url_insert)
  Url.create!(url_insert)
  puts('----------------------------')
end


csv_text = File.read('./statics_export.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts('----------------------------')
  # row = (row.to_hash)
  # puts(row)
  sta_insert = {
  	id: row["staId"], 
  	url_id: row["staUrlId"], 
  	retailer_id: row["staRetId"],
  	product_name: row["staProductName"],
    breadcrumb: row["staBreadcrumb"],
    option_name: row["staOptionName"],
    child_identifier: row["staChildIdentifier"],
    parent_identifier: row["staParentIdentifier"],
    brand: row["staBrand"],
    part_number: row["staPartNumber"],
    image_count: row["staImageCount"],
    description: row["staDescription"],
    main_image: row["staMainImage"],
    shipping_weight: row["staShippingWeight"],
    shipping_weight_unit: row["staShippingWeightUnit"],
    best_seller_1: row["staBestSeller1"],
    best_seller_2: row["staBestSeller2"],
    best_seller_3: row["staBestSeller3"],
    first_available: row["staFirstAvailable"],
    item_weight: row["staItemWeight"],
    item_weight_unit: row["staItemWeightUnit"],
    dimensions: row["staDimensions"],
    dimensions_unit: row["staDimensionsUnit"],
    aplus: row["staAplus"],
    last_crawl: row["staLastCrawl"]
  }
  puts(sta_insert)
  Static.create!(sta_insert)
  puts('----------------------------')
end



csv_text = File.read('./dynamics_export.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts('----------------------------')
  row = (row.to_hash)
  puts(row)
  dyn_insert = {
  	id: row["dynId"], 
  	static_id: row["dynStaId"], 
  	retailer_id: row["dynRetId"],
  	price: row["dynPrice"],
  	stock_status: row["dynStockStatus"],
  	seller: row["dynSeller"],
  	shipped_by: row["dynShippedBy"],
  	ship_price: row["dynShipPrice"],
  	answered_questions: row["dynAnsweredQuestions"],
  	rating: row["dynRating"],
  	review_count: row["dynReviewCount"],
  	stock_message: row["dynStockMessage"],
  	zipcode: row["dynZipCode"],
  	crawl_time:row["dynCrawlTime"]
  }
  puts(dyn_insert)
  Dynamic.create!(dyn_insert)
  puts('----------------------------')
end




csv_text = File.read('./matches_export.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  puts('----------------------------')
  row = (row.to_hash)
  mat_insert = {
  	id: row["matId"],
  	static_id: row["matBaseStaId"],
  	retailer_id: row["matBaseRetId"],
  	suggested_on: row["matSuggestedOn"],
    suggested_static_id: row["matSuggestedStaId"],
  	manufacturer_score: row["matManufacturerScore"],
  	part_number_score: row["matPartNumberScore"],
  	product_name_score: row["matProductNameScore"],
  	price_score: row["matPriceScore"],
  	average_score: row["matAverageScore"]
  }
  puts(mat_insert)
  Match.create!(mat_insert)
  puts('----------------------------')
end


users = [
  { email: "Joe@gmail.com", password: "password" },
  { email: "Louis@gmail.com", password: "password" },
  { email: "Gil@gmail.com", password: "password" },
  { email: "Tony@gmail.com", password: "password" },
  { email: "AmyLynn@gmail.com", password: "password" },
  { email: "Admin@gmail.com", password: "password" },
  { email: "Brianna@gmail.com", password: "password" },
  { email: "Nick@gmail.com", password: "password" },
  { email: "Casi@gmail.com", password: "password" },
  { email: "Admin@alphareviews.com", password: "password" },
]

users.each do |user|
  User.create!(user)
end


projects = [
  {user_id: 1, static_id: 351, priority: 0},
  {user_id: 1, static_id: 2, priority: 1},
  {user_id: 1, static_id: 271, priority: 0},
  {user_id: 1, static_id: 120, priority: 0},
  {user_id: 1, static_id: 61, priority: 1},
  {user_id: 1, static_id: 19, priority: 0},
  {user_id: 1, static_id: 43, priority: 1}
]

projects.each do |project|
  Project.create!(project)
end