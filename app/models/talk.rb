class Talk < ActiveRecord::Base

  belongs_to :event
  belongs_to :speaker, class_name: 'User', foreign_key: :user_id

end
