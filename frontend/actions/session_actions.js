import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const login = user => {
  return dispatch => SessionApiUtil.login(user).then( user => dispatch(receiveCurrentUser(user)));
};
