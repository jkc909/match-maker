class Api::V1::UsersController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

  def show
  	project = current_user.projects.where("reviewed = false").order("priority DESC").first
		render json: project
  end
 end