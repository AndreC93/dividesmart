import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  let newState = {};
  switch (action.type) {
    case RECEIVE_BILLS:
      action.bills.forEach( bill => newState[bill.id] = bill);
      return merge({}, state, newState);
    case RECEIVE_BILL:
      return merge({}, state, { [action.bill.id]: action.user });
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
