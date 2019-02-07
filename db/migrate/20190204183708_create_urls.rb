class CreateUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :urls do |t|
    	t.string :url, null: false, unique: true
    	t.boolean :bad_url
    	t.belongs_to :retailer, null: false
    end
  end
end
