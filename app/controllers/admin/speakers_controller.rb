class Admin::SpeakersController < AdminController

  before_action :find_speaker, only: [:edit, :show, :update]

  def create
    @speaker = Speaker.create(speaker_params)

    if @speaker.persisted?
      flash[:success] = "Ponente registrado con éxito."
      redirect_to admin_speakers_path
    else
      flash[:error] = "No se pudo registrar ponente: #{@speaker.humanized_errors}"
      render :new
    end
  end

  def edit
  end

  def index
    @speakers = Speaker.all
  end

  def new
    @speaker = Speaker.new
  end

  def show
  end

  def update
    if @speaker.update_attributes(speaker_params)
      flash[:success] = 'Ponente actualizado con éxito.'
      redirect_to admin_speakers_path
    else
      flash[:error] = "No se pudo actualizar ponente: #{@speaker.humanized_errors}"
      render :edit
    end
  end

  private

  def find_speaker
    @speaker = Speaker.find(params[:id])
  end

  def speaker_params
    params.require(:speaker).permit(:name, :email, :twitter)
  end

end
