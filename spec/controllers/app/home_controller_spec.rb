require 'rails_helper'

describe App::HomeController do

  describe 'show' do

    it 'assigns the current event' do
      latest_event = Fabricate(:event, date: 1.day.from_now)
      get :show
      expect(assigns[:event]).to eq(latest_event)
    end

  end

end
