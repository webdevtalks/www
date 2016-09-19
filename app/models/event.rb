class Event < ActiveRecord::Base

  belongs_to :venue, inverse_of: :events

  delegate :location, to: :venue

  has_many :accepted_talks, -> { accepted }, class_name: 'Talk', inverse_of: :event
  has_many :confirmed_speakers, source: :speaker, through: :accepted_talks
  has_many :speakers, dependent: :nullify, source: :speaker, through: :talks
  has_many :talks, dependent: :nullify, inverse_of: :event

  validates_presence_of :date, :venue

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
