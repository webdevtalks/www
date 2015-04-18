class AddProfilePhotoUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_photo_url, :string
  end
end
