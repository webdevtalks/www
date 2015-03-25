class Event < ActiveRecord::Base

  belongs_to :location

  def self.current
    find_by 'date >= ?', Time.zone.today
  end

end
