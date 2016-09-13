class AddFacebookToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :facebook, :string
  end
end
