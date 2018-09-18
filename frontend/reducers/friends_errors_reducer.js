import { CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_FRIENDS_ERRORS } from '../actions/friend_actions';
import merge from 'lodash/merge';

export default function (state = [], action) {
  let newErrors;
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_FRIENDS_ERRORS:
      newErrors = action.friendsErrors.filter( error => !state.includes(error) );
      return merge([], state, newErrors);
    default:
      return state;
  }
}
