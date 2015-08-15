class GithubAuthorization

  include ActiveRecord::HumanizedErrors
  include ActiveModel::Validations
  include HTTParty

  attr_reader :organization, :username

  base_uri 'https://api.github.com'
  headers  'User-Agent' => Rails.application.secrets.github_app

  validate :organization_membership

  def initialize(access_token, username)
    self.class.headers['Authorization'] = "token #{access_token}"
    @organization = Rails.application.secrets.github_organization
    @username     = username
  end

  private

  def organization_membership
    request = self.class.get("/orgs/#{organization}/members/#{username}")
    if request.response.class != Net::HTTPNoContent
      errors.add :base, "You don't belong to the staff."
      false
    else
      true
    end
  end

end
