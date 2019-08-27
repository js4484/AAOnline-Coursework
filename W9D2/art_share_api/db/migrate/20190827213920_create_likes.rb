class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :likeable, polymorphic: true
      t.integer :artwork_id, null: false
      t.integer :user_id, null: false
    end

    add_index :likes, [:artwork_id, :user_id], unique: true
    add_index :likes, :user_id
  end
end
