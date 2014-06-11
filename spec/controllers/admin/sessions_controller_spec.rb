require 'spec_helper'

describe Admin::SessionsController do

  before do
    Authorization.any_instance.stub :github_authorization
  end

  describe :new do
    before { get :new }
    its(:response) { should be_success }
  end

  describe :create do
    let(:user) { Fabricate(:user_with_authorization) }

    before do
      Authorization.stub find_or_create_by_omniauth: user.authorization,
                         github_authorization:       true
    end

    context 'when authorization is valid' do

      it 'stores user id into session' do
        get :create
        expect(session[:user_id]).to eq(user.id)
      end
    end

    context 'when authorization is invalid' do
      before do
        user.authorization.stub invalid?: true
        get :create
      end

      specify { expect(response).to redirect_to(admin_login_path) }
      specify { expect(session[:user_id]).to be_nil }
    end
  end

end
