class AdminController < ActionController::Base

  attr_reader :current_user

  before_action :authorize!

  force_ssl if: :ssl_enabled?

  helper_method :authorized?, :current_user

  protect_from_forgery with: :exception

  def authorized?
    @current_user != nil
  end

  private

  def authorize!
    if session[:user_id] && User.exists?(session[:user_id])
      @current_user = User.find(session[:user_id])
    else
      redirect_to admin_login_path
    end
  end

  def ssl_enabled?
    ENV['SSL_ENABLED'] == 'true'
  end

end
