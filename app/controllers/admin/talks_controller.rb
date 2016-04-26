class Admin::TalksController < AdminController

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
    @event =  Event.find(params[:event_id])
    @talk  = @event.talks.create(talk_params.merge(status: :accepted))
    if @talk.persisted?
      flash[:success] = "Charla registrada con éxito."
      redirect_to edit_admin_event_path(@event)
    else
      flash[:error] = "No se pudo registrar charla: #{@talk.humanized_errors}"
      redirect_to edit_admin_event_path(@event)
    end
  end

  private

  def talk_params
    params.require(:talk).permit :title, :description, :speaker_id
  end

  def find_talk
    @talk = Talk.find(params[:id])
  end

end
