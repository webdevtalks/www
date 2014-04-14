require 'spec_helper'

describe HomeController do

  describe :index do
    before { get :index }
    its(:response) { should be_success }
  end
end
