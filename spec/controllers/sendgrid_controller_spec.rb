require 'spec_helper'

describe SendgridController do

  describe :validate do
    before do
      get :validate
    end

    its(:response) { should be_success }

    it 'renders "sendgrid" word' do
      response.body.should == 'sendgrid'
    end

  end

end
