Rails.application.routes.draw do
  resources :users, only: [:create, :index]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :products 
  resources :supports

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
