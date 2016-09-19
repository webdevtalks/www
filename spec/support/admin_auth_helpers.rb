module AdminAuthHelpers

  DEFAULT_OPTIONS = {
    via: :developer
  }

  PROVIDERS = {
    developer: {
      method: :post
    }
  }

  def authenticate_as(user, options = {})
    options = DEFAULT_OPTIONS.merge(options)

    if options[:mock]
      mock_authentication(options[:via], user.authorization)
    else
      send("authenticate_via_#{options[:via]}", user)
    end
  end

  def mock_authentication(strategy, authorization)
    OmniAuth.config.test_mode = true

    OmniAuth.config.add_mock(
      strategy,
      uid:  authorization.uid,
      info: {
        email: authorization.user.email
      }
    )

    action = PROVIDERS[strategy][:method]
    path   = send("admin_#{strategy}_callback_path")

    action == :get ? visit(path) : page.driver.send(action, path)
  end

end
