class Admin::LocationsController < AdminController

  before_action :find_location, only: [:edit, :update]

  def create
    @location = Location.create location_params

    if @location.persisted?
      redirect_to admin_locations_path, notice: 'Ubicación creada con éxito.'
    else
      flash[:error] = @location.humanized_errors
      render :new
    end
  end

  def destroy
    if Location.destroy(params[:id])
      redirect_to admin_locations_path, notice: 'Ubicación destruída con éxito.'
    else
      redirect_to admin_locations_path, error: 'Ubicación no pudo ser destruída.'
    end
  end

  def edit
  end

  def index
    @locations = Location.all
  end

  def new
    @location = Location.new
  end

  def update
    @location.update_attributes location_params

    if @location.valid?
      redirect_to admin_locations_path, notice: 'Ubicación actualizada con éxito.'
    else
      flash[:error] = @location.humanized_errors
      render :edit
    end
  end

  private

  def find_location
    @location = Location.find(params[:id])
  end

  def location_params
    params.require(:location).permit :city, :state, :country
  end

end
