class Location < ActiveRecord::Base
  has_one :event

  def name
    if city == state
      [city, country].join(', ')
    else
      [city, state, country].join(', ')
    end
  end
end
