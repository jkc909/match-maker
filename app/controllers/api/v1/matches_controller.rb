class Api::V1::MatchesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

    def show
      match_to_review = Match.find(params[:id])

      left_product = match_to_review.static

      left_product_dynamic = left_product.dynamics

      right_product = match_to_review.suggested_static_id

      right_product_static = ActiveRecord::Base.connection.execute("SELECT * FROM statics where id = #{right_product} LIMIT 1")

      right_product_dynamic = ActiveRecord::Base.connection.execute("SELECT * FROM dynamics where static_id = #{right_product}")

      user = current_user

      # render json: match_to_review, include: { match_to_review: {} }

      render json: { 
      	match: match_to_review, 
      	left_product_static: left_product, 
      	left_product_dynamic: left_product_dynamic, 
      	right_product_static: right_product_static[0],
      	right_product_dynamic: right_product_dynamic 
      }
    end


    def update
      @next_proj = current_user.projects.where("reviewed = false").order("priority DESC").second
      match_to_update = match_params
      if match_to_update["status"]
        up_match = Match.find(match_to_update["id"])
        nomatch = Nomatch.new(static_id: up_match["static_id"], comment: match_to_update["comment"])
        if nomatch.save
          up_proj = up_match.static.project.update(reviewed: true)
          render status: 200, json: @next_proj
        else
          render status: 406, json: up_proj
        end

      else
        if up_match = Match.update(match_to_update[:id], reviewer_comment: match_to_update["comment"], approved: true, users_id: current_user.id)
        else
          render status: 406, json: up_match
        end

        if up_proj = Match.find(match_to_update[:id]).static.project.update(reviewed: true) 
          
          render status: 200, json: @next_proj
        else
          render status: 406, json: up_proj
        end
      end
    end

  private
  def match_params
    params.permit(:comment, :status, :id)
  end
end
