class Admin::TalksController < AdminController

  before_action :find_talk, only: :update

  def index
    @talks = Talk.all
  end

  def update
    @talk.send(params[:accept] == 'true' ? :accept! : :reject!)
  rescue AASM::InvalidTransition => e
    flash[:error] = e.message
  ensure
    redirect_to edit_admin_event_path(@talk.event)
  end

  private

  def find_talk
    @talk = Talk.find(params[:id])
  end

end
