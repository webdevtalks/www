class AddStateToLocations < ActiveRecord::Migration
  def change
    change_table :locations do |t|
      t.column :state, :string, null: false
    end
  end
end
