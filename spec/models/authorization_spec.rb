require 'spec_helper'

describe Authorization do
  before { Authorization.any_instance.stub(github_authorization: true) }

  describe :validates do

    describe :presence_of  do

      context :attributes, attributes: [:provider, :uid] do
        its "#{metadata[:attributes]} errors" do
          example.metadata[:attributes].each do |attribute|
            expect(subject.errors_on(attribute)).to include("can't be blank")
          end
        end
      end

      context :associations, associations: { :update => [:user] } do
        context 'on update' do
          subject { Fabricate(:authorization) }

          before { subject.touch }

          its "#{metadata[:associations][:update]} errors" do
            example.metadata[:associations][:update].each do |association|
              expect(subject.errors_on(association)).to include("can't be blank")
            end
          end
        end
      end

    end

    describe :github_authorization do
      before { Authorization.any_instance.unstub(:github_authorization) }

      context 'when GithubAuthorization is invalid' do

        let(:github_authorization) do
          double(GithubAuthorization, humanized_errors: 'x', valid?: false)
        end

        before do
          GithubAuthorization.stub new: github_authorization
          subject.send :github_authorization
        end

        it 'mimics its errors' do
          expect(subject.errors_on(:github_authorization)).to be_present
          expect(subject.errors_on(:github_authorization)).to include('x')
        end
      end
    end

  end

  describe '.create_by_omniauth_hash' do
    subject { Authorization.create_by_omniauth_hash(omniauth_hash) }

    context 'with hash:', omniauth_hash: { provider: Faker::Internet.domain_word,
                                           uid: Faker::Number.number(5),
                                           info: { name: Faker::Name.name,
                                                   email: Faker::Internet.email }
                                         }.with_indifferent_access do
      let(:omniauth_hash) { example.metadata[:omniauth_hash] }

      context "#{metadata[:omniauth_hash]}" do
        metadata[:omniauth_hash].each {|attr, value| its(attr) { should == value } }

        describe 'its user' do
          specify { subject.user.should be_present }
          specify { subject.user.should be_persisted }

          context 'attributes' do
            metadata[:omniauth_hash][:info].slice(:name, :email).each do |attr, value|
              it "#{attr} == #{value}" do
                subject.user.send(attr).should == value
              end
            end
          end
        end
      end
    end
  end


  describe '.find_by_onmniauth_hash' do
    subject { Authorization.find_by_omniauth_hash(omniauth_hash) }
    context 'with hash:', omniauth_hash: { provider: Faker::Internet.domain_word,
                                           uid: Faker::Number.number(5) } do
      context "#{metadata[:omniauth_hash]}" do
        let(:omniauth_hash) { example.metadata[:omniauth_hash] }
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
        let(:omniauth_hash) { example.metadata[:omniauth_hash] }

        context 'when authorization exists' do
          before { @authorization = Authorization.create_by_omniauth_hash(omniauth_hash) }

          it 'finds existing authorization' do
            expect(subject).to eq(@authorization)
          end
        end

        context 'when authorization does not exist' do
          before do
            Authorization.find_by_omniauth_hash(omniauth_hash).should be_nil
          end
          it 'creates a new authorization' do
            subject.created_at.beginning_of_minute.should === Time.now.beginning_of_minute
          end
        end
      end
    end
  end
end
