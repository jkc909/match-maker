class Static < ApplicationRecord
	belongs_to :retailer
	has_many :dynamics
	validates :child_identifier, presence: true
	validates :child_identifier, uniqueness: { scope: :url_id }
end
