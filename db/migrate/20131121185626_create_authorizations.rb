class CreateAuthorizations < ActiveRecord::Migration
  def change
    create_table :authorizations do |t|
      t.string :provider
      t.string :uid

      t.text :info
      t.text :credentials
      t.text :extra

      t.timestamps
    end
  end
end
