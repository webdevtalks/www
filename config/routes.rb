WDT::Application.routes.draw do
  root to: 'home#index'

  resources 'papers', only: [:create, :new]
end
