class ChangeAmountToBalanceInBills < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :amount
    add_column :bills, :balance, :decimal, null: false, precision: 13, scale: 2
  end
end
