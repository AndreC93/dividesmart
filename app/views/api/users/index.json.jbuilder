json.array! @user.actual_friends do |friend|
  json.extract! friend, :username, :id
end
