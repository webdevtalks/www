class Event < ActiveRecord::Base

  belongs_to :venue, inverse_of: :events

  delegate :location, to: :venue

  has_many :candidates, source: :speaker, through: :proposals
  has_many :proposals, -> { proposal }, class_name: 'Talk'
  has_many :speakers, source: :speaker, through: :talks
  has_many :talks, -> { accepted }

  validates_presence_of :date, :venue

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
