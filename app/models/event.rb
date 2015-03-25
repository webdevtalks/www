class Event < ActiveRecord::Base

  belongs_to :location
  has_many   :talks
  has_many   :speakers, through: :talks, source: :speaker

  def self.current
    find_by 'date >= ?', Time.zone.today
  end

end
