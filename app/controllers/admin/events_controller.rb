class Admin::EventsController < AdminController

  before_action :find_event, only: [:edit, :update]

  def create
    @event = Event.create event_params

    if @event.persisted?
      redirect_to admin_events_path
    else
      flash[:error] = @event.humanized_errors
      render :new
    end
  end

  def destroy
    if Event.destroy(params[:id])
      redirect_to admin_events_path, notice: 'Evento destruído con éxito.'
    else
      redirect_to admin_events_path, error: 'Evento no pudo ser destruído.'
    end
  end

  def edit
    @accepted_talks  = @event.talks.select{|talk| talk.status == 'accepted' }
    @proposed_talks  = @event.talks.select{|talk| talk.status == 'proposal' }
    @talk = @event.talks.new
  end

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def update
    if @event.update_attributes event_params
      redirect_to admin_events_path, notice: 'Evento actualizado con éxito.'
    else
      flash[:error] = @event.humanized_errors
      render :edit
    end
  end

  private

  def event_params
    params.require(:event).permit :venue_id, :date, :description, :theme
  end

  def find_event
    @event = Event.includes(talks: :speaker).find(params[:id])
  end

end
