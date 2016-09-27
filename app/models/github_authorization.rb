class GithubAuthorization

  CREDENTIALS = {
    client_id:     Rails.application.secrets.github_client_id,
    client_secret: Rails.application.secrets.github_client_secret
  }.map { |k, v| "#{k}=#{v}" }.join('&')

  HEADERS = {
    'User-Agent' => Rails.application.secrets.github_app_name
  }.freeze

  include ActiveRecord::HumanizedErrors
  include ActiveModel::Validations

  attr_reader :username

  validate :membership

  def initialize(username)
    @username = username
  end

  def membership
    request = Net::HTTP::Get.new(api_membership_url, HEADERS)

    response = Net::HTTP.start 'api.github.com', use_ssl: true do |http|
      http.request(request)
    end

    if response.class.in?([Net::HTTPNoContent, Net::HTTPFound])
      true
    else
      errors.add :base, 'No perteneces al grupo de organizadores'
      false
    end
  end

  private

  def api_membership_url
    "/orgs/webdevtalks/members/#{@username}?#{CREDENTIALS}"
  end

end
