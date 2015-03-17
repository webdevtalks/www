class Admin::SessionsController < ApplicationController

  before_action :reset_session, only: :create

  layout 'admin'

  def create
    @auth = Authorization.find_or_create_by_omniauth(omniauth_params)

    if @auth.valid?
      session[:user_id] = @auth.user_id
      redirect_to root_path
    else
      redirect_to admin_login_path, alert: @auth.humanized_errors
    end
  end

  def new
  end

  private

  def omniauth_params
    OmniauthHash.new(request.env['omniauth.auth']).permit!
  end

end
