class AddTalksCountToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :talks_count, :integer, default: 0
  end
end
