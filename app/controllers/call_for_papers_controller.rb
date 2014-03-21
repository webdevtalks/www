class CallForPapersController < ApplicationController
  before_filter :protect_from_forgery, :except => [:create]

  before_filter :load

  def load
    @call_for_papers = CallForPapers.new
  end

  def create
    @call_for_papers = CallForPapers.new cfp_params

    if @call_for_papers.save
      flash[:notice] = 'Successfully created'
      redirect_to root_path
    else
      flash[:error] = 'Something went wrong'
      render root_path
    end
  end
   private

   def cfp_params
     @params = params.require(:call_for_papers).permit(:topic, :name, :email, :description)
   end
end
