require 'rails_helper'

describe Admin::SessionsController do

  describe 'new' do
    before { get :new }
    it { expect(response).to be_success }
  end

  describe 'create' do
    let(:user) { Fabricate.build(:user_with_authorization) }

    before do
      allow(Authorization).to receive(:find_or_create_by_omniauth) { user.authorization }
      allow(user.authorization).to receive(:valid?) { authorization_validity }
    end

    context 'when authorization is valid' do
      let(:authorization_validity) { true }
      before { get :create }
      it 'stores user id into session' do
        expect(session[:user_id]).to eq(user.id)
      end
    end

    context 'when authorization is invalid' do
      let(:authorization_validity) { false }
      before { get :create }

      it { expect(response).to redirect_to(admin_login_path) }
      it { expect(session[:user_id]).to be_nil }
    end
  end

end
