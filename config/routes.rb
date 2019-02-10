Rails.application.routes.draw do
  root 'users#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show]

  resources :matches, only: [:show, :update]

  resources :statics, only: [:show]


  namespace :api do
  	namespace :v1 do
  		resources :matches, only: [:show, :update]
  		resources :statics, only: [:show]
  		resources :dynamics, only: [:show]
  		resources :urls, only: [:show]
      resources :users, only: [:show]
  	end
  end
end
