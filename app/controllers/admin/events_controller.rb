class Admin::EventsController < AdminController

  before_action :find_event, only: [:edit, :update]

  def create
    @event = Event.create(event_params)

    if @event.persisted?
      redirect_to admin_events_path, notice: 'Evento creado con éxito'
    else
      flash[:error] = @event.humanized_errors
      render :new
    end
  end

  def destroy
    if Event.destroy(params[:id])
      redirect_to admin_events_path, notice: 'Evento destruído con éxito'
    else
      redirect_to admin_events_path, error: 'Evento no pudo ser destruído'
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
      redirect_to admin_events_path, notice: 'Evento actualizado con éxito'
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
