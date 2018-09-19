class DeleteTypeColumnOnPaymentsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :payments, :type
  end
end
