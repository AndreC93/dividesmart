json.extract! user, :username, :email, :id do
  json.imageUrl :image_url
  json.friendIds :friend_ids
  json.billIds :bill_ids
  json.paymentIds :payment_ids
end

if(@bills)
  json.bills @bills.each do |bill|
    json.partial! 'api/bills/bill', bill: bill
  end
end
