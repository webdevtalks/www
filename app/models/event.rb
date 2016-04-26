class Event < ActiveRecord::Base

  belongs_to :venue

  delegate :location, to: :venue
  has_many :speakers, -> { order 'name asc' }, dependent: :nullify, source: :speaker, through: :talks
  has_many :talks, dependent: :nullify

  validates_presence_of :venue, :date

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
