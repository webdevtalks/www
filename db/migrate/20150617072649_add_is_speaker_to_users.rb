class AddIsSpeakerToUsers < ActiveRecord::Migration
  def change
    add_column :users, :is_speaker, :bool, default: false
  end
end
