class Event < ActiveRecord::Base

  belongs_to :venue, inverse_of: :events

  delegate :location, to: :venue

  has_many :candidates,
           dependent: :restrict_with_error,
           source:    :speaker,
           through:   :proposals

  has_many :proposals, -> { proposal },
           class_name: 'Talk',
           dependent:  :restrict_with_error

  has_many :speakers,
           dependent: :restrict_with_error,
           source:    :speaker,
           through:   :talks

  has_many :talks, -> { accepted },
           dependent: :restrict_with_error

  validates_presence_of :date, :venue

  def self.current
    find_by('date >= ?', Time.zone.today) || last
  end

end
