class AddOverrideMapWithCoordinates < ActiveRecord::Migration
  def change
    add_column :venues, :override_map_with_coordinates, :boolean, default: false
  end
end
