class Talk < ActiveRecord::Base

  include AASM

  aasm column: :status do
    state :draft,   initial: true
    state :proposal
    state :accepted

    event :submit do
      transitions from: :draft, to: :proposal
    end

    event :accept do
      transitions from: :proposal, to: :accepted
    end

    event :reject do
      transitions from: :accepted, to: :proposal
    end
  end

  after_create :flag_speaker

  belongs_to :event
  belongs_to :speaker, class_name: 'User', foreign_key: :user_id

  validates_presence_of :event, :speaker, :title, :description

  private

  def flag_speaker
    speaker.update_attribute :is_speaker, true
  end

end
