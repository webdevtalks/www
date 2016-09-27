Rails.application.routes.draw do

  root to: 'app/home#show'

  namespace :admin do

    scope :auth do
      get 'github/callback', to: 'sessions#create'

      unless Rails.env.production?
        post 'developer/callback', to: 'sessions#create'
      end
    end

    get    '/',       to: redirect('/admin/events')
    get    '/login',  to: 'sessions#new'
    delete '/logout', to: 'sessions#destroy'

    resources :events do
      resources :talks, only: :create
    end

    resources :locations
    resources :speakers, except: %i(create new)
    resources :sponsors
    resources :talks
    resources :venues

  end

  scope module: :app do
  end

end
