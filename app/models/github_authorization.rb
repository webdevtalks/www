require 'httparty'

class GithubAuthorization

  attr_reader :nickname, :organization

  include ActiveModel::Validations
  include ActiveRecord::HumanizedErrors
  include HTTParty

  headers  'User-Agent' => Rails.application.secrets.github_app
  base_uri 'https://api.github.com'

  validate :organization_membership

  def initialize(access_token, nickname)
    self.class.headers['Authorization'] = "token #{access_token}"
    @organization = 'webdevtalks'
    @nickname     = nickname
  end

  private

  def organization_membership
    request = self.class.get("/orgs/#{organization}/members/#{nickname}")
    if request.response.class != Net::HTTPNoContent
      errors.add :base, "You don't belong to the staff."
      false
    else
      true
    end
  end

end
