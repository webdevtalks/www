class AddNotNullToActive < ActiveRecord::Migration
  def change
    Sponsor.update_all(active: false)
    change_column :sponsors, :active, :boolean, null: false, default: false
  end
end
