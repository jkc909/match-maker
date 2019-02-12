class Url < ApplicationRecord
	belongs_to :retailer
	belongs_to :static, optional: true
	validates :url, presence: true, uniqueness: true
end
