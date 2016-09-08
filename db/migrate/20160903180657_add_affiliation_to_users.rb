class AddAffiliationToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.string :title
      t.string :organization_name
      t.string :organization_url
    end
  end
end
