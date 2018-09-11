class CreateApiUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :image_url, default: 'default_avatar.png'
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.timestamps
    end

    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
