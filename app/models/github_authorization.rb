class GithubAuthorization

  include ActiveRecord::HumanizedErrors
  include ActiveModel::Validations

  attr_reader :access_token, :organization, :username

  validate :membership

  def initialize(access_token, username)
    @access_token = access_token
    @username     = username
  end

  def membership
    request = Net::HTTP::Get.new("/orgs/webdevtalks/members/#{username}")

    response = Net::HTTP.start "api.github.com", use_ssl: true do |http|
      request["Authorization"] = "token #{access_token}"
      request["User-Agent"]    = Rails.application.secrets.github_app_name
      http.request request
    end

    if response.class != Net::HTTPNoContent
      errors.add :base, "You don't belong to the staff."
      false
    else
      true
    end
  end

end
