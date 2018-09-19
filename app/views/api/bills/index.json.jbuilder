json.bills @bills do |bill|
  json.partial! 'api/bills/bill', bill: bill
end
