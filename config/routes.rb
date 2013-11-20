WDT::Application.routes.draw do

  get 'login', to: 'logins#new'

  root to: 'home#index'

  resources 'papers', only: [:create, :new]
end
