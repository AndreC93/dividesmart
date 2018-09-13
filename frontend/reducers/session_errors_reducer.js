import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export default function (state = [], action) {
  let newErrors;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      newErrors = action.errors.filter( error => !state.includes(error) );
      return merge([], state, newErrors);
    default:
      return state;
  }
}
