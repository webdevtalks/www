class RestoreLocationReferenceToEvents < ActiveRecord::Migration
  def change
    add_reference :events, :location
  end
end
