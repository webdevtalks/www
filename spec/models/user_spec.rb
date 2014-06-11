require 'spec_helper'

describe User do

  describe :validates do

    context :presence_of, attributes: [:name, :email] do
      its "#{metadata[:attributes]} errors" do
        example.metadata[:attributes].each do |attribute|
          expect(subject.errors_on(attribute)).to include("can't be blank")
        end
      end
    end

    context :uniqueness_of, attributes: [:email] do
      let(:existing_user) { Fabricate(:user) }

      its "#{metadata[:attributes]} errors" do

        example.metadata[:attributes].each do |attribute|
          subject.send("#{attribute}=", existing_user.send(attribute))
          expect(subject).to be_invalid
          expect(subject.errors_on(attribute)).to include('has already been taken')
        end
      end
    end

    context :format_of do

      describe :email do
        subject { Fabricate.build(:user, email: email_address) }

        context 'passes with', email: Faker::Internet.email do
          let(:email_address) { example.metadata[:email] }

          it metadata[:email] do
            expect(subject).to be_valid
          end
        end

        context 'fails with', email: Faker::Internet.user_name do
          let(:email_address) { example.metadata[:email] }

          it metadata[:email] do
            expect(subject).to be_invalid
          end

          describe 'errors' do
            specify { expect(subject.errors_on(:email)).to include('is invalid') }
          end

        end
      end
    end
  end

end
