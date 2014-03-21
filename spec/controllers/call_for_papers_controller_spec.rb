require 'spec_helper'

describe CallForPapersController do
  def valid_attributes
    {
      topic: 'test topic name',
      name: 'test name',
      email: 'test@test.com',
      description: 'this topic its about.'
    }
  end

  let(:call_for_papers) { Fabricate :call_for_papers }

   context 'when success' do
      it 'redirects to index' do
        post :create, { call_for_papers: valid_attributes }

        expect(response).to redirect_to root_path
      end
    end
end
