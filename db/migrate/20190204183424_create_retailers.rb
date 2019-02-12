class CreateRetailers < ActiveRecord::Migration[5.2]
  def change
    create_table :retailers do |t|
    	t.string :name, null: false, unique: true
    	t.string :logo
    end
  end
end
