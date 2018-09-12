import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return merge([], state, action.errors);
    default:
      return state;
  }
}
