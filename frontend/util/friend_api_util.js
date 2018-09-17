export const addFriend = friendId => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: {id: friendId},
  })
);

export const removeFriend = friendId => (
  $.ajax({
    method: 'DELETE',
    url: '/api/friends/${friendId}',
  })
);

export const requestFriends = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
  })
);

export const requestFriend = friendId => (
  $.ajax({
    method: 'GET',
    url: '/api/users/${friendId}',
    data: { friendId },
  })
);

export const addFriends = usernamesAndEmails => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: { usernamesAndEmails },
  })
);
