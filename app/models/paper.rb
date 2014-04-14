class Paper < ActiveRecord::Base
  validates :topic, :name, :email, :description, presence: true
end
