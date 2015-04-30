class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string     :name
      t.text       :description
      t.float      :latitude
      t.float      :longitude
      t.timestamps null: false
      t.references :location
    end
  end
end
