class CreateCallForPapers < ActiveRecord::Migration
  def change
    create_table :call_for_papers do |t|
      t.string :topic
      t.string :name
      t.string :email
      t.string :description

      t.timestamps
    end
  end
end
