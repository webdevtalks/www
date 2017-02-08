class Talk < ActiveRecord::Base

  include AASM

  aasm column: :status do
    state :accepted
    state :draft, initial: true
    state :proposal

    event :accept do
      transitions from: :proposal, to: :accepted
    end

    event :cancel do
      transitions from: :accepted, to: :proposal
    end

    event :submit do
      transitions from: :draft, to: :proposal
    end
  end

  belongs_to :event
  belongs_to :speaker,
             counter_cache: true,
             class_name:    User,
             foreign_key:   :user_id,
             inverse_of:    :talks

  default_scope { order('id DESC') }

  validates_presence_of :event, :title, :user_id

end
