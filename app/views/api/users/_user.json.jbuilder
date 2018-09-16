json.extract! user, :username, :email, :id do
  json.imageUrl :image_url
  json.friendIds :friend_ids
end
