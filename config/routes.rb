Rails.application.routes.draw do

  root to: 'app/home#show'

  namespace :admin do

    scope :auth do
      get 'github/callback', to: 'sessions#create'
    end

    get    '/',       to: redirect('/admin/events')
    get    '/login',  to: 'sessions#new'
    delete '/logout', to: 'sessions#destroy'

    resources :events do
      resources :talks, only: :create
    end

    resources :locations
    resources :speakers
    resources :talks
    resources :venues
    resources :sponsors
  end

  scope module: :app do
  end

end
