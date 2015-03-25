class HomeController < ApplicationController

  def index
    @event = Event.current
  end

end
