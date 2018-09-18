class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :creator_id, null: false
      t.string :category, null: false, default: 'General'
      t.float :amount, null: false, scale: 2
      t.text :description, null: false
      t.timestamps
    end

    add_index :bills, :creator_id
    add_index :bills, :category
  end
end
