class UsersController < ApplicationController

before_action :authenticate_user!

	def index
		@user = current_user
		projects = @user.projects.includes(:static => :retailer).where("reviewed = false").limit(10).order("priority DESC").pluck(:logo, :product_name, :brand, :main_image, :static_id)
		@prods = []
		projects.each do |p|
			if p[3] == '[!Error: main_image Not Found]'
				p[3] = 'https://www.unesale.com/ProductImages/Large/notfound.png'
			end
			@prods << p
		end

		reviewed = @user.projects.includes(:static => :retailer).where("reviewed = true").limit(10).order("priority DESC").pluck(:logo, :product_name, :brand, :main_image, :static_id)
		@reviewed_prods = []
		reviewed.each do |p|
			if p[3] == '[!Error: main_image Not Found]'
				p[3] = 'https://www.unesale.com/ProductImages/Large/notfound.png'
			end
			@reviewed_prods << p
		end
		
		@logo = 'http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png'
	end
	
end