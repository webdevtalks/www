class Admin::TalksController < AdminController

  before_action :find_event, only: :create
  before_action :find_talk, only: [ :edit, :show, :update]

  def create
    @talk = @event.talks.create(talk_params)

    if @talk.persisted?
      flash[:notice] = 'Charla registrada'
    else
      flash[:error] = "Errores: #{@talk.humanized_errors}"
    end

    redirect_to edit_admin_event_path(@event)
  end

  def edit
  end

  def index
    @talks = Talk.includes(:speaker).all
  end

  def show
  end

  def update
    if @talk.update(talk_params)
      redirect_to admin_talks_path, notice: 'Charla actualizada'
    else
      flash[:error] = "Errores: #{@talk.humanized_errors}"
      render :edit
    end

  end

  private

  def find_event
    @event = Event.find(params[:event_id])
  end

  def find_talk
    @talk = Talk.find(params[:id])
  end

  def talk_params
    params.require(:talk).permit(:description, :title, :user_id)
  end

end
