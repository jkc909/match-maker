class StaticSerializer < ActiveModel::Serializer

	attributes :user_projects, :base_prod, :match_prods

	def user_projects
		current_user.projects
	end


	def base_prod
    
		{sta: object, dyn: object.dynamics, url: object.url.url}
	end

  def match_prods
  	matches = object.matches.limit(5).order("average_score DESC")
  	ret = []
  	matches.each do |m|

  		sta_result = ActiveRecord::Base.connection.execute("SELECT * FROM statics where id = #{m["suggested_static_id"]} LIMIT 1")
  		dyn_result = ActiveRecord::Base.connection.execute("SELECT * FROM dynamics where id = #{sta_result[0]["id"]}")
      url_result = ActiveRecord::Base.connection.execute("SELECT url FROM urls where id = #{sta_result[0]["url_id"]}")[0]["url"]

  		mat = {mat: m, sta: sta_result[0], dyn: dyn_result, url: url_result}
  		ret << mat
  	end
  	return ret
  end


end
