class Admin::SpeakersController < AdminController

  before_action :find_speaker, only: [:edit, :show, :update]

  def edit
  end

  def index
    @speakers = Speaker.all
  end

  def show
  end

  def update
    if @speaker.update_attributes(speaker_params)
      flash[:success] = 'Ponente actualizado con éxito.'
      redirect_to admin_speakers_path
    else
      flash[:error] = "Errores: #{@speaker.humanized_errors}"
      render :edit
    end
  end

  private

  def find_speaker
    @speaker = Speaker.find(params[:id])
  end

  def speaker_params
    params.require(:speaker).permit(
      :email,
      :facebook,
      :name,
      :organization_name,
      :organization_url,
      :title,
      :twitter,
      :url
    )
  end

end
