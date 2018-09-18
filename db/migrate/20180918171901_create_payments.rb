class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    drop_table :bills

    create_table :bills do |t|
      t.integer :creator_id, null: false
      t.string :category, null: false, default: 'General'
      t.decimal :amount, null: false, precision: 13, scale: 2
      t.text :description, null: false
      t.timestamps
    end

    add_index :bills, :creator_id
    add_index :bills, :category

    create_table :payments do |t|
      t.integer :bill_id, null: false
      t.integer :user_id, null: false
      t.decimal :amount, null: false, precision: 13, scale: 2
      t.string :type, null: false, default: 'debt'
      t.timestamps
    end

    add_index :payments, :bill_id
    add_index :payments, :user_id
    add_index :payments, :type
  end
end
