class RenameUserProfilePhotoUrlToPhotoUrl < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :profile_photo_url, :photo_url
  end
end
