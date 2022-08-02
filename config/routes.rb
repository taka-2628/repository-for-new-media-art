Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world' #route for testing

  resources :users, only: [:index]
  resources :projects
  resources :comments, except: [:index, :show]
  resources :genres, only: [:index]
  resources :technologies, only: [:index]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
