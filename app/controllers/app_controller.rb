class AppController < ActionController::Base

  force_ssl if: :ssl_enabled?

  protect_from_forgery with: :exception

  private

  def ssl_enabled?
    ENV.fetch('SSL_ENABLED', false)
  end

end
