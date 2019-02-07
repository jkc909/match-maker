class Retailer < ApplicationRecord
	has_many :urls
	has_many :statics
	has_many :dynamics
	has_many :matches
	validates :name, presence: true, uniqueness: true
end
