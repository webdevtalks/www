class RemoveIsSpeakerFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :is_speaker, :boolean
  end
end
