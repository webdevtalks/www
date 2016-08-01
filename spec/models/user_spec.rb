require 'rails_helper'

describe User do

  describe 'validates' do

    context 'presence_of', attributes: [:name, :email] do
      before { subject.valid? }

      specify "#{metadata[:attributes]} errors" do |example|
        example.metadata[:attributes].each do |attribute|
          expect(subject.errors[attribute]).to include("can't be blank")
        end
      end
    end

    context 'uniqueness_of', attributes: [:email] do
      let(:existing_user) { Fabricate(:user) }

      specify "#{metadata[:attributes]} errors" do |example|
        example.metadata[:attributes].each do |attribute|
          subject.send("#{attribute}=", existing_user.send(attribute))
          expect(subject).to be_invalid
          expect(subject.errors[attribute]).to include('has already been taken')
        end
      end
    end
  end

  context 'format_of' do

    describe 'email' do
      subject { Fabricate.build(:user, email: email_address) }

      context 'passes with', email: Faker::Internet.email do
        let(:email_address) {|e| e.metadata[:email] }

        it metadata[:email] do
          expect(subject).to be_valid
        end
      end

      context 'fails with', email: Faker::Internet.user_name do
        let(:email_address) {|e| e.metadata[:email] }

        it metadata[:email] do
          expect(subject).to be_invalid
        end

        it 'errors' do
          subject.valid?
          expect(subject.errors[:email]).to include('is invalid')
        end
      end

    end

  end

  describe 'avatar_url' do
    context 'when photo_url is present' do
      it 'returns photo_url' do
        user = Fabricate(:user, photo_url: 'foo.jpg')

        expect(user.avatar_url).to eq('foo.jpg')
      end
    end

    context 'when photo_url is nil' do
      it 'fallbacks to local_photo_path' do
        user =  Fabricate(:user, photo_url: nil, twitter: 'bar')

        allow(user).to receive(:full_user_photo_path).with('bar') { 'bar.jpg' }

        expect(user.avatar_url).to eq('bar.jpg')
      end
    end

    context 'when photo_url and network_photo_path are nil' do
      it 'fallbacks to auth_photo_url' do
        user = Fabricate.build(:user_with_authorization, photo_url: nil, twitter: nil)

        allow(user.authorization).to receive(:photo_url) { 'baz.jpg' }

        expect(user.avatar_url).to eq('baz.jpg')
      end
    end

    context 'when all photo_url fallbacks are nil' do
      it 'fallbacks to a placeholder_photo_url' do
        user = Fabricate(:user, photo_url: nil, twitter: nil)
        expect(user.avatar_url).to match(/robohash.org/)
      end
    end
  end

end
