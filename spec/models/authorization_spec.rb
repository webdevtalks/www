require 'rails_helper'

describe Authorization do
  before { allow_any_instance_of(Authorization).to receive(:github_authorization).and_return true }

  describe 'validates' do

    describe 'presence_of', attributes: [:provider, :uid], associations: { :update => [:user] }  do
      before { subject.valid?  }
      specify "#{metadata[:attributes]} errors" do |example|
        example.metadata[:attributes].each do |attribute|
          expect(subject.errors[attribute]).to include("can't be blank")
        end
      end

      context 'on update' do
        subject { Fabricate(:authorization) }

        before { subject.touch }

        specify "#{metadata[:associations][:update]} errors" do |example|
          example.metadata[:associations][:update].each do |association|
            expect(subject.errors[association]).to include("can't be blank")
          end
        end
      end

    end


    describe 'github_authorization' do
      before { allow_any_instance_of(Authorization).to receive(:github_authorization).and_call_original }

      context 'when GithubAuthorization is invalid' do

        let(:github_authorization) do
          double(GithubAuthorization, humanized_errors: 'x', valid?: false)
        end

        before do
          allow(GithubAuthorization).to receive(:new).and_return github_authorization
          subject.send :github_authorization
        end

        it 'mimics its errors' do
          expect(subject.errors[:github_authorization]).to be_present
          expect(subject.errors[:github_authorization]).to include('x')
        end
      end
    end

  end

  describe '.create_by_omniauth' do
    subject { Authorization.create_by_omniauth(omniauth_hash) }

    context 'with hash:', omniauth_hash: {
                                           provider: Faker::Internet.domain_word,
                                           uid: Faker::Number.number(5),
                                           info: {
                                             name: Faker::Name.name,
                                             email: Faker::Internet.email
                                           }
                                         }.with_indifferent_access do

      let(:omniauth_hash) {|e| e.metadata[:omniauth_hash] }

      context "#{metadata[:omniauth_hash]}" do

        metadata[:omniauth_hash].each do |attr, value|
          it{ expect(omniauth_hash[attr]).to eq(value) }
        end

        describe 'its user' do
          it { expect(subject.user).to be_present }
          it { expect(subject.user).to be_persisted }

          context 'attributes' do
            metadata[:omniauth_hash][:info].slice(:name, :email).each do |attr, value|
              it "#{attr} == #{value}" do
               expect(subject.user.send(attr)).to eq(value)
              end
            end
          end
        end
      end
    end
  end


  describe '.find_by_onmniauth' do
    subject { Authorization.find_by_omniauth(omniauth_hash) }
    context 'with hash:', omniauth_hash: { provider: Faker::Internet.domain_word,
                                           uid: Faker::Number.number(5) } do
      context "#{metadata[:omniauth_hash]}" do
        let(:omniauth_hash) {|e| e.metadata[:omniauth_hash] }
        before do
          @authorization = Fabricate(:authorization,
                                     omniauth_hash.merge(user: Fabricate.build(:user)))
        end

        it 'is found' do
          expect(subject).to eq(@authorization)
        end
      end
    end
  end

  describe '.find_or_create_by_omniauth' do
    subject { Authorization.find_or_create_by_omniauth(omniauth_hash) }
    context 'with hash:', omniauth_hash: { provider: Faker::Internet.domain_word,
                                           uid: Faker::Number.number(5),
                                           info: { name: Faker::Name.name,
                                                   email: Faker::Internet.email }.
                                          with_indifferent_access } do

      context "#{metadata[:omniauth_hash]}" do
        let(:omniauth_hash) {|e| e.metadata[:omniauth_hash] }

        context 'when authorization exists' do
          before { @authorization = Authorization.create_by_omniauth(omniauth_hash) }

          it 'finds existing authorization' do
            expect(subject).to eq(@authorization)
          end
        end

        context 'when authorization does not exist' do
          before do
            expect(Authorization.find_by_omniauth(omniauth_hash)).to be_nil
          end

          it 'creates a new authorization' do
            expect(subject.created_at.beginning_of_minute).to eq(Time.now.beginning_of_minute)
          end
        end
      end
    end
  end
end
