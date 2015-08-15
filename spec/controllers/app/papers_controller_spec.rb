require 'rails_helper'

describe App::PapersController do
  describe '#create' do
    let :valid_attributes do
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
