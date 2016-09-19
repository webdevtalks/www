class Venue < ActiveRecord::Base

  belongs_to :location, inverse_of: :venues

  has_many   :events, dependent: :restrict_with_error, inverse_of: :venue

  validates_presence_of :name, :description, :location
  validates_numericality_of :latitude, :longitude, allow_nil: true

  def detailed_name
    "#{name} (#{location.name})"
  end

  def map
    override_map_with_coordinates ? [latitude, longitude].join(',') : address
  end

end
