import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '.././actions/session_actions';

const defaultState = { currentUserId: null };

export default function (state = defaultState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}
