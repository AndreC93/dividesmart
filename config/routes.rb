Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :index]
    resources :friends, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :bills, only: [:create, :destroy, :show, :index, :update] do
      resources :payments, only: [:create, :destroy]
    end
  end

end
