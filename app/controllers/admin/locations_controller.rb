class Admin::LocationsController < AdminController

  def create
    @location = Location.create location_params

    if @location.persisted?
      redirect_to admin_locations_path
    else
      flash[:error] = @location.humanized_errors
      render :new
    end
  end

  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  private

  def location_params
    params.require(:location).permit :city, :state, :country
  end

end
