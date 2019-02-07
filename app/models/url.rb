class Url < ApplicationRecord
	belongs_to :retailer
	has_many :statics
	validates :url, presence: true, uniqueness: true
end
