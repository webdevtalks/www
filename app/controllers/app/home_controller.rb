class App::HomeController < AppController

  def show
    @event = Event.includes({ talks: :speaker }, :venue).current
    @talks = @event.talks.accepted
    @sponsors = Sponsor.active_sponsors
  end

end
