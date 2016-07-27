class CreateSponsors < ActiveRecord::Migration
  def change
    create_table :sponsors do |t|
      t.string :name
      t.string :website
      t.string :twitter
      t.string :image

      t.timestamps null: false
    end
  end
end
