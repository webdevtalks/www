class Venue < ActiveRecord::Base

  has_many   :events
  belongs_to :location

  validates_presence_of :name, :description, :location
  validates_numericality_of :latitude, :longitude, allow_nil: true

end
