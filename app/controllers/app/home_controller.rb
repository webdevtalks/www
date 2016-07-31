class App::HomeController < AppController

  def show
    @event    = Event.includes(event_associations).current
    @sponsors = Sponsor.active_sponsors
  end

  private

    def event_associations
      return { accepted_talks: :speaker, venue: :location }, :confirmed_speakers
    end

end
