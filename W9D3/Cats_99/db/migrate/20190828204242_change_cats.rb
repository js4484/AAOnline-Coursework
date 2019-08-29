class ChangeCats < ActiveRecord::Migration[6.0]
  def change
    change_table :cats do |t|
      t.rename :text, :description
    end
  end
end