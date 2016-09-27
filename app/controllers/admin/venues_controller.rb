class Admin::VenuesController < AdminController

  before_action :find_venue, only: [:destroy, :edit, :update]

  def create
    @venue = Venue.create(venue_params)

    if @venue.persisted?
      redirect_to admin_venues_path, notice: 'Lugar creado'
    else
      flash[:error] = @venue.humanized_errors
      render :new
    end
  end

  def index
    @venues = Venue.includes(:location).all
  end

  def new
    @venue = Venue.new
  end

  def edit
  end

  def update
    if @venue.update(venue_params)
      redirect_to admin_venues_path, notice: 'Lugar fue actualizado'
    else
      flash[:error] = "Errores: #{@venue.humanized_errors}"
      render :edit
    end
  end

  def destroy
    if @venue.destroy
      redirect_to admin_venues_path, notice: 'Lugar destruído'
    else
      flash[:error] = "Errores #{@venue.humanized_errors}"
      redirect_to admin_venues_path, error: 'Lugar no pudo ser destruído'
    end
  end

  private

  def find_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:venue).permit(
      :address,
      :description,
      :latitude,
      :location_id,
      :longitude,
      :name,
      :override_map_with_coordinates
    )
  end
end
