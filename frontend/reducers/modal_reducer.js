import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

export default function (state = { show: false }, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { show: true };
    case HIDE_MODAL:
      return { show: false };
    default:
      return state;
  }
}
