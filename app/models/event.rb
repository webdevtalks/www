class Event < ActiveRecord::Base

  belongs_to :venue

  delegate :location, to: :venue

  has_many :accepted_talks, -> { accepted }, class_name: 'Talk'
  has_many :confirmed_speakers, source: :speaker, through: :accepted_talks
  has_many :speakers, dependent: :nullify, source: :speaker, through: :talks
  has_many :talks, dependent: :nullify

  validates_presence_of :date, :venue

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
