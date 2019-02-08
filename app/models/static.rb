class Static < ApplicationRecord
	belongs_to :retailer
	has_many :dynamics
	has_many :matches 
	has_one :project
	has_one :user, through: :projects
	validates :child_identifier, presence: true
	validates :child_identifier, uniqueness: { scope: :url_id }
end
