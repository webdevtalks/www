class Sponsor < ActiveRecord::Base
 scope :active_sponsors, -> { where(active: true).shuffle } 
end
