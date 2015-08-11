class Talk < ActiveRecord::Base

  after_create :flag_speaker

  belongs_to :event
  belongs_to :speaker, class_name: 'User', foreign_key: :user_id

  validates_presence_of :event, :speaker, :title, :description

  private

  def flag_speaker
    speaker.update_attribute :is_speaker, true
  end

end
