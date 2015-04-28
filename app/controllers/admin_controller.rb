class AdminController < ActionController::Base

  protect_from_forgery with: :exception

  before_action :authorize!

  private

  def authorize!
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    else
      redirect_to admin_login_path
    end
  end

end
