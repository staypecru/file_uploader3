Rails.application.routes.draw do
  root "uploads#index"
  resources :uploads, only: [ :index, :create ]
end
