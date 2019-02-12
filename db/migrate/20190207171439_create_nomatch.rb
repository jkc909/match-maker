class CreateNomatch < ActiveRecord::Migration[5.2]
  def change
    create_table :nomatches do |t|
    	t.belongs_to :static
    	t.text :comment
    	t.timestamps
    end
  end
end
