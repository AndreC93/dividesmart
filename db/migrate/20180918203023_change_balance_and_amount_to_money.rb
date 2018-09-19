class ChangeBalanceAndAmountToMoney < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :balance
    remove_column :payments, :amount
    add_monetize :bills, :balance
    add_monetize :payments, :amount
  end
end
