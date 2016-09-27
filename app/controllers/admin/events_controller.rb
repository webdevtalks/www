class Admin::EventsController < AdminController

  before_action :find_event, only: [:edit, :destroy, :update]

  def create
    @event = Event.create(event_params)

    if @event.persisted?
      redirect_to admin_events_path, notice: 'Evento creado'
    else
      flash[:error] = "Errores: #{@event.humanized_errors}"
      render :new
    end
  end

  def destroy
    if @event.destroy
      redirect_to admin_events_path, notice: 'Evento destruído'
    else
      flash[:error] = "Errores: #{@event.humanized_errors}"
      redirect_to admin_events_path
    end
  end

  def edit
    @talks     = @event.talks
    @proposals = @event.proposals
  end

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def update
    if @event.update_attributes(event_params)
      redirect_to admin_events_path, notice: 'Evento actualizado'
    else
      flash[:error] = @event.humanized_errors
      render :edit
    end
  end

  private

  def event_params
    params.require(:event).permit(:date, :description, :theme, :venue_id)
  end

  def find_event
    @event = Event.includes(talks: :speaker).find(params[:id])
  end

end
