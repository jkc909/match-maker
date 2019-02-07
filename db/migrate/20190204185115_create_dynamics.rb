class CreateDynamics < ActiveRecord::Migration[5.2]
  def change
    create_table :dynamics do |t|
    	t.belongs_to :retailer, null: false
    	t.belongs_to :static, null: false
    	t.float :price
    	t.boolean :stock_status
    	t.string :seller
    	t.string :shipped_by
    	t.float :ship_price
    	t.string :answered_questions
    	t.string :rating
    	t.integer :review_count
    	t.string :stock_message
    	t.string :zipcode
    	t.datetime :crawl_time
    end
  end
end
