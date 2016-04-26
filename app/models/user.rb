class User < ActiveRecord::Base

  has_many :talks, foreign_key: 'speaker_id'

  has_one  :authorization

  validates               :email, email: { strict: true, message: 'is invalid' }
  validates_presence_of   :authorization, on: :update
  validates_presence_of   :email, :name
  validates_uniqueness_of :email

  def avatar_url
    profile_photo_url || authorization.try(:photo_url) || "assets/#{twitter}.jpeg"
  end

end
