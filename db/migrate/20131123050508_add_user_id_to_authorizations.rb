class AddUserIdToAuthorizations < ActiveRecord::Migration
  def change
    change_table :authorizations do |t|
      t.references :user, index: true
    end
  end
end
