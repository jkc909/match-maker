class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
    	t.belongs_to :static, null: false
        t.belongs_to :retailer, null: false
    	t.belongs_to :users
        t.integer :suggested_static_id
    	t.boolean :approved
    	t.datetime :approved_on
    	t.datetime :suggested_on
    	t.float :manufacturer_score
    	t.float :part_number_score
    	t.float :product_name_score
    	t.integer :price_score
    	t.float :average_score
    	t.text :reviewer_comment
    end
  end
end
