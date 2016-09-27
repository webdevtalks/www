class Sponsor < ActiveRecord::Base

  scope :active, -> { where(active: true) }

  validates_presence_of :image, :name

end
