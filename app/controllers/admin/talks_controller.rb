class Admin::TalksController < AdminController

  before_action :find_event, only: :create
  before_action :find_talk, only: [:show, :update]

  def index
    @talks = Talk.includes(:speaker).all
  end

  def show
  end

  def update
    @talk.send(params[:accept] == 'true' ? :accept! : :cancel!)
  rescue AASM::InvalidTransition => e
    flash[:error] = e.message
  ensure
    redirect_to :back
  end

  def create
    @talk = @event.talks.create(talk_params.merge(status: :accepted))

    if @talk.persisted?
      flash[:notice] = 'Charla registrada'
    else
      flash[:error] = "Errores: #{@talk.humanized_errors}"
    end

    redirect_to edit_admin_event_path(@event)
  end

  private

  def find_event
    @event = Event.find(params[:event_id])
  end

  def find_talk
    @talk = Talk.find(params[:id])
  end

  def talk_params
    params.require(:talk).permit(:description, :speaker_id, :title)
  end

end
