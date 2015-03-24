class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.date       :date
      t.string     :theme
      t.timestamps null: false
    end
  end
end
