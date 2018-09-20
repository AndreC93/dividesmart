json.array! @bills.each do |bill|
  json.partial! 'api/bills/bill', bill: bill
end
