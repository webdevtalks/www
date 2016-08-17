WDT::Application.config.middleware.use OmniAuth::Builder do

  configure do |config|
    config.path_prefix = '/admin/auth'
  end

  options = {
    scope: 'user:email,read:org'
  }

  if Rails.env.review?
    options[:redirect_uri] = "#{Rails.application.routes.url_helpers.root_url}/admin/auth/github/callback"
  end

  provider :github,
           Rails.application.secrets.github_client_id,
           Rails.application.secrets.github_client_secret,
           options
end
