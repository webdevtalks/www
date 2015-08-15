WDT::Application.routes.draw do

  root to: 'home#index'

  namespace :admin do

    scope :auth do
      get 'github/callback', to: 'sessions#create'
    end

    get    '/',       to: redirect('/admin/events')
    get    '/login',  to: 'sessions#new'
    delete '/logout', to: 'sessions#destroy'

    resources :events
    resources :locations
    #resources :speakers
    resources :talks
    resources :venues


  end

  resources 'papers', only: [:create, :new]

end
