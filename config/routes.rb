Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :matches, only: [:show]

  namespace :api do
  	namespace :v1 do
  		resources :matches, only: [:show, :update]
  		resources :statics, only: [:show]
  		resources :dynamics, only: [:show]
  		resources :urls, only: [:show]
  	end
  end
end
