class RemoveStateNullConstraintFromLocations < ActiveRecord::Migration
  def change
    change_column :locations, :state, :string, null: true
  end
end
