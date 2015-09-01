require 'rails_helper'

describe App::HomeController do

  describe 'show' do

    before do
      Fabricate :event, date: 1.day.from_now
    end

    it 'assigns the current event' do
      get :show
      expect(assigns[:event]).to eq(Event.current)
    end

    it 'assigns only the accepted talks' do
      get :show
      expect(assigns[:talks]).to eq(Event.current.talks.accepted)
    end

  end
end
