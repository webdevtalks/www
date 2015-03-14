require 'rails_helper'

describe PapersController do
 describe '#new' do
    before do
      get :new
    end

    it 'responds successfully with an HTTP 200 status code' do
      expect(response).to be_success
      expect(response.status).to eq(200)
    end
  end

  describe '#create' do
    def valid_attributes
      {
        topic: 'test topic name',
        name: 'test name',
        email: 'test@test.com',
        description: 'this topic its about.'
      }
    end

    let(:paper) { Fabricate :paper }

    context 'when success' do
      it 'redirects to index' do
        post :create, { paper: valid_attributes }

        expect(response).to redirect_to root_path
      end
    end
  end
end
