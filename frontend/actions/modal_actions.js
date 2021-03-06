export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const HIDE_LOGIN_FORM = 'HIDE_LOGIN_FORM';
export const SHOW_DROP_DOWN_MENU = 'SHOW_DROP_DOWN_MENU';
export const HIDE_DROP_DOWN_MENU = 'HIDE_DROP_DOWN_MENU';
export const SHOW_CREDITOR_MENU = 'SHOW_CREDITOR_MENU';
export const HIDE_CREDITOR_MENU = 'HIDE_CREDITOR_MENU';
export const SHOW_CATEGORIES_MENU = 'SHOW_CATEGORIES_MENU';
export const HIDE_CATEGORIES_MENU = 'HIDE_CATEGORIES_MENU';
export const SHOW_ADD_FRIEND_FORM = 'SHOW_ADD_FRIEND_FORM';
export const HIDE_ADD_FRIEND_FORM = 'HIDE_ADD_FRIEND_FORM';
export const SHOW_ADD_BILL_FORM = 'SHOW_ADD_BILL_FORM';
export const HIDE_ADD_BILL_FORM = 'HIDE_ADD_BILL_FORM';
export const CLEAR_ALL_MODALS = 'CLEAR_ALL_MODALS';

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

export const showAddBillForm = () => ({
  type: SHOW_ADD_BILL_FORM,
});

export const hideAddBillForm = () => ({
  type: HIDE_ADD_BILL_FORM,
});

export const showCreditor = () => ({
  type: SHOW_CREDITOR_MENU,
});

export const hideCreditor = () => ({
  type: HIDE_CREDITOR_MENU,
});

export const showCategories = () => ({
  type: SHOW_CATEGORIES_MENU,
});

export const hideCategories = () => ({
  type: HIDE_CATEGORIES_MENU,
});

export const clearAllModals = () => ({
  type: CLEAR_ALL_MODALS,
});
