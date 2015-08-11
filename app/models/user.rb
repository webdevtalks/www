class User < ActiveRecord::Base

  has_one  :authorization
  has_many :talks

  validates_presence_of :email, :name
  validates_presence_of :authorization, on: :update
  validates_uniqueness_of :email
  validates :email, email: { strict: true, message: 'is invalid' }

  def avatar_url
    profile_photo_url || authorization.photo_url || "assets/#{twitter}.jpeg"
  end

end
