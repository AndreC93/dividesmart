class ChangeFriendsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :friends

    create_table :friends do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end

    add_index :friends, :user_id
    add_index :friends, :friend_id
    add_index :friends, [:user_id, :friend_id]
  end
end
