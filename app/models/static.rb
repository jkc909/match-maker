class Static < ApplicationRecord
	belongs_to :retailer
	has_many :dynamics
	has_many :matches 
	has_one :nomatch
	has_one :project
	belongs_to :url
	has_one :user, through: :project
	validates :child_identifier, presence: true
	validates :child_identifier, uniqueness: { scope: :url_id }
end
