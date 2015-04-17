class CreateTalks < ActiveRecord::Migration
  def change
    create_table :talks do |t|
      t.string     :title
      t.string     :description
      t.references :event
      t.references :user
      t.timestamps null: false
    end
  end
end
