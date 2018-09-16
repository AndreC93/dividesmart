import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  let newState = {};
  switch (action.type) {
    case RECEIVE_FRIENDS:
      action.friends.forEach( friend => newState[friend.id] = friend);
      return merge({}, state, newState);
    case RECEIVE_CURRENT_USER:
    case RECEIVE_FRIEND:
      return merge({}, state, { [action.user.id]: action.user });
    case REMOVE_FRIEND:
      newState = merge({}, state);
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
}
