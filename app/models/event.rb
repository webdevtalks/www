class Event < ActiveRecord::Base

  belongs_to :location
  has_many   :talks
  has_many   :speakers, ->{ order 'name asc' }, through: :talks, source: :speaker

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
