class Api::V1::StaticsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	def show
		static = Static.find(params[:id])
		user = current_user
		render json: static
	end
end