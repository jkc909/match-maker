class CreateStatics < ActiveRecord::Migration[5.2]
  def change
    create_table :statics do |t|
    	t.belongs_to :retailer, null: false
    	t.belongs_to :url, null: false
    	t.string :product_name
    	t.string :breadcrumb
    	t.string :option_name
    	t.string :child_identifier
    	t.string :parent_identifier
    	t.string :brand
    	t.string :part_number
    	t.integer :image_count
    	t.text :description
    	t.string :main_image
    	t.string :shipping_weight
    	t.string :shipping_weight_unit
    	t.string :best_seller_1
    	t.string :best_seller_2
    	t.string :best_seller_3
    	t.string :first_available
    	t.integer :item_weight
    	t.string :item_weight_unit
    	t.string :dimensions
    	t.string :dimensions_unit
    	t.boolean :aplus
    	t.string :last_crawl
    end
  end
end
