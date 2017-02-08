class User < ActiveRecord::Base

  alias_attribute :link, :url

  has_one  :authorization, dependent: :destroy, inverse_of: :user

  has_many :events, dependent: :restrict_with_error, through: :talks

  has_many :talks,
           dependent:   :restrict_with_error,
           inverse_of:  :speaker



  validates               :email, email: { strict: true, message: 'is invalid' }
  validates_presence_of   :email, :name
  validates_uniqueness_of :email

  def avatar_url
    photo_url || local_photo_path || auth_photo_url || placeholder_photo_url
  end

  private

  def auth_photo_url
    authorization.photo_url if authorization
  end

  def full_user_photo_path(nickname)
    Dir.glob("app/assets/images/speakers/**/#{nickname}.{jpg,jpeg,png}").first
  end

  def local_photo_path
    full_user_photo_path(twitter).try(:sub, /.*(speakers)/, 'assets/\1')
  end

  def placeholder_photo_url
    Faker::Avatar.image(twitter || name.delete(' ')).gsub('http', 'https')
  end

end
