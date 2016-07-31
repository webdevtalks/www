class User < ActiveRecord::Base

  has_many :talks, foreign_key: 'speaker_id'

  has_one  :authorization

  validates               :email, email: { strict: true, message: 'is invalid' }
  validates_presence_of   :authorization, on: :update
  validates_presence_of   :email, :name
  validates_uniqueness_of :email

  def avatar_url
    photo_url || network_photo_url || authorization_photo_url || placeholder_photo_url
  end

  private

    def asset_user_photo_url(nickname)
      Dir.glob("app/assets/images/speakers/**/#{nickname}.{jpg,jpeg,png}").first
    end

    def authorization_photo_url
      authorization.photo_url if authorization
    end

    def network_photo_url
      asset_user_photo_url(twitter)
    end

    def placeholder_photo_url
      Faker::Avatar.image(twitter || name.delete(' ')).gsub('http', 'https')
    end

end
