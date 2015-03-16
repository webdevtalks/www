class Admin::SessionsController < ApplicationController

  before_action :authorize,     only: :create
  before_action :reset_session, only: :create

  layout 'admin'

  def new
  end

  def create
    session[:user_id] = @auth.user_id

    redirect_to root_path
  end

  private

  def authorize
    @auth = Authorization.find_or_create_by_omniauth(request.env['omniauth.auth'])
    redirect_to admin_login_path, alert: @auth.humanized_errors unless @auth.persisted?
  end

end
