# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_07_171439) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dynamics", force: :cascade do |t|
    t.bigint "retailer_id", null: false
    t.bigint "static_id", null: false
    t.float "price"
    t.boolean "stock_status"
    t.string "seller"
    t.string "shipped_by"
    t.float "ship_price"
    t.string "answered_questions"
    t.string "rating"
    t.integer "review_count"
    t.string "stock_message"
    t.string "zipcode"
    t.datetime "crawl_time"
    t.index ["retailer_id"], name: "index_dynamics_on_retailer_id"
    t.index ["static_id"], name: "index_dynamics_on_static_id"
  end

  create_table "matches", force: :cascade do |t|
    t.bigint "static_id", null: false
    t.bigint "retailer_id", null: false
    t.bigint "users_id"
    t.integer "suggested_static_id"
    t.boolean "approved"
    t.datetime "suggested_on"
    t.float "manufacturer_score"
    t.float "part_number_score"
    t.float "product_name_score"
    t.integer "price_score"
    t.float "average_score"
    t.text "reviewer_comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["retailer_id"], name: "index_matches_on_retailer_id"
    t.index ["static_id"], name: "index_matches_on_static_id"
    t.index ["users_id"], name: "index_matches_on_users_id"
  end

  create_table "nomatches", force: :cascade do |t|
    t.bigint "static_id"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["static_id"], name: "index_nomatches_on_static_id"
  end

  create_table "projects", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "static_id"
    t.boolean "reviewed", default: false
    t.integer "priority"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["static_id"], name: "index_projects_on_static_id"
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "retailers", force: :cascade do |t|
    t.string "name", null: false
    t.string "logo"
  end

  create_table "statics", force: :cascade do |t|
    t.bigint "retailer_id", null: false
    t.bigint "url_id", null: false
    t.string "product_name"
    t.string "breadcrumb"
    t.string "option_name"
    t.string "child_identifier"
    t.string "parent_identifier"
    t.string "brand"
    t.string "part_number"
    t.integer "image_count"
    t.text "description"
    t.string "main_image"
    t.string "shipping_weight"
    t.string "shipping_weight_unit"
    t.string "best_seller_1"
    t.string "best_seller_2"
    t.string "best_seller_3"
    t.string "first_available"
    t.integer "item_weight"
    t.string "item_weight_unit"
    t.string "dimensions"
    t.string "dimensions_unit"
    t.boolean "aplus"
    t.string "last_crawl"
    t.index ["retailer_id"], name: "index_statics_on_retailer_id"
    t.index ["url_id"], name: "index_statics_on_url_id"
  end

  create_table "urls", force: :cascade do |t|
    t.string "url", null: false
    t.boolean "bad_url"
    t.bigint "retailer_id", null: false
    t.index ["retailer_id"], name: "index_urls_on_retailer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
