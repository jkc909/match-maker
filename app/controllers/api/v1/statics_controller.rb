class Api::V1::StaticsController < ApplicationController
	protect_from_forgery unless: -> { request.format.json? }
	def show
		static = Static.find(params[:id])
		user = current_user
		render json: static
	end

  def update
    match_to_update = match_params
    begin
    	up_proj = Project.where("static_id = #{match_to_update["static_id"]}").update(reviewed: true)
    rescue
    	render status: 406, json: up_proj
    end
    if match_to_update["status"]
      begin
      	nomatch = Nomatch.new(static_id: match_to_update["static_id"], comment: match_to_update["comment"])
      	nomatch.save
      rescue
      	render status: 406, json: nomatch
      end
    else
      if up_match = Match.update(match_to_update[:match_id], reviewer_comment: match_to_update["comment"], approved: true, users_id: current_user.id)
      else
        render status: 406, json: up_match
      end
    end

	begin
		next_sta = current_user.projects.where("reviewed = false").order("priority DESC").first["static_id"]
		static = Static.find(next_sta)
		user = current_user
		render json: static, serializer: StaticSerializer
	rescue
		render status: 200, json: {static: "none"}
	end
	

 end

  private
  def match_params
    params.permit(:comment, :status, :id, :match_id, :approved, :static_id)
  end

end