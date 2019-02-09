class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
    	t.belongs_to :user
    	t.belongs_to :static
    	t.boolean :reviewed, default: false
    	t.timestamps
    end
  end
end
