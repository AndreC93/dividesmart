import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_FRIENDS:
    case RECEIVE_FRIEND:
    case RECEIVE_BILLS:
      if (!action.bills) return state;
      action.bills.forEach( bill => merge(newState, bill));
      return merge({}, state, newState);
    case RECEIVE_BILL:
      return merge({}, state, action.bill);
    case REMOVE_FRIEND:
      newState = merge({}, state);
      for (let key in newState) {
        if (newState[key]['creatorId'] === action.friendId) {
          delete newState[key];
        }
      }
      return newState;
    case REMOVE_BILL:
      newState = merge({}, state);
      delete newState[action.billId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}
