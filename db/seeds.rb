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
row_id = 1
csv.each do |row|
  puts('----------------------------')
  row = (row.to_hash)
  puts(row)
  dyn_insert = {
  	id: row_id, 
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
  dyn_insert[:crawl_time] = "2018-04-12 13:47:28"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-06-11 11:23:24"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-07-03 18:42:01"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-03-28 10:26:31"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-09-12 16:52:14"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-08-13 13:55:12"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  dyn_insert[:crawl_time] = "2018-08-13 13:55:12"
  gen_crawl = rand(2)
  if gen_crawl == 0
    dyn_insert[:price] = dyn_insert[:price].to_f + ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f
  else
    dyn_insert[:price] = (dyn_insert[:price].to_f - ((rand(10).to_f + 1) / 100) * dyn_insert[:price].to_f).round(2)
  end
  row_id += 1
  dyn_insert[:id] = row_id
  Dynamic.create!(dyn_insert)
  row_id += 1

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


create_proj = Match.select(:static_id).distinct.limit(1000).shuffle.pop(100)


create_proj.each do |p|
  Project.create({user_id: 1, static_id: p["static_id"], priority: rand(2)})
end
