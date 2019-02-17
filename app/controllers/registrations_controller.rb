class RegistrationsController < Devise::RegistrationsController
  def create
    super
  	matches = Match.distinct.pluck(:static_id).shuffle.pop(50)
  	matches.each do |mat|
  		Project.create!(static_id: mat, user_id: current_user.id)
  	end
  end

end 