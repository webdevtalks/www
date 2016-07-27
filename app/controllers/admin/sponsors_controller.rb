class Admin::SponsorsController < AdminController

  before_action :find_sponsor, only: [:show, :edit, :update]

  def index
    @sponsors = Sponsor.all
  end

  def show
  end

  def new
    @sponsor = Sponsor.new
  end

  def create
    @sponsor = Sponsor.new(sponsor_params)
    if @sponsor.save
      flash[:success] = "Patrocinador registrado con éxito."
      redirect_to admin_sponsors_path
    else
      flash[:error] = "No se pudo registrar patrocinador: #{@sponsor.humanized_errors}"
      render :new
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @sponsor.update(sponsor_params)
        format.html { redirect_to admin_sponsors_path, notice:  'Patrocinador actualizado con éxito.' }
        format.json { render :index, status: :ok, location: @sponsor }
      else
        format.html { render :edit, error: "No se pudo actualizar patrocinador: #{@sponsor.humanized_errors}" }
        format.json { render json: @sponsor.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def sponsor_params
    params.require(:sponsor).permit :name, :website, :twitter, :image, :active
  end

  def find_sponsor
    @sponsor = Sponsor.find(params[:id])
  end
end
