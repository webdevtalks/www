class App::HomeController < AppController

  def show
    @event    = Event.includes(event_associations).current
    @sponsors = Sponsor.active.shuffle
  end

  private

  def event_associations
    {
      speakers: :authorization,
      talks:    :speaker,
      venue:    :location
    }
  end

end
