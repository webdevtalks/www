require 'rails_helper'

describe App::HomeController do

  describe 'show' do
    before { get :show }
    it { expect(response).to be_success }
  end
end
