class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, unique: true 

      t.timestamps
    end
    add_index :users, :session_token, unique: true 
    add_index :users, [:username, :password_digest], unique: true
    
  end
end
