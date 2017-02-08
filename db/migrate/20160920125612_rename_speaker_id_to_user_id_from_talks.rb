class RenameSpeakerIdToUserIdFromTalks < ActiveRecord::Migration[5.0]
  def change
    rename_column :talks, :speaker_id, :user_id
  end
end
