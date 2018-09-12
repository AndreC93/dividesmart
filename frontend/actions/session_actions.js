import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const login = userInput => {
  return dispatch => SessionApiUtil.login(userInput).then(user => dispatch(receiveCurrentUser(user)));
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const logout = () => {
  return dispatch => SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const signup = user => {
  return dispatch => SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
};
