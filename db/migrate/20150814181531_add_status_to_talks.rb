class AddStatusToTalks < ActiveRecord::Migration
  def change
    add_column :talks, :status, :string
  end
end
