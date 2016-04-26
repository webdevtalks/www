class RenameTalksUserIdToSpeakerId < ActiveRecord::Migration
  def change
    rename_column :talks, :user_id, :speaker_id
  end
end
