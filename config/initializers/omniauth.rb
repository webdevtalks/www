Rails.application.config.middleware.use OmniAuth::Builder do

  configure do |config|
    config.path_prefix = '/admin/auth'
  end

  unless Rails.env.review?
    provider(
      :github,
      Rails.application.secrets.github_client_id,
      Rails.application.secrets.github_client_secret,
      scope: 'user:email,read:org'
    )
  end

end
