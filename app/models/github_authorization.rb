class GithubAuthorization

  include ActiveRecord::HumanizedErrors
  include ActiveModel::Validations

  attr_reader :username

  validate :membership

  def initialize(username)
    @username     = username
  end

  def membership
    request = Net::HTTP::Get.new("/orgs/webdevtalks/members/#{username}?#{credentials}")

    response = Net::HTTP.start "api.github.com", use_ssl: true do |http|
      request["User-Agent"]    = Rails.application.secrets.github_app_name
      http.request request
    end

    if response.class.in?([Net::HTTPNoContent, Net::HTTPFound])
      true
    else
      errors.add :base, 'No perteneces al grupo de organizadores'
      false
    end
  end

  private

  def credentials
    @credentials ||= %[
      client_id=#{Rails.application.secrets.github_client_id}
      client_secret=#{Rails.application.secrets.github_client_secret}
    ].squish.split(" ").join('&')
  end
end
