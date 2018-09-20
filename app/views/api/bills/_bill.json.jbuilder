json.set! bill.id do
  json.extract! bill, :id, :category, :description
  json.creatorId bill.creator_id
  json.balance bill.balance_cents
  json.createdAt bill.created_at

  json.payments(bill.payments) do |payment|
    json.id payment.id
    json.userId payment.user_id
    json.createdAt payment.created_at
    json.amount payment.amount_cents
  end
end
