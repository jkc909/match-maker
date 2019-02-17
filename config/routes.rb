Rails.application.routes.draw do
  root 'users#index'
  devise_for :users, :controllers => {:registrations => "registrations"}

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index]
  resources :statics, only: [:show, :update]

  namespace :api do
  	namespace :v1 do
  		resources :statics, only: [:show, :update]
  	end
  end
end
