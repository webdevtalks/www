class RemoveLocationIdFromEvents < ActiveRecord::Migration
  def change
    remove_reference :events, :location
  end
end
