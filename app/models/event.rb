class Event < ActiveRecord::Base

  belongs_to :venue

  has_many   :talks
  has_many   :speakers, ->{ order 'name asc' }, through: :talks, source: :speaker

  validates_presence_of :venue, :date

  delegate :location, to: :venue

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
