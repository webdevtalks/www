class App::HomeController < AppController

  def show
    @event = Event.includes({ talks: :speaker}, :venue).current
  end

end
