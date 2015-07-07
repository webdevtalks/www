class Admin::SpeakersController < AdminController

  before_action :find_speaker, only: :show

  def show
  end

  private

  def find_speaker
    @speaker = Speaker.find(params[:id])
  end

end
