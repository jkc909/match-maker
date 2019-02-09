class Api::V1::UsersController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

  def index
  end

  def show
		user = User.find(params["id"])
		render json: user, each_serializer: UserSerializer
  end
 end