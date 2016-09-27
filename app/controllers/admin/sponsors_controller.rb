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
      redirect_to admin_sponsors_path, notice: 'Patrocinador creado con éxito'
    else
      flash[:error] = "Errores: #{@sponsor.humanized_errors}"
      render :new
    end
  end

  def edit
  end

  def update
    if @sponsor.update(sponsor_params)
      redirect_to admin_sponsors_path, notice: 'Patrocinador actualizado'
    else
      flash[:error] = "Errores: #{@sponsor.humanized_errors}"
      render :edit
    end
  end

  private

  def find_sponsor
    @sponsor = Sponsor.find(params[:id])
  end

  def sponsor_params
    params.require(:sponsor).permit(:active, :image, :name, :twitter, :website)
  end
end
