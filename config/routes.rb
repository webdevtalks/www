WDT::Application.routes.draw do
  # In order to activate our SendGrid account, they need to see the "sendgrid"
  # word somewhere in our site.
  # TODO: Let's remove this one later.
  match 'sendgrid/validate' => 'sendgrid#validate', via: :get

  root to: 'home#index'
end
