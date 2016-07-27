class AddActiveToSponsors < ActiveRecord::Migration
  def change
    add_column :sponsors, :active, :boolean
  end
end
