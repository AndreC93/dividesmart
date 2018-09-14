class AddUniqueFriendsCombinationCheck < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, [:friend1_id, :friend2_id]
  end
end
