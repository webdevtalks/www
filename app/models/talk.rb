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

    event :cancel do
      transitions from: :accepted, to: :proposal
    end
  end

  default_scope { order('id DESC') }

  belongs_to :event
  belongs_to :speaker, class_name: 'User'

  validates_presence_of :event, :speaker, :title, :description

end
