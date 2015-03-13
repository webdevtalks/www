class User < ActiveRecord::Base

  has_one :authorization

  validates_presence_of :email, :name
  validates_presence_of :authorization, on: :update
  validates_uniqueness_of :email
  validates :email, email: { strict: true, message: 'is invalid' }

end
