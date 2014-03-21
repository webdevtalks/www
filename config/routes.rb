WDT::Application.routes.draw do
  root to: 'home#index'

  resources 'call_for_papers'
end
