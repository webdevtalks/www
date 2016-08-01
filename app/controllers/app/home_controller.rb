class App::HomeController < AppController

  def show
    @event    = Event.includes(event_associations).current
    @sponsors = Sponsor.active_sponsors
  end

  private

    def event_associations
      { accepted_talks: :speaker, confirmed_speakers: :authorization, venue: :location }
    end

end
