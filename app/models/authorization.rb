class Authorization < ActiveRecord::Base

  belongs_to :user, autosave: true

  [:credentials, :extra, :info].each { |attr| serialize attr, HashWithIndifferentAccess }

  validate              :github_authorization
  validates_presence_of :provider, :uid
  validates_presence_of :user, on: :update

  def self.create_by_omniauth(hash)
    user = User.new hash[:info].slice(:name, :email)
    create hash.merge(user: user).with_indifferent_access
  end

  def self.find_by_omniauth(hash)
    find_by hash.slice(:provider, :uid)
  end

  def self.find_or_create_by_omniauth(hash)
    find_by_omniauth(hash) || create_by_omniauth(hash)
  end

  private

  def github_authorization
    @github_auth = GithubAuthorization.new(credentials[:token], info[:nickname])
    unless @github_auth.valid?
      errors.add :github_authorization, @github_auth.humanized_errors
    end
  end

end
