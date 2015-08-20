class Venue < ActiveRecord::Base

  belongs_to :location

  has_many   :events, dependent: :restrict_with_error

  validates_presence_of :name, :description, :location
  validates_numericality_of :latitude, :longitude, allow_nil: true

  def detailed_name
    "#{name} (#{location.name})"
  end

end
