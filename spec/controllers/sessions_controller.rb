require 'spec_helper'

describe SessionsController do

  describe :new do
    before { get :new }
    its(:response) { should be_success }
  end

end
