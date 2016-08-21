Rails.application.config.middleware.use OmniAuth::Builder do

  configure do |config|
    config.path_prefix = '/admin/auth'
  end

  options = {
    scope: 'user:email,read:org'
  }

  if Rails.env.review?
    options[:redirect_uri] = "https://#{ENV.fetch('HEROKU_APP_NAME')}.herokuapp.com/admin/auth/github/callback"
  end

  provider :github,
           Rails.application.secrets.github_client_id,
           Rails.application.secrets.github_client_secret,
           options
end
