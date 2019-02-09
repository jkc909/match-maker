class UserSerializer < ActiveModel::Serializer

  attributes :id, :user_projects, :base_prod, :match_prods

  binding.pry

  @static = Static.find(current_user.projects[0]["static_id"])

	def user_projects
		user.projects.where("reviewed = false")
	end

	def base_prod
		{sta: @static, dyn: static.dynamics}
	end

  def match_prods
  	matches = @static.matches.limit(5).order("average_score DESC")
  	ret = []
  	matches.each do |m|
  		sta_result = ActiveRecord::Base.connection.execute("SELECT * FROM statics where id = #{m["suggested_static_id"]} LIMIT 1")
  		dyn_result = ActiveRecord::Base.connection.execute("SELECT * FROM dynamics where id = #{sta_result[0]["id"]} LIMIT 1")
  		mat = {mat: m, sta: sta_result[0], dyn: dyn_result[0]}
  		ret << mat
  	end
  	return ret
  end

end
