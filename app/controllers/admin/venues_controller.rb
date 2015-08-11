class Admin::VenuesController < AdminController

  before_action :find_venue, only: [:edit, :update]

  def create
    @venue = Venue.create(venue_params)

    if @venue.persisted?
      redirect_to admin_venues_path, notice: 'Lugar creado con éxito.'
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
      redirect_to admin_venues_path, notice: 'Lugar fue actualizado con éxito.'
    else
      render :edit
    end
  end

  def destroy
    if Venue.destroy(params[:id])
      redirect_to admin_venues_path, notice: 'Lugar destruído con éxito.'
    else
      redirect_to admin_venues_path, error: 'Lugar no pudo ser destruído.'
    end
  end

  private

  def find_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:venue).permit :name, :description, :address, :latitude, :longitude, :location_id
  end
end
