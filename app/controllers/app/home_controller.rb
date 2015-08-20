class App::HomeController < AppController

  def show
    @event = Event.current
  end

end
