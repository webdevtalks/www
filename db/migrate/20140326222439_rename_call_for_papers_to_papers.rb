class RenameCallForPapersToPapers < ActiveRecord::Migration
  def change
    rename_table :call_for_papers, :papers
  end
end
