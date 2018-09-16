export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const HIDE_LOGIN_FORM = 'HIDE_LOGIN_FORM';
export const SHOW_DROP_DOWN_MENU = 'SHOW_DROP_DOWN_MENU';
export const HIDE_DROP_DOWN_MENU = 'HIDE_DROP_DOWN_MENU';
export const SHOW_ADD_FRIEND_FORM = 'SHOW_ADD_FRIEND_FORM';
export const HIDE_ADD_FRIEND_FORM = 'HIDE_ADD_FRIEND_FORM';

export const showLoginForm = () => ({
  type: SHOW_LOGIN_FORM,
});

export const hideLoginForm = () => ({
  type: HIDE_LOGIN_FORM,
});

export const showDropDownMenu = () => ({
  type: SHOW_DROP_DOWN_MENU,
});

export const hideDropDownMenu = () => ({
  type: HIDE_DROP_DOWN_MENU,
});

export const showAddFriendForm = () => ({
  type: SHOW_ADD_FRIEND_FORM,
});

export const hideAddFriendForm = () => ({
  type: HIDE_ADD_FRIEND_FORM,
});
