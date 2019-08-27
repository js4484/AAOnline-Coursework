Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :index, :create, :update, :destroy]
  resources :artworks, only: [:show, :index, :create, :update, :destroy]
  resources :artwork_shares, only: [:create, :destroy]
  resources :comments, only: [:create, :destroy, :index]
  resources :likes, only: [:create, :destroy]

  resources :users do
    resources :artworks, only: [:index]
  end

  resources :users do
    resources :comments, only: [:index]
    resources :likes, only: [:index]
  end

  resources :comments do
    resources :likes, only: [:index]
  end

  resources :artworks do
    resources :comments, only: [:index]
    resources :likes, only: [:index]
  end
  # likes/
  # artworks/1/likes
  #   return users who like
  # comments/1/likes
  #   return users who like
  # users/1/likes
  #   liked comments and artworks

  # get 'users/:id', to: 'users#show', as: 'user'
  
  # get 'users', to: 'users#index', as: 'users'

  # post 'users', to: 'users#create'

  # get 'users/new', to: 'users#new', as: 'new_user'

  # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'

  # patch 'users/:id', to: 'users#update'

  # put 'users/:id', to: 'users#update'

  # delete 'users/:id', to: 'users#destroy'
end
