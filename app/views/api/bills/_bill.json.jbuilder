json.extract! bill, :id, :creator_id, :category, :description  do
  json.balance (humanized_money_with_symbol :balance_cents)
  json.createdAt :created_at
  json.payments(:payments) do |payment|
    json.extract! payment, :id, :user_id, :type do
      json.createdAt :created_at
      json.amount (humanized_money_with_symbol :amount_cents)
    end
  end
end
