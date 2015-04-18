class Talk < ActiveRecord::Base

  belongs_to :event
  belongs_to :speaker, class_name: 'User', foreign_key: :user_id

  validates_presence_of :event, :speaker, :title, :description

end
