class Admin::TalksController < AdminController

  def index
    @talks = Talk.all
  end

end
