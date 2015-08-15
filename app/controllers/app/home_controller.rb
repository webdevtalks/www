class App::HomeController < AppController

  def index
    @event = Event.current
  end

end
