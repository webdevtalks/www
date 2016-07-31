require 'rails_helper'

describe Admin::SessionsController do

  let(:omniauth_params) do
    {
      provider:    'foo',
      uid:         '12345',
      info:        { urls: {} },
      credentials: { foo: '' },
      extra:       { raw_info: {} }
    }
  end

  describe 'new' do
    before { get :new }
    it { expect(response).to be_success }
  end

  describe 'create' do
    context 'when omniauth hash is valid' do
      let(:user) { Fabricate.build(:user_with_authorization) }

      before do
        request.env['omniauth.auth'] = omniauth_params
        allow(Authorization).to receive(:find_or_create_by_omniauth) { user.authorization }
        allow(user.authorization).to receive(:valid?) { authorization_validity }
      end

      context 'and authorization is valid' do
        let(:authorization_validity) { true }

        before { get :create }

        it 'stores user id into session' do
          expect(session[:user_id]).to eq(user.id)
        end
      end

      context 'and authorization is not valid' do
        let(:authorization_validity) { false }

        before { get :create }

        it { expect(response).to redirect_to(admin_login_path) }
        it { expect(session[:user_id]).to be_nil }
      end
    end

    context 'when omniauth hash is invalid' do
      before { request.env['omniauth.auth'] = {} }
      it { expect { get :create }.to raise_error(ActionController::ParameterMissing) }
    end
  end

end
