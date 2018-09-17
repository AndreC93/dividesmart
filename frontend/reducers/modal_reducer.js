import { SHOW_LOGIN_FORM, HIDE_LOGIN_FORM, SHOW_DROP_DOWN_MENU, HIDE_DROP_DOWN_MENU, SHOW_ADD_FRIEND_FORM, HIDE_ADD_FRIEND_FORM, CLEAR_ALL_MODALS } from '../actions/modal_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { login: false, dropDownMenu: false, addFriendForm: false };

export default function (state = defaultState, action) {
  switch (action.type) {
    case CLEAR_ALL_MODALS:
      return defaultState;
    case SHOW_LOGIN_FORM:
      return merge({}, defaultState, { login: true });
    case HIDE_LOGIN_FORM:
      return merge({}, defaultState, { login: false });
    case SHOW_DROP_DOWN_MENU:
      return merge({}, defaultState, { dropDownMenu: true });
    case HIDE_DROP_DOWN_MENU:
      return merge({}, defaultState, { dropDownMenu: false });
    case SHOW_ADD_FRIEND_FORM:
      return merge({}, defaultState, { addFriendForm: true });
    case HIDE_ADD_FRIEND_FORM:
      return merge({}, defaultState, { addFriendForm: false });
      case LOGOUT_CURRENT_USER:
        return defaultState;
    default:
      return state;
  }
}
