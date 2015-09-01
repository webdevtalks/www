class App::HomeController < AppController

  def show
    @event = Event.includes({ talks: :speaker }, :venue).current
    @talks = @event.talks.accepted
  end

end
