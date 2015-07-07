WDT::Application.routes.draw do

  root to: 'home#index'

  namespace :admin do

    scope :auth do
      get 'github/callback', to: 'sessions#create'
    end

    get '/',      to: 'dashboard#show'
    get '/login', to: 'sessions#new'

    resources :events
    resources :locations
    resources :speakers, only: :show
    resources :talks
    resources :venues

  end

  resources 'papers', only: [:create, :new]

end
