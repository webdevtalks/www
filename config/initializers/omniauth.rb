WDT::Application.config.middleware.use OmniAuth::Builder do

  configure do |config|
    config.path_prefix = '/admin/auth'
  end

  provider :github,
           ENV['GITHUB_CLIENT_ID'],
           ENV['GITHUB_CLIENT_SECRET'],
           scope: 'read:org'
end
