import * as SessionApiUtil from '../util/session_api_util';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const login = userInput => {
  return dispatch => SessionApiUtil.login(userInput).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const logout = () => {
  return dispatch => SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = user => {
  return dispatch => SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
};
