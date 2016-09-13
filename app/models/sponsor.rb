class Sponsor < ActiveRecord::Base

  scope :active, -> { where(active: true) }

end
