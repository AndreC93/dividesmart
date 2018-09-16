export const grabAllFriends = state => {
  const friends = Object.values(state.entities.users);
  return friends.filter( friend => friend.id != state.session.currentUserId );
};
