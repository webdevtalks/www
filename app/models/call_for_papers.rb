class CallForPapers < ActiveRecord::Base
  validates :topic, :name, :email, :description, presence: true
end
