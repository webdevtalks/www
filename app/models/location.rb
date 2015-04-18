class Location < ActiveRecord::Base
  has_many :events

  validates_presence_of :city, :country, :state

  def name
    if city == state
      [city, country].join(', ')
    else
      [city, state, country].join(', ')
    end
  end
end
