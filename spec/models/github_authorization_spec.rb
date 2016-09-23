require 'rails_helper'

describe GithubAuthorization do

  describe 'validations' do

    describe 'membership' do
      context 'when user belongs to organization' do
        it 'returns true without registering errors' do
          github_auth = GithubAuthorization.new('foo')

          FakeWeb.register_uri(
            :get,
            %r{/orgs/webdevtalks/members/foo},
            status: ['204', 'No Content']
          )

          expect(github_auth.membership).to be_truthy
          expect(github_auth.errors).to be_empty
        end
      end

      context 'when user does not belong to organization' do
        it 'returns false and registers errors' do
          github_auth = GithubAuthorization.new('bar')

          FakeWeb.register_uri(
            :get,
            %r{/orgs/webdevtalks/members/bar},
            status: ['404', 'Not Found']
          )

          expect(github_auth.membership).to be_falsy
          expect(github_auth.errors[:base]).to include(
            'No perteneces al grupo de organizadores'
          )
        end
      end
    end

  end

end
