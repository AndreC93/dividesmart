import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const RECEIVE_FRIENDS_ERRORS = 'RECEIVE_FRIENDS_ERRORS';

export const fetchFriends = () => (
  dispatch => FriendApiUtil.requestFriends().then( friends => dispatch(receiveFriends(friends)))
);

export const receiveFriends = friends => {
  debugger
  return ({
  type: RECEIVE_FRIENDS,
  friends,
})};

export const fetchFriend = (friendId) => (
  dispatch => FriendApiUtil.requestFriend(friendId).then( friend => dispatch(receiveFriend(friend)))
);

export const receiveFriend = user => ({
  type: RECEIVE_FRIEND,
  user,
});

export const deleteFriend = friendId => (
  dispatch => FriendApiUtil.removeFriend(friendId).then( () => dispatch(removeFriend(friendId)))
);

export const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId,
});

export const receiveFriendsErrors = friendsErrors => ({
  type: RECEIVE_FRIENDS_ERRORS,
  friendsErrors,
});

export const addFriends = friends => (
  dispatch => FriendApiUtil.addFriends(friends).then( friends => {
    dispatch(receiveFriendsErrors(friends[1]));
    return dispatch(fetchFriends());
  })
);
